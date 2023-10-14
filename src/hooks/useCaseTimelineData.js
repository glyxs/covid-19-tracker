import { useEffect, useState } from "react";
import useAPIrequest from "../adapters/useAPIRequest";
import daysBetween from "../helpers/daysBetween";
import processAPIData from "../helpers/processAPIData";
import processCaseTimelineData from "../helpers/processCaseTimelineData";

const useCaseTimelineData = (searchTerm, period, sort, errorHandler) => {
  const [caseTimeLineData, setCaseTimeLineData] = useState(null);

  var d1 = new Date();
  if (period !== 0) {
    d1.setMonth(d1.getMonth() - period);
  } else {
    d1 = new Date("December 31, 2019");
  }

  const searchScope = searchTerm === "" ? "all" : searchTerm;

  const APIstring =
    "https://disease.sh/v3/covid-19/historical/" +
    searchScope +
    "?lastdays=" +
    daysBetween(d1, new Date());

  const { response, requestError } = useAPIrequest(APIstring);

  useEffect(() => {
    if (requestError && requestError !== null) {
      errorHandler(requestError);
    }
  }, [requestError, errorHandler]);

  useEffect(() => {
    if (response && response !== null) {
      if (response.timeline) {
        dataRouter(processAPIData(response.timeline), sort);
      } else {
        dataRouter(processAPIData(response), sort);
      }
    }
  }, [response, sort]);

  const dataRouter = (processedAPIData, sort) => {
    setCaseTimeLineData(processCaseTimelineData(processedAPIData, sort));
  };

  return caseTimeLineData;
};

export default useCaseTimelineData;
