import React from 'react';
import { Flex, Spacer, Box, Image, Square, Text } from '@chakra-ui/react';
import User from './Card/User';
import { Icon } from '@chakra-ui/react';
import { GrFavorite } from 'react-icons/gr';
import { FaRegComment } from 'react-icons/fa';
import Comment from './Card/comment';

const Content = () => {
  return (
    <Flex>
      <Box />
      <Spacer />
      <Box bgImg={'https://bit.ly/2Z4KKcF'} maxW="sm" height="md" borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="lg">
        <Box>
          <User />
        </Box>
        <Flex direction="column" margin={2} mt="300px">
          <Comment />
        </Flex>
      </Box>
      <Spacer />
      <Box />
    </Flex>
  );
};

export default Content;
