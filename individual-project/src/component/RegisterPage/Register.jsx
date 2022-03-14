import { Button, Input, Modal, ModalOverlay, FormControl, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormLabel, Text, Alert, AlertIcon } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import { axiosInstance } from '../../configs/api';

function Register() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const [newUserAccount, setNewUserAccount] = useState({
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',
    role: 'user',
  });

  const inputValueHandler = (event) => {
    const { value, name } = event.target;

    setNewUserAccount({
      ...newUserAccount,
      [name]: value,
    });
  };

  const inputButtonHandler = () => {
    const newAccount = {
      username: newUserAccount.username,
      password: newUserAccount.password,
      first_name: newUserAccount.first_name,
      last_name: newUserAccount.last_name,
      email: newUserAccount.email,
      role: 'user',
    };
    axiosInstance.post(`/user_accounts`, newAccount);
  };

  return (
    <>
      <Text ms={2} onClick={onOpen} color="blue.400" cursor="pointer">
        Sign Up
      </Text>
      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" size="lg">
        <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input ref={initialRef} placeholder="First name" name="first_name" onChange={inputValueHandler} />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="Last name" name="last_name" onChange={inputValueHandler} />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="email" name="email" onChange={inputValueHandler} />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="User Name" name="username" onChange={inputValueHandler} />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="password" name="password" onChange={inputValueHandler} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button width={'xl'} colorScheme="blue" onClick={() => inputButtonHandler()}>
              Sign Up
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Register;
