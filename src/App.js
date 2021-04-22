//components
import Header from './components/Header';
import WorldMap from './components/WorldMap';
import CaseSummary from './components/CaseSummary';
import CaseTimeline from './components/CaseTimeline';
import { Container, Flex, Box, Breadcrumb } from '@chakra-ui/react';

//hooks
import GetCaseSummaryData from './adapters/GetCaseSummaryData';
import GetCountriesCasesData from './adapters/GetCountriesCasesData';
import GetCaseTimelineData from './adapters/GetCaseTimelineData';
import { useState } from 'react';
import { useToast } from "@chakra-ui/react";

function App() {
  const toast = useToast();

  const ErrorHandler = (error) => {
    let id = error.status;
    if (!toast.isActive(id)) {
      toast({
        id: id,
        title: "Error " + (error.response && error.status),
        description: ((error.response && error.response) || "Unknown error occurred"),
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
  };

  const [Data, setData] = useState('cases'); //Type of cases to display in timeline
  const CaseTypeSelector = (e) => {
    setData(e.target.value);
  };

  const [SearchISO3, setSearchISO3] = useState('');

  const SearchController = (e) => {
    if (e.target.value !== '' && e.target.value !== '-99') {
      setSearchISO3(e.target.value);
    }
  };

  const { caseSummaryData, caseChartData, SummaryIsLoading } = GetCaseSummaryData(SearchISO3, ErrorHandler);
  const { CountryData, CountryDataIsLoading } = GetCountriesCasesData(ErrorHandler);
  const { caseTimeLineData, timelineIsLoading } = GetCaseTimelineData(SearchISO3, Period, Sort, ErrorHandler);

  return (
    <Container maxW='6xl'>
      <Header data={CountryData} SearchController={SearchController} />
      <Breadcrumb />
      <Flex>
        <Box flex={{ md: 0.75, base: 1 }}>
          <CaseSummary
            data={caseSummaryData}
            isPending={SummaryIsLoading}
            chartData={caseChartData}
          />
          <WorldMap
            isLoading={CountryDataIsLoading}
            data={CountryData}
          />
          <CaseTimeline
            isLoading={timelineIsLoading}
            data={caseTimeLineData && caseTimeLineData[Data]}
            PeriodSelector={PeriodSelector}
            CaseTypeSelector={CaseTypeSelector}
            SortController={SortController}
          />
        </Box>
        <Box
          mb={6} ml={6}
          flex={{ md: 0.25, base: 0 }}
          display={{ md: 'block', base: 'none' }}
          rounded='xl'
          boxShadow='xl'
          p={3}
          bg="white"
        ></Box>
      </Flex>
    </Container>
  );
}

export default App;
