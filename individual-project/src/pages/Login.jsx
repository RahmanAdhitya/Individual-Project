import React, { useState } from 'react';
import { Box, Button, Flex, Input, InputGroup, InputRightElement, Spacer, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { IoEyeSharp, IoEyeOffSharp } from 'react-icons/io5';
import Register from '../component/RegisterPage/Register';

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const Hide = <Icon as={IoEyeOffSharp} />;
  const Show = <Icon as={IoEyeSharp} />;

  return (
    <>
      <Flex mt={5} justify={'center'}>
        <Box shadow={'lg'} borderRadius={5}>
          <Box margin={3}>
            <Input placeholder="Username or email" />
            <InputGroup mt={2} size="md">
              <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Enter password" />
              <InputRightElement me={0} width="4.5rem">
                <Button bg={'white.100'} size="sm" onClick={handleClick}>
                  {show ? Hide : Show}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button mt={3} width={'100%'} justifyContent={'center'}>
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
