import React from 'react';
import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text, useToast } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { IoEyeSharp, IoEyeOffSharp } from 'react-icons/io5';
import user_types from '../../redux/types/users';
import { axiosInstance } from '../../configs/index';
import { useDispatch } from 'react-redux';
import Register from '../register';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Cookie from 'js-cookie';

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const Hide = <Icon as={IoEyeOffSharp} />;
  const Show = <Icon as={IoEyeSharp} />;

  const dispatch = useDispatch();
  const router = useRouter();
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
    },
    onSubmit: async (values) => {
      try {
        const res = await axiosInstance.get('/user_accounts', {
          params: {
            username: values.username,
            password: values.password,
          },
        });

        if (res.data.length) {
          dispatch({
            type: user_types.LOGIN_USER,
            payload: {
              id: res.data[0].id,
              username: res.data[0].username,
              role: res.data[0].role,
            },
          });

          const stringifiedUserData = JSON.stringify({
            id: res.data[0].id,
            username: res.data[0].username,
            role: res.data[0].role,
          });

          Cookie.set('user_data', stringifiedUserData);

          router.push('/');
        }
      } catch (err) {
        console.log(err);
        toast({
          title: 'Error',
          description: 'username and password not match',
          status: 'error',
        });
      }
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required('This field is required').min(3, 'Your username has to be 3 characters or more'),
      password: Yup.string().required('This field is required').min(8, 'Your password needs at least 8 characters'),
    }),
    validateOnChange: false,
  });

  return (
    <form>
      <Flex mt={5} justify={'center'}>
        <Box shadow={'lg'} borderRadius={5}>
          <Box margin={3}>
            <Input placeholder="Username" onChange={(event) => formik.setFieldValue('username', event.target.value)} id="inputUsername" name="username" value={formik.values.username} />
            <InputGroup mt={2} size="md">
              <Input
                me="0"
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                onChange={(event) => formik.setFieldValue('password', event.target.value)}
                id="inputPassword"
                name="password"
                value={formik.values.password}
              />
              <InputRightElement me={0} width="4.5rem">
                <Button bg={'white.100'} size="sm" onClick={handleClick}>
                  {show ? Hide : Show}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button mt={3} width={'100%'} justifyContent={'center'} onClick={formik.handleSubmit}>
              Log In
            </Button>
            <Box mt={2} textAlign={'center'}>
              <Text as="" fontSize={'xs'}>
                Forgot Password?
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Box mt={3} mb={3} textAlign={'center'}>
        <Text justifyContent={'center'} display={'center'}>
          Don't have an account?
          <Register />
        </Text>
      </Box>
    </form>
  );
};

export default Login;
