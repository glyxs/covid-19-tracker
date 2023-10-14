import relativeDifference from "./relativeDifference";

const processStatsData = (data) => {
  const statsData = {};
  for (const [key, arr] of Object.entries(data)) {
    if (key !== "dates") {
      statsData[key] = {};
      statsData[key].value = arr[arr.length - 1];
      statsData[key].relDiff = relativeDifference(
        arr[arr.length - 1],
        arr[arr.length - 2],
      );
      if (arr[arr.length - 1] > arr[arr.length - 2]) {
        statsData[key].type = "increase";
      } else {
        statsData[key].type = "decrease";
      }
    }
  }
  return statsData;
};

export default processStatsData;
