import {
    Flex,
    Text,
    Link,
    Button,
    useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import PopupForm from './PopupForm';

const Footer = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex mb={6} color="GrayText" fontWeight="600" wrap="wrap" justifyContent="center">
                <Text >Source: <Link isExternal={true} href="https://www.worldometers.info/coronavirus/">Worldometers</Link>, <Link isExternal={true} href="https://github.com/CSSEGISandData/COVID-19">JHUCSSE</Link></Text>
                <Button mx={6} onClick={onOpen} variant="link" color="GrayText">Report a bug</Button>
            </Flex>
            <PopupForm onClose={onClose} isOpen={isOpen} />
        </>
    );
};

export default Footer;
