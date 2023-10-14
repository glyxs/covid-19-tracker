import daysBetween from "./daysBetween";

const processDataRates = (data) => {
  const elapsedDays = daysBetween(new Date("December 31, 2019"), new Date());

  const ratesData = { recovery: null, mortality: null, days: null };
  ratesData.days = elapsedDays;
  ratesData.recovery = (
    (data.recovered[data.recovered.length - 1] /
      data.cases[data.recovered.length - 1]) *
    100
  ).toFixed(2);
  ratesData.mortality = (
    (data.deaths[data.recovered.length - 1] /
      data.cases[data.recovered.length - 1]) *
    100
  ).toFixed(2);

  return ratesData;
};

export default processDataRates;
