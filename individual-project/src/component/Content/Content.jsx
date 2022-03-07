import React from 'react';
import { Flex, Spacer, Box, Image, Square, Text } from '@chakra-ui/react';
import User from './Card/User';
import { Icon } from '@chakra-ui/react';
import { GrFavorite } from 'react-icons/gr';
import { FaRegComment } from 'react-icons/fa';

const Content = () => {
  return (
    <Flex>
      <Box />
      <Spacer />
      <Box bgImg={'https://bit.ly/2Z4KKcF'} maxW="sm" height="md" borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="lg">
        <Box>
          <User />
        </Box>
        <Flex direction="column" margin={2} mt="250px">
          <Flex>
            <Square>
              <Icon boxSize={6} as={GrFavorite} />
            </Square>
            <Square ml="2">
              <Icon boxSize={6} as={FaRegComment} />
            </Square>
          </Flex>
          <Text fontSize="smaller">
            <Text fontSize="sm">UI Engineer</Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, animi. Saepe aspernatur animi sed, labore, similique nam natus quidem eveniet iste accusantium eum asperiores, officia ipsam placeat nisi perspiciatis temporibus?
          </Text>
        </Flex>
      </Box>
      <Spacer />
      <Box />
    </Flex>
  );
};

export default Content;
