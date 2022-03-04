import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const User = () => {
  return (
    <Flex>
      <Avatar size="md" margin={2} src="https://bit.ly/sage-adebayo" />
      <Box margin={3}>
        <Text fontWeight="bold">Segun Adebayo</Text>
        <Text fontSize="sm">UI Engineer</Text>
      </Box>
    </Flex>
  );
};

export default User;
