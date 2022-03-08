import { Button, Input, Modal, ModalOverlay, FormControl, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormLabel, Text } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import React from 'react';

function Register() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <>
      <Text ms={2} onClick={onOpen} color="blue.400">
        Sign Up
      </Text>
      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" size="lg">
        <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="Last name" />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="email" />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="password" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button width={'xl'} colorScheme="blue">
              Sign Up
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Register;
