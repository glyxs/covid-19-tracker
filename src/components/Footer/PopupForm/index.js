import {
  useColorModeValue,
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
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import handleFormSubmit from "../../../adapters/handleFormSubmit";

const PopupForm = ({ isOpen, onClose, errorHandler }) => {
  const toast = useToast();

  const bg = useColorModeValue("bg.boxBgLight", "bg.boxBgDark");
  const color = useColorModeValue(
    "color.secondaryLight",
    "color.secondaryDark",
  );

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitSuccess = () => {
    onClose();
    toast({
      title: "Thank you!",
      description: "Your report was submitted",
      status: "success",
      duration: 10000,
      isClosable: true,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent rounded="xl" p={3} bg={bg} mx={3}>
        <ModalHeader>Report a bug</ModalHeader>
        <ModalCloseButton />
        <form
          name="reportBug"
          method="post"
          data-netlify="true"
          onSubmit={(e) =>
            handleFormSubmit(e, submitSuccess, errorHandler, message, email)
          }
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="reportBug" />
          <div hidden>
            <input name="bot-field" />
          </div>
          <ModalBody>
            <Textarea
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              name="message"
              variant="filled"
              maxH="50vh"
              minH="20vh"
              placeholder="What went wrong?"
              mb={3}
              isRequired={true}
            />
            <InputGroup mb={3}>
              <InputLeftElement
                pointerEvents="none"
                children={<IoIosMail fontSize="25px" />}
              />
              <Input
                isRequired={true}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                variant="filled"
                type="email"
                name="email"
                placeholder="Your Email"
              />
            </InputGroup>
            <Text fontSize="sm" color={color}>
              Your Email is used for contact purposes only.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
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
