import { Box, Flex, Spacer, useColorModeValue, Heading, Skeleton, Select } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const CountryTable = ({ data, searchController, searchTerm }) => {

    const [tableLoading, setTableIsLoading] = useState(true);

    useEffect(() => {
        if (data && data !== null) {
            setTableIsLoading(false);
        } else {
            setTableIsLoading(true);
        }
    }, [data]);

    const [DataType, setDataType] = useState('confirmed');
    const CaseTypeSelector = (e) => {
        setDataType(e.target.value);
    };

    const bg = useColorModeValue("bg.boxBgLight", "bg.boxBgDark");
    const bgHover = useColorModeValue("bg.boxBgHoverLight", "bg.boxBgHoverDark");



    return (
        <Box rounded='xl' boxShadow='xl' p={3} bg={bg} my={6}>
            <Box display="flex" flexDirection="row" flexWrap="wrap">
                <Heading flex="80%" fontWeight={600} as='h3' size='md' mb={3}>
                    Top Countries
                </Heading>
                <Select
                    onChange={CaseTypeSelector}
                    flex="10%"
                    size='sm'
                    rounded='md'
                    minW={110}
                    mb={3}>
                    <option value="confirmed">Confirmed</option>
                    <option value="active">Active</option>
                    <option value="recovered">Recovered</option>
                    <option value="deaths">Deaths</option>
                </Select>
            </Box>
            <Box display="flex" flexDirection="column">
                <hr />
                <Skeleton isLoaded={!tableLoading && data}>
                    <Box w="100%" minW="230px" h={{ base: "300px", lg: "680px" }} overflowY="scroll" overflowX="hidden">
                        {data && data.sort((a, b) => {
                            return b[DataType] - a[DataType];
                        }).map((val, key) => {
                            return (
                                <div key={key}>
                                    <Flex
                                        bg={searchTerm === val.iso3 ? bgHover : bg}
                                        title={'Click to view ' + val.country + ' summary'}
                                        onClick={e => {
                                            e.target.value = val.iso3;
                                            searchController(e, val.country);
                                        }}
                                        cursor="pointer"
                                        flexDirection="row"
                                        alignItems="center"
                                        p={2}
                                        _hover={{
                                            bg: bgHover
                                        }}
                                    >
                                        <Heading mr={1} size="xs" minW="28px" fontWeight={500}>{key + 1}.</Heading>
                                        <img
                                            style={{ borderRadius: "3px" }}
                                            src={val.flag}
                                            alt={val.country}
                                            height="20px" width="34px" />
                                        <Heading mx={3} size="xs" fontWeight={500}>{val.country}</Heading>
                                        <Spacer />
                                        <Heading size="xs" mx={1}>{val[DataType].toLocaleString()}</Heading>
                                    </Flex>
                                    <hr />
                                </div>
                            );
                        })}
                    </Box>
                </Skeleton>
            </Box >
        </Box>
    );
};

export default CountryTable;
