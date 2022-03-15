import React from 'react';
import { Flex, Box, Center, Text, Avatar, Image } from '@chakra-ui/react';
import { axiosInstance } from '../../configs';

const Content = (props) => {
  return (
    <Center margin={6}>
      <Box shadow="md" borderRadius="md" borderWidth="1px">
        <Flex>
          <Flex width="xl">
            <Box margin={4}>
              <Image src={props.image} borderRadius="md" maxW="full" />
            </Box>
          </Flex>
          <Box mt="4" mb="4" borderLeft="1px" borderLeftColor="pink.400">
            <Box display="flex" ms="4" width="sm">
              <Avatar size="lg" name="Kola Tioluwani" src="https://bit.ly/kent-c-dodds" border="4px" borderColor="blue" />
              <Text ms="3" textTransform="capitalize" fontSize="xl" fontWeight="bold">
                {props.username}
                <Text>{props.location}</Text>
              </Text>
            </Box>
            <Box width="sm" margin={4} fontSize="sm">
              {props.caption}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
};

export default Content;
