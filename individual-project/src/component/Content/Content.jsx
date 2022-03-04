import React from 'react';
import { Flex, Spacer, Box, Image, Square, Text } from '@chakra-ui/react';
import User from './Card/User';
import { Icon } from '@chakra-ui/react';
import { GrFavorite } from 'react-icons/gr';
import { FaRegComment } from 'react-icons/fa';

const Content = () => {
  return (
    <Flex>
      <Box>margin</Box>
      <Spacer />
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box>
          {/* user avatar */}
          <User />
          {/* user avatar */}
        </Box>
        <Image src="https://bit.ly/2Z4KKcF" alt="" />
        <Flex margin={2}>
          <Square>
            <Icon size="xl" as={GrFavorite} />
          </Square>
          <Square ml="2">
            <Icon size="xl" as={FaRegComment} />
          </Square>
        </Flex>
        <Flex margin={2}>
          <Text>
            <Text fontSize="sm">UI Engineer</Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, animi. Saepe aspernatur animi sed, labore, similique nam natus quidem eveniet iste accusantium eum asperiores, officia ipsam placeat nisi perspiciatis temporibus?
          </Text>
        </Flex>
      </Box>
      <Spacer />
      <Box>margin</Box>
    </Flex>
  );
};

export default Content;
