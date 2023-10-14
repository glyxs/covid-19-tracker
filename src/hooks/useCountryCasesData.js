import { useEffect, useState } from "react";
import useAPIrequest from "../adapters/useAPIRequest";
import processCountryTableData from "../helpers/processCountryTableData";
import processSearchData from "../helpers/processSearchData";
import processWorldMapData from "../helpers/processWorldMapData";

const useCountryCasesData = (errorHandler) => {
  const [countrySearchData, setCountrySearchData] = useState(null);
  const [countryTableData, setCountryTableData] = useState(null);
  const [worldMapData, setWorldMapData] = useState(null);

  const APIstring = "/api/v3/covid-19/countries";

  const { response, requestError } = useAPIrequest(APIstring);

  useEffect(() => {
    if (requestError && requestError !== null) {
      errorHandler(requestError);
    }
  }, [requestError, errorHandler]);

  useEffect(() => {
    if (response && response !== null) {
      dataRouter(response);
    }
  }, [response]);

  const dataRouter = (rawAPIData) => {
    setCountrySearchData(processSearchData(rawAPIData));
    setCountryTableData(processCountryTableData(rawAPIData));
    setWorldMapData(processWorldMapData(rawAPIData));
  };

  return { countrySearchData, countryTableData, worldMapData };
};

export default useCountryCasesData;
