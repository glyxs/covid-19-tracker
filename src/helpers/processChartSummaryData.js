const processChartSummaryData = (data) => {
    const chartData = {};
    for (const [key, arr] of Object.entries(data)) {
        if (key !== 'dates' && key.includes('new')) {
            chartData[key] = {};
            chartData[key].labels = data.dates;
            chartData[key].datasets = [{}];
            chartData[key].datasets[0].data = arr;
            chartData[key].datasets[0].fill = true;
            chartData[key].datasets[0].tension = 0.4;
            chartData[key].datasets[0].borderWidth = 2;

            if (key === 'newRecovered') {
                chartData[key].datasets[0].borderColor = arr[arr.length - 1] > arr[arr.length - 2] ? "#2DD249" : '#FF0E00';
                chartData[key].datasets[0].backgroundColor = arr[arr.length - 1] > arr[arr.length - 2] ? "rgba(78, 217, 100, 0.3)" : 'rgba(255, 58, 49, 0.3)';
            } else {
                chartData[key].datasets[0].borderColor = arr[arr.length - 1] > arr[arr.length - 2] ? '#FF0E00' : "#2DD249";
                chartData[key].datasets[0].backgroundColor = arr[arr.length - 1] > arr[arr.length - 2] ? 'rgba(255, 58, 49, 0.3)' : "rgba(78, 217, 100, 0.3)";
            }
        }
    }
    return chartData;
};

export default processChartSummaryData;
