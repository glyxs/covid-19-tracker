import { Container, Flex, Box, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Breadcrumbs from "./components/Breadcrumbs";
import CaseDataRates from "./components/CaseDataRates";
import CaseSummary from "./components/CaseSummary";
import CaseTimeline from "./components/CaseTimeline";
import CountryTable from "./components/CountryTable";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WorldMap from "./components/WorldMap";
import useCaseSummaryData from "./hooks/useCaseSummaryData";
import useCountryCasesData from "./hooks/useCountryCasesData";

function App() {
  const toast = useToast();

  const [currentError, setCurrentError] = useState(null);

  const errorHandler = (error) => {
    setCurrentError(error);
  };

  useEffect(() => {
    if (currentError && currentError !== null) {
      const id = currentError.message;
      if (!toast.isActive(id)) {
        toast({
          id: id,
          title: currentError.request
            ? "Request error occured"
            : currentError.response
            ? "Response error occured"
            : "Error",
          description: currentError.message
            ? currentError.message
            : "Unknown error",
          status: "error",
          duration: 10000,
          isClosable: true,
        });
      }
    }
  }, [currentError, toast]);

  const [searchTerm, setSearchTerm] = useState("");
  const [countryName, setCountryName] = useState("");

  const { caseStatsData, caseChartData, caseDataRates } = useCaseSummaryData(
    searchTerm,
    errorHandler,
  );
  const { countrySearchData, countryTableData, worldMapData } =
    useCountryCasesData(errorHandler);

  const searchController = (e, country) => {
    if (e.target.value !== "-99" && e.target.value !== searchTerm) {
      setSearchTerm(e.target.value);
      setCountryName(country);
    }
  };

  return (
    <Container maxW="7xl" overflowX="hidden">
      <Header
        searchData={countrySearchData}
        searchController={searchController}
      />
      <Breadcrumbs country={countryName} searchController={searchController} />
      <Flex direction="row">
        <Box flex={{ base: 1, md: 3 }}>
          <CaseSummary
            data={caseStatsData}
            chartData={caseChartData}
            searchTerm={searchTerm}
          />
          <Box mt={6} display={{ base: "block", lg: "none" }}>
            <CaseDataRates data={caseDataRates} searchTerm={searchTerm} />
          </Box>
          <Box mt={6} display={{ base: "block", lg: "none" }}>
            <CountryTable
              data={countryTableData}
              searchTerm={searchTerm}
              searchController={searchController}
            />
          </Box>
          <WorldMap data={worldMapData} searchController={searchController} />
          <CaseTimeline errorHandler={errorHandler} searchTerm={searchTerm} />
        </Box>
        <Box flex={1} display={{ base: "none", lg: "block" }}>
          <Flex direction="column" h="100%" ml={6}>
            <CaseDataRates data={caseDataRates} searchTerm={searchTerm} />
            <CountryTable
              data={countryTableData}
              searchTerm={searchTerm}
              searchController={searchController}
            />
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </Container>
  );
}

export default App;
