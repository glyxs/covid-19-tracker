import useAPIrequest from "../adapters/useAPIRequest";
import processAPIData from "../helpers/processAPIData";
import processStatsData from "../helpers/processStatsData";
import processChartSummaryData from "../helpers/processChartSummaryData";
import processDataRates from "../helpers/processDataRates";

import { useEffect, useState } from "react";

const useCaseSummaryData = (searchTerm, errorHandler) => {
  const [caseStatsData, setCaseStatsData] = useState(null);
  const [caseChartData, setCaseChartData] = useState(null);
  const [caseDataRates, setCaseDataRates] = useState(null);

  const searchScope = searchTerm === "" ? "all" : searchTerm;

  const APIstring =
    "https://disease.sh/v3/covid-19/historical/" + searchScope + "?lastdays=31";

  const { response, requestError } = useAPIrequest(APIstring);

  useEffect(() => {
    if (requestError && requestError !== null) {
      errorHandler(requestError);
    }
  }, [requestError, errorHandler]);

  useEffect(() => {
    if (response && response !== null) {
      if (response.timeline) {
        dataRouter(processAPIData(response.timeline));
      } else {
        dataRouter(processAPIData(response));
      }
    }
  }, [response]);

  const dataRouter = (processedAPIData) => {
    setCaseStatsData(processStatsData(processedAPIData));
    setCaseDataRates(processDataRates(processedAPIData));
    setCaseChartData(processChartSummaryData(processedAPIData));
  };

  return { caseStatsData, caseChartData, caseDataRates };
};

export default useCaseSummaryData;
