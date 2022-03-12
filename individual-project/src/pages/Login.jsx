import React, { useState } from 'react';
import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { IoEyeSharp, IoEyeOffSharp } from 'react-icons/io5';
import Register from '../component/RegisterPage/Register';
import user_types from '../redux/types/users';
import { Navigate } from 'react-router-dom';
import { axiosInstance } from '../configs/api';
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const Hide = <Icon as={IoEyeOffSharp} />;
  const Show = <Icon as={IoEyeSharp} />;

  const dispatch = useDispatch();
  const [userNameInput, setUserNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const userSelector = useSelector((state) => state.auth);

  const inputHandler = (event, field) => {
    const { value } = event.target;
    if (field === 'username') {
      setUserNameInput(value);
    } else if (field === 'password') {
      setPasswordInput(value);
    }
  };

  const loginBtnHandler = () => {
    console.log(userNameInput, passwordInput);
    axiosInstance
      .get('/user_accounts', {
        params: {
          username: userNameInput,
          password: passwordInput,
        },
      })
      .then((res) => {
        console.log(res);
        const userData = res.data[0];

        dispatch({
          type: user_types.LOGIN_USER,
          payload: userData,
        });

        localStorage.setItem('user_data', JSON.stringify(userData));
      })
      .catch((err) => console.log(err));
    console.log('berhasil');
  };

  if (userSelector.id) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Flex mt={5} justify={'center'}>
        <Box shadow={'lg'} borderRadius={5}>
          <Box margin={3}>
            <Input placeholder="Username or email" onChange={(event) => inputHandler(event, 'username')} />
            <InputGroup mt={2} size="md">
              <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Enter password" onChange={(event) => inputHandler(event, 'password')} />
              <InputRightElement me={0} width="4.5rem">
                <Button bg={'white.100'} size="sm" onClick={handleClick}>
                  {show ? Hide : Show}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button mt={3} width={'100%'} justifyContent={'center'} onClick={() => loginBtnHandler()}>
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
    </>
  );
};

export default Login;
