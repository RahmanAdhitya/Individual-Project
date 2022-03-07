import React, { useState } from 'react';
import { Box, Button, Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { IoEyeSharp, IoEyeOffSharp } from 'react-icons/io5';
import PasswordInput from '../component/PasswordInput/PasswordInput';

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const Show = <Icon as={IoEyeOffSharp} />;
  const Hide = <Icon as={IoEyeSharp} />;

  return (
    <Flex mt={5} justifyContent={'center'}>
      <Box shadow={'lg'} borderRadius={5}>
        <Box margin={3}>
          <Input placeholder="Username or email" />
          <InputGroup mt={2} size="md">
            <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="Enter password" />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? Hide : Show}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button mt={3} width={'100%'} justifyContent={'center'}>
            Log In
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
