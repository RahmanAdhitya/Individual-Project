import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const User = ({ username, location }) => {
  return (
    <Flex>
      <Avatar size="md" margin={2} src="https://bit.ly/sage-adebayo" />
      <Box margin={3}>
        <Text fontWeight="bold">{username}</Text>
        <Text fontSize="sm">{location}</Text>
      </Box>
    </Flex>
  );
};

export default User;
