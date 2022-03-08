import React from 'react';
import { Flex, Box, Center } from '@chakra-ui/react';
import Comment from './Card/comment';

const Content = ({ imageURL, username, caption, location }) => {
  return (
    <Center>
      <Box shadow="base">
        <Flex margin={4}>
          <Box bgImg={imageURL} w="lg" height="md" borderWidth="1px" borderRadius="lg" shadow="lg" />
          <Comment username={username} caption={caption} location={location} />
        </Flex>
      </Box>
    </Center>
  );
};

export default Content;
