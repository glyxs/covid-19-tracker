import { Flex, Text, Link, Spacer, Button } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return (
        <Flex mb={6} color="GrayText" fontWeight="600">
            <Text>Source: <Link isExternal={true} href="https://www.worldometers.info/coronavirus/">Worldometers</Link>, <Link isExternal={true} href="https://github.com/CSSEGISandData/COVID-19">JHUCSSE</Link></Text>
            <Spacer />
            <Button variant="link" color="GrayText">Report a bug</Button>
        </Flex>
    );
};

export default Footer;
