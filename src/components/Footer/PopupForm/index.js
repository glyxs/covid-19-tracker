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
    Textarea
} from '@chakra-ui/react';
import React from 'react';
import { IoIosMail } from 'react-icons/io';

const PopupForm = ({ isOpen, onClose }) => {

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": event.target.getAttribute("name")
            })
        }).then(() => alert("thank-you")).catch(error => alert(error));
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent mx={3}>
                <ModalHeader>Report a bug</ModalHeader>
                <ModalCloseButton />
                <form name="reportBug" method="post" data-netlify="true" onSubmit={handleSubmit} data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="reportBug" />

                    <div hidden>
                        <input name="bot-field" />
                    </div>
                    <ModalBody>
                        <Textarea name="message" variant="filled" maxH="50vh" minH="20vh" placeholder="What went wrong?" mb={3} />
                        <InputGroup mb={3}>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<IoIosMail fontSize="25px" />}
                            />
                            <Input variant="filled" type="email" name="email" placeholder="Your Email" />
                        </InputGroup>
                        <Text fontSize="sm" color="GrayText">Your Email is used for contact purposes only.</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="ghost" mr={3} onClick={onClose}>Cancel</Button>
                        <Button colorScheme="red" type="submit">
                            Submit
                        </Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    );
};

export default PopupForm;
