import useAPIrequest from './useAPIrequest';
import { useState, useEffect } from 'react';
import NewDataByDate from '../helpers/NewDataByDate';
import DaysBetween from '../helpers/DaysBetween';

const GetCaseTimelineData = (SearchISO3, period, Sort, ErrorHandler) => {

    const [caseTimeLineData, setCaseTimeLineData] = useState(null);
    const [timelineIsLoading, setTimelineIsLoading] = useState(true);

    var d1 = new Date();
    if (period !== 0) {
        d1.setMonth(d1.getMonth() - period);
    } else {
        d1 = new Date("December 31, 2019");
    }

    const [Scope, setScope] = useState('all');

    useEffect(() => {
        if (SearchISO3 !== '') {
            setScope(SearchISO3);
            console.log("scope changed");
        } else {
            setScope('all');
        }
    }, [SearchISO3]);

    const APIstring = 'https://corona.lmao.ninja/v3/covid-19/historical/' + Scope + '?lastdays=' + DaysBetween(d1, new Date());

    const { response, requestError } = useAPIrequest(APIstring);

    useEffect(() => {
        if (response) {
            if (response.timeline) {
                processAPIdata(response.timeline, Sort);
            } else {
                processAPIdata(response, Sort);
            }
        }
    }, [response, Sort]);

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

    const processAPIdata = (data, Sort) => {
        if (data) {
            const { ans, labels } = NewDataByDate(data);

            const tKeys = ['cases', 'active', 'recovered', 'deaths'];
            const nKeys = ['newCases', 'newActive', 'newRecovered', 'newDeaths'];
            const colors = ['#808080', '#0bc4f5', '#2DD249', '#FF0E00'];

            for (var i = 1; i < ans.length; i++) {
                for (var k = 0; k < tKeys.length; k++) {
                    ans[i][nKeys[k]] = ans[i][tKeys[k]] - ans[i - 1][tKeys[k]];
                }
            }

            ans.shift();
            const sortBy = Sort;
            var chartData = {};
            for (k = 0; k < tKeys.length; k++) {
                chartData[tKeys[k]] = {};
                var arr = [];
                for (i = 0; i < labels.length - 1; i = i + sortBy) {
                    arr.push(labels[i]);
                }
                i = labels.length - 1;
                if (labels[i] !== arr[arr.length - 1]) {
                    arr.push(labels[i]);
                }
                chartData[tKeys[k]].labels = arr;
                chartData[tKeys[k]].datasets = [{}];
                chartData[tKeys[k]].datasets[0].data = [];
                chartData[tKeys[k]].datasets[0].backgroundColor = [];
                chartData[tKeys[k]].datasets[0].borderColor = [];
                chartData[tKeys[k]].datasets[0].fill = true;
                chartData[tKeys[k]].datasets[0].fillOpacity = 0.5;
                chartData[tKeys[k]].datasets[0].tension = 0.4;
                chartData[tKeys[k]].datasets[0].borderWidth = 2;

                for (i = 0; i < ans.length - 1; i = i + sortBy) {
                    chartData[tKeys[k]].datasets[0].data.push(ans[i][tKeys[k]]);
                    chartData[tKeys[k]].datasets[0].borderColor.push(colors[k]);
                    chartData[tKeys[k]].datasets[0].backgroundColor.push(colors[k]);
                }
                i = ans.length - 1;
                chartData[tKeys[k]].datasets[0].data.push(ans[i][tKeys[k]]);
                chartData[tKeys[k]].datasets[0].borderColor.push('#ff9f10');
                chartData[tKeys[k]].datasets[0].backgroundColor.push('rgba(255, 159, 16, 0.5)');
            }

            setCaseTimeLineData(chartData);
            setTimelineIsLoading(false);
        };
    };

    return { caseTimeLineData, timelineIsLoading };
};

export default GetCaseTimelineData;
