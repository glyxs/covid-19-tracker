import React from "react";
import { Heading, Select, ButtonGroup, Button, Flex, Spacer } from '@chakra-ui/react';

const TimelineControls = ({ PeriodSelector, CaseTypeSelector, SortController }) => {

    return (
        <Flex
            mb={3}
            flexDirection={{ sm: 'column', md: 'row' }}
            alignItems={{ sm: 'start', md: 'center' }}>
            <Heading
                fontWeight={600}
                as='h3'
                size='md'
                mb={{ sm: 3, md: 0 }}
                flex={{ sm: 0.5, md: 0.4 }}>
                Timeline
                </Heading>
            <Spacer />
            <Flex
                flex={1}
                flexDirection={{ xs: 'column-reverse', sm: 'row' }}
                alignItems="flex-end">
                <ButtonGroup isAttached size='sm' w="100%">
                    <Button
                        w="50%"
                        value={7}
                        mx="-px"
                        onClick={SortController}>
                        Weekly
                        </Button>
                    <Button
                        w="50%"
                        value={1}
                        onClick={SortController}>
                        Daily
                        </Button>
                </ButtonGroup>
                <Select
                    size='sm'
                    rounded='md'
                    minW={105}
                    onChange={CaseTypeSelector}
                    my={{ xs: 3, sm: 0 }}
                    mx={{ xs: 0, sm: 1 }}>
                    <option value="cases">Confirmed</option>
                    <option value="active">Active</option>
                    <option value="recovered">Recovered</option>
                    <option value="deaths">Deaths</option>
                </Select>
                <Select
                    size='sm'
                    rounded='md'
                    minW={105}
                    onChange={PeriodSelector}
                    defaultValue={3}>
                    <option value={1}>1 month</option>
                    <option value={3}>3 months</option>
                    <option value={6}>6 months</option>
                    <option value={12}>1 year</option>
                    <option value={0}>All time</option>
                </Select>
            </Flex>
        </Flex>
    );
};

export default TimelineControls;
