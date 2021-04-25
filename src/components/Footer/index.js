import {
    Flex,
    Text,
    Link,
    Button,
    useDisclosure,
    Box
} from '@chakra-ui/react';
import React from 'react';
import PopupForm from './PopupForm';

const Footer = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex mb={6} color="GrayText" fontWeight="600" wrap="wrap" justifyContent="center">
                <Text my={3}>Source: <Link isExternal={true} href="https://www.worldometers.info/coronavirus/">Worldometers</Link>, <Link isExternal={true} href="https://github.com/CSSEGISandData/COVID-19">JHUCSSE</Link></Text>
                <Text my={3} mx={12}>Designed and developed by <Link isExternal={true} href="https://stepanpavlov.com">Stepan Pavlov</Link></Text>
                <Box my={3}>
                    <Button onClick={onOpen} variant="link" color="GrayText">Report a bug</Button>
                </Box>
            </Flex>
            <PopupForm onClose={onClose} isOpen={isOpen} />
        </>
    );
};

export default Footer;
