import useAPIrequest from './useAPIrequest';
import { useState, useEffect } from 'react';
import NewDataByDate from '../helpers/NewDataByDate';
import RelativeDifference from '../helpers/RelativeDifference';
import DaysBetween from '../helpers/DaysBetween';

const GetCaseSummaryData = (SearchISO3, ErrorHandler) => {

    const [caseSummaryData, setCaseSummaryData] = useState(null);
    const [caseChartData, setCaseChartData] = useState(null);
    const [caseDataRates, setCaseDataRates] = useState(null);
    const [Scope, setScope] = useState('all');



    useEffect(() => {
        if (SearchISO3 !== '') {
            setScope(SearchISO3);
        } else {
            setScope('all');
        }
    }, [SearchISO3]);

    const APIstring = 'https://corona.lmao.ninja/v3/covid-19/historical/' + Scope + '?lastdays=31';

    const { response, requestError } = useAPIrequest(APIstring);

    useEffect(() => {

        const processAPIdata = (data, days, nKeys, tKeys) => {

            const { ans, labels } = NewDataByDate(data);

            processSummaryData(ans, nKeys, tKeys);

            processChartData(ans, labels, nKeys, tKeys);

            processDataRates(ans, days);

        };

        const days = DaysBetween(new Date("December 31, 2019"), new Date());
        const tKeys = ['cases', 'active', 'recovered', 'deaths'];
        const nKeys = ['newCases', 'newActive', 'newRecovered', 'newDeaths'];

        if (response && response !== null) {
            if (response.timeline) {
                processAPIdata(response.timeline, days, nKeys, tKeys);
            } else {
                processAPIdata(response, days, nKeys, tKeys);
            }
        }
    }, [response]);

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

    const processSummaryData = (ans, nKeys, tKeys) => {
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

        setCaseSummaryData(ans);
    };

    const processChartData = (ans, labels, nKeys, tKeys) => {
        var chartData = {};
        for (var k = 0; k < nKeys.length; k++) {
            chartData[nKeys[k]] = {};
            chartData[nKeys[k]].labels = labels;
            chartData[nKeys[k]].datasets = [{}];
            chartData[nKeys[k]].datasets[0].data = [];
            chartData[nKeys[k]].datasets[0].fill = true;
            chartData[nKeys[k]].datasets[0].tension = 0.4;
            chartData[nKeys[k]].datasets[0].borderWidth = 2;

            for (var i = 0; i < ans.length; i++) {
                chartData[nKeys[k]].datasets[0].data.push(ans[i][nKeys[k]]);
            }

            if (nKeys[k] === 'newRecovered') {
                chartData[nKeys[k]].datasets[0].borderColor = ans[ans.length - 1].helpers[nKeys[k]].type === 'increase' ? "#2DD249" : '#FF0E00';
                chartData[nKeys[k]].datasets[0].backgroundColor = ans[ans.length - 1].helpers[nKeys[k]].type === 'increase' ? "rgba(78, 217, 100, 0.3)" : 'rgba(255, 58, 49, 0.3)';
            } else {
                chartData[nKeys[k]].datasets[0].borderColor = ans[ans.length - 1].helpers[nKeys[k]].type === 'increase' ? '#FF0E00' : "#2DD249";
                chartData[nKeys[k]].datasets[0].backgroundColor = ans[ans.length - 1].helpers[nKeys[k]].type === 'increase' ? 'rgba(255, 58, 49, 0.3)' : "rgba(78, 217, 100, 0.3)";
            }
        }
        setCaseChartData(chartData);
    };

    const processDataRates = (ans, days) => {
        var dataRates = { recovery: {}, mortality: {}, days: {} };
        dataRates.recovery = { value: ((ans[ans.length - 1].recovered / ans[ans.length - 1].cases) * 100).toFixed(2) };
        dataRates.mortality = { value: ((ans[ans.length - 1].deaths / ans[ans.length - 1].cases) * 100).toFixed(2) };
        dataRates.days = { value: days };
        setCaseDataRates(dataRates);
    };

    return { caseSummaryData, caseChartData, caseDataRates };
};

export default GetCaseSummaryData;
