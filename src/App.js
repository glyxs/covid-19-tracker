//components
import Header from "./components/Header";
import WorldMap from "./components/WorldMap";
import CaseSummary from "./components/CaseSummary";
import CaseTimeline from "./components/CaseTimeline";
import { Container, Box, Flex } from "@chakra-ui/react";

//hooks
import GetCaseSummaryData from "./adapters/GetCaseSummaryData";
import GetCountriesCasesData from "./adapters/GetCountriesCasesData";
import GetCaseTimelineData from "./adapters/GetCaseTimelineData";
import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import CaseDataRates from "./components/CaseDataRates";
import CountryTable from "./components/CountryTable";

function App() {
  const toast = useToast();

  var err = "";

  const ErrorHandler = (error) => {
    const id = error.message;
    if (!toast.isActive(id) && err !== error.message) {
      err = error.message;
      toast({
        id,
        title: error.request ? "Request error occured" : error.response ? "Response error occured" : "Error",
        description: error.message ? error.message : "Unknown error",
        status: "error",
        duration: 10000,
        isClosable: true,
      });
    }
  };

  const [Sort, setSort] = useState(7); //Sorting parameter in days e.g. 7 will return sum of cases for 7 days
  const SortController = (e) => {
    setSort(parseInt(e.target.value));
  };

  const [Period, setPeriod] = useState(3); //Period of the case timeline in months
  const PeriodSelector = (e) => {
    setPeriod(parseInt(e.target.value));
    setTimelineIsLoading(true);
  };

  const [Data, setData] = useState("cases"); //Type of cases to display in timeline
  const CaseTypeSelector = (e) => {
    setData(e.target.value);
  };

  const [SummaryIsLoading, setSummaryIsLoading] = useState(true);
  const [timelineIsLoading, setTimelineIsLoading] = useState(true);

  const SearchController = (e, country) => {
    if (e.target.value !== "-99" && e.target.value !== SearchISO3) {
      setSummaryIsLoading(true);
      setTimelineIsLoading(true);
      setSearchISO3(e.target.value);
      setCountryName(country);
    }
  };

  const [SearchISO3, setSearchISO3] = useState("");
  const [CountryName, setCountryName] = useState("");

  const {
    caseSummaryData,
    caseChartData,
    caseDataRates,
  } = GetCaseSummaryData(SearchISO3, ErrorHandler);

  useEffect(() => {
    if (caseSummaryData && caseSummaryData !== null) {
      setSummaryIsLoading(false);
    }
  }, [caseSummaryData]);

  const { CountryData, CountryDataIsLoading } = GetCountriesCasesData(
    ErrorHandler
  );


  const { caseTimeLineData } = GetCaseTimelineData(
    SearchISO3,
    Period,
    Sort,
    ErrorHandler
  );

  useEffect(() => {
    if (caseTimeLineData && caseTimeLineData !== null) {
      setTimelineIsLoading(false);
    }
  }, [caseTimeLineData]);

  return (
    <Container maxW="7xl" maxH="min-content" pos="relative" overflowX="hidden">
      <Header data={CountryData} SearchController={SearchController} />
      <Breadcrumbs country={CountryName} SearchController={SearchController} />
      <Flex direction="row" maxH="min-content">
        <Box flex={{ base: 1, md: 3 }}>
          <CaseSummary
            data={caseSummaryData}
            isPending={SummaryIsLoading}
            chartData={caseChartData}
          />
          <Box mt={6} display={{ base: "block", lg: "none" }}>
            <CaseDataRates data={caseDataRates} isLoading={SummaryIsLoading} />
          </Box>
          <WorldMap isLoading={CountryDataIsLoading} data={CountryData} SearchController={SearchController} />
          <Box mt={6} display={{ base: "block", lg: "none" }}>
            <CountryTable
              data={CountryData}
              isLoading={CountryDataIsLoading}
              SearchController={SearchController}
              SearchISO3={SearchISO3}
            />
          </Box>
          <CaseTimeline
            Sort={Sort}
            isLoading={timelineIsLoading}
            data={caseTimeLineData && caseTimeLineData[Data]}
            PeriodSelector={PeriodSelector}
            CaseTypeSelector={CaseTypeSelector}
            SortController={SortController}
          />
        </Box>
        <Box flex={1} display={{ base: "none", lg: "block" }}>
          <Flex direction="column" h="100%" ml={6}>
            <CaseDataRates data={caseDataRates} isLoading={SummaryIsLoading} />
            <CountryTable
              data={CountryData}
              isLoading={CountryDataIsLoading}
              SearchController={SearchController}
              SearchISO3={SearchISO3}
            />
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </Container>
  );
}

export default App;
