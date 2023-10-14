const processCountryTableData = (data) => {
  const tableData = [];
  data.forEach((element) => {
    const obj = {};
    obj.country = element.country;
    obj.flag = element.countryInfo.flag;
    obj.iso3 = element.countryInfo.iso3;
    obj.confirmed = element.cases;
    obj.active = element.active;
    obj.recovered = element.recovered;
    obj.deaths = element.deaths;
    tableData.push(obj);
  });
  return tableData;
};

export default processCountryTableData;
