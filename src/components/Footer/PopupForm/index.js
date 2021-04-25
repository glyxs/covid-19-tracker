import {
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    InputGroup,
    InputLeftElement,
    Input,
    Textarea,
    Link
} from '@chakra-ui/react';
import React from 'react';
import { IoIosMail } from 'react-icons/io';

const PopupForm = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent mx={3}>
                <ModalHeader>Report a bug</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Textarea variant="filled" maxH="50vh" minH="20vh" placeholder="What went wrong?" mb={3} />
                    <InputGroup mb={3}>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<IoIosMail fontSize="25px" />}
                        />
                        <Input variant="filled" type="email" placeholder="Your Email" />
                    </InputGroup>
                    <Text fontSize="sm" color="GrayText">Your Email is not being shared to a thir party and it is used for contact purposes only.</Text>
                </ModalBody>
                <ModalFooter>
                    <Button variant="ghost" mr={3} onClick={onClose}>Cancel</Button>
                    <Button colorScheme="red">
                        Submit
                        </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default PopupForm;
