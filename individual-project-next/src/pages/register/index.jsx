import { Button, Input, Modal, ModalOverlay, FormControl, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormLabel, Text, Alert, AlertIcon, useToast } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { axiosInstance } from '../../configs';
import { useFormik, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

function Register() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const dispatch = useDispatch();
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
      first_name: '',
      last_name: '',
      email: '',
      role: 'user',
    },
    onSubmit: async (values) => {
      try {
        const res = await axiosInstance.get('user_accounts', {
          params: {
            username: values.username,
            email: values.email,
          },
        });

        if (!res.data.length) {
          axiosInstance.post(`/user_accounts`, formik.values);
        } else if (res.data[0].username.length || res.data[0].email.length) {
          toast({
            title: 'Error',
            description: 'username or email has been registered',
            status: 'error',
          });
        }
      } catch (err) {
        console.log(err);
        toast({
          title: 'Error',
          description: 'username or email has been registered ',
          status: 'error',
        });
      }
    },

    validationSchema: Yup.object().shape({
      username: Yup.string().required('This field is required').min(3, 'Your username has to be 3 characters or more'),
      password: Yup.string()
        .required('This field is required')
        .min(8, 'Your password needs at least 8 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'),
      email: Yup.string().required('This field is required').email('Please use a valid email'),
    }),
    validateOnChange: false,
  });

  // const inputValueHandler = (event) => {
  //   const { value, name } = event.target;

  //   setNewUserAccount({
  //     ...newUserAccount,
  //     [name]: value,
  //   });
  // };

  // const inputButtonHandler = () => {
  //   const newAccount = {
  //     username: newUserAccount.username,
  //     password: newUserAccount.password,
  //     first_name: newUserAccount.first_name,
  //     last_name: newUserAccount.last_name,
  //     email: newUserAccount.email,
  //     role: 'user',
  //   };
  //   axiosInstance.post(`/user_accounts`, newAccount);
  // };

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
              <Input ref={initialRef} placeholder="First name" name="first_name" type="text" onChange={formik.handleChange} value={formik.values.first_name} />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="Last name" name="last_name" type="text" onChange={formik.handleChange} value={formik.values.last_name} />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="User Name" name="username" type="text" onChange={formik.handleChange} value={formik.values.username} />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="password" name="password" type="password" onChange={formik.handleChange} values={formik.values.password} />
            </FormControl>
            <FormControl mt={4}>
              <Input placeholder="confirm Password" name="confirmPassword" type="password" onChange={formik.handleChange} values={formik.values.confirmPassword} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button width={'xl'} colorScheme="blue" onClick={formik.handleSubmit}>
              Sign Up
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Register;
