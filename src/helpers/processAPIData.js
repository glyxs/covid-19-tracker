const processAPIData = (rawData) => {
  const processedData = {};
  processedData.dates = [];
  processedData.active = [];
  processedData.newActive = [];

  for (const [key, obj] of Object.entries(rawData)) {
    const newKey = "new" + key.charAt(0).toUpperCase() + key.slice(1);

    processedData[key] = [];
    processedData[newKey] = [];

    var index = 0;
    for (const [date, val] of Object.entries(obj)) {
      processedData[key].push(val);

      if (index > 0) {
        processedData[newKey].push(
          processedData[key][index] - processedData[key][index - 1],
        );

        if (newKey === "newCases") {
          processedData.newActive.push(processedData[newKey][index - 1]);
        } else {
          processedData.newActive[index - 1] =
            processedData.newActive[index - 1] -
            processedData[newKey][index - 1];
        }
      }

      const newDate = new Date(date).toDateString().substr(4);
      if (!processedData.dates.includes(newDate)) {
        processedData.dates.push(newDate);
      }

      if (key === "cases") {
        processedData.active.push(val);
      } else {
        processedData.active[index] = processedData.active[index] - val;
      }

      index++;
    }
    processedData[key].shift();
  }

  processedData.dates.shift();
  processedData.active.shift();

  return processedData;
};

export default processAPIData;
