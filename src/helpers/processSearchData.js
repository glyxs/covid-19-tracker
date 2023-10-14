const processSearchData = (data) => {
  const searchData = [];
  data.forEach((element) => {
    const obj = {};
    obj.country = element.country;
    obj.flag = element.countryInfo.flag;
    obj.iso3 = element.countryInfo.iso3;
    searchData.push(obj);
  });
  return searchData;
};

export default processSearchData;
