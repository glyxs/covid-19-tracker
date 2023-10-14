const processCaseTimelineData = (data, sort) => {
  const chartData = {};
  const colors = {
    cases: "rgba(128, 128, 128, 0.5)",
    active: "rgba(11, 196, 245, 0.5)",
    recovered: "rgba(45, 210, 73, 0.5)",
    deaths: "rgba(255, 14, 0, 0.5)",
  };
  const borderColors = {
    cases: "rgba(128, 128, 128, 1)",
    active: "rgba(11, 196, 245, 1)",
    recovered: "rgba(45, 210, 73, 1)",
    deaths: "rgba(255, 14, 0, 1)",
  };

  for (const [key, arr] of Object.entries(data)) {
    if (!key.includes("new") && key !== "dates") {
      chartData[key] = [];
      chartData[key].labels = [];
      chartData[key].datasets = [{}];
      chartData[key].datasets[0].data = [];
      chartData[key].datasets[0].backgroundColor = [];
      chartData[key].datasets[0].borderColor = [];
      chartData[key].datasets[0].fill = true;
      chartData[key].datasets[0].tension = 0.4;
      chartData[key].datasets[0].borderWidth = 2;

      for (var i = 0; i < arr.length - 1; i = i + sort) {
        chartData[key].datasets[0].data.push(arr[i]);
        chartData[key].labels.push(data.dates[i]);
        chartData[key].datasets[0].backgroundColor.push(colors[key]);
        chartData[key].datasets[0].borderColor.push(borderColors[key]);
      }
      i = arr.length - 1;
      if (chartData[key][chartData[key].length - 1] !== arr[i]) {
        chartData[key].datasets[0].data.push(arr[i]);
        chartData[key].labels.push(data.dates[i]);
        chartData[key].datasets[0].borderColor.push("rgba(255, 159, 16, 1)");
        chartData[key].datasets[0].backgroundColor.push(
          "rgba(255, 159, 16, 0.5)",
        );
      }
    }
  }
  return chartData;
};

export default processCaseTimelineData;
