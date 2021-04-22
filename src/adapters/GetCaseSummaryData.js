import MakeAPIrequest from './MakeAPIrequest';
import { useState, useEffect } from 'react';
import NewDataByDate from '../helpers/NewDataByDate';
import RelativeDifference from '../helpers/RelativeDifference';

const GetCaseSummaryData = (SearchISO3, ErrorHandler) => {

    const [caseSummaryData, setCaseSummaryData] = useState(null);
    const [caseChartData, setCaseChartData] = useState(null);
    const [SummaryIsLoading, setSummaryIsLoading] = useState(true);
    var scope = 'all';

    if (SearchISO3 !== '') {
        scope = SearchISO3;
    } else {
        scope = 'all';
    }

    const APIstring = 'https://corona.lmao.ninja/v3/covid-19/historical/' + scope + '?lastdays=31';

    const { response, requestError } = MakeAPIrequest(APIstring);

    useEffect(() => {
        if (response) {
            if (scope !== 'all') {
                processAPIdata(response.timeline);
            } else {
                processAPIdata(response);
            }
        }
    }, [response, scope]);

    useEffect(() => {
        if (requestError) {
            if (requestError.response) {
                ErrorHandler(requestError.response);
            } else if (requestError.request) {
                ErrorHandler(requestError.request);
            } else {
                ErrorHandler(requestError);
            }
        }
    }, [requestError, ErrorHandler]);

    const processAPIdata = (data) => {
        if (data) {
            const { ans, labels } = NewDataByDate(data);

            const tKeys = ['cases', 'active', 'recovered', 'deaths'];
            const nKeys = ['newCases', 'newActive', 'newRecovered', 'newDeaths'];

            ans[ans.length - 1].helpers = {};

            for (var i = 1; i < ans.length; i++) {
                for (var k = 0; k < tKeys.length; k++) {

                    ans[i][nKeys[k]] = ans[i][tKeys[k]] - ans[i - 1][tKeys[k]];
                    if (i === ans.length - 1) {
                        ans[ans.length - 1].helpers[nKeys[k]] = {};
                        ans[ans.length - 1].helpers[nKeys[k]].data = RelativeDifference(ans[i][nKeys[k]], ans[i - 1][nKeys[k]]);
                        if (ans[i][nKeys[k]] > ans[i - 1][nKeys[k]]) {
                            ans[ans.length - 1].helpers[nKeys[k]].type = 'increase';
                        } else {
                            ans[ans.length - 1].helpers[nKeys[k]].type = 'decrease';
                        }
                    }
                }
            }

            ans.shift();

            var chartData = {};
            for (k = 0; k < nKeys.length; k++) {
                chartData[nKeys[k]] = {};
                chartData[nKeys[k]].labels = labels;
                chartData[nKeys[k]].datasets = [{}];
                chartData[nKeys[k]].datasets[0].data = [];
                chartData[nKeys[k]].datasets[0].fill = true;
                chartData[nKeys[k]].datasets[0].tension = 0.4;
                chartData[nKeys[k]].datasets[0].borderWidth = 2;

                for (i = 0; i < ans.length; i++) {
                    chartData[nKeys[k]].datasets[0].data.push(ans[i][nKeys[k]]);
                }

                if (nKeys[k] === 'newRecovered') {
                    chartData[nKeys[k]].datasets[0].borderColor = ans[ans.length - 1].helpers[nKeys[k]].type === 'increase' ? "#4ED964" : '#FF3A31';
                    chartData[nKeys[k]].datasets[0].backgroundColor = ans[ans.length - 1].helpers[nKeys[k]].type === 'increase' ? "rgba(78, 217, 100, 0.3)" : 'rgba(255, 58, 49, 0.3)';
                } else {
                    chartData[nKeys[k]].datasets[0].borderColor = ans[ans.length - 1].helpers[nKeys[k]].type === 'increase' ? '#FF3A31' : "#4ED964";
                    chartData[nKeys[k]].datasets[0].backgroundColor = ans[ans.length - 1].helpers[nKeys[k]].type === 'increase' ? 'rgba(255, 58, 49, 0.3)' : "rgba(78, 217, 100, 0.3)";
                }
            }

            setCaseSummaryData(ans);
            setCaseChartData(chartData);
            setSummaryIsLoading(false);
        };
    };

    return { caseSummaryData, caseChartData, SummaryIsLoading };
};

export default GetCaseSummaryData;
