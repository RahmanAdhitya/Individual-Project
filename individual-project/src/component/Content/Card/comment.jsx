import React from 'react';
import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Icon } from '@chakra-ui/react';
import { GrFavorite } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import User from './User';

function Comment({ caption, username, location }) {
  return (
    <Box display="flex" flexDirection="column" width="sm" justifyContent="space-between">
      <Box>
        <User username={username} location={location} />
        <Text ms={2}>
          <Text textAlign="left" fontSize="small">
            {caption}
          </Text>
        </Text>
      </Box>
      <Flex ms={3} justifyContent="space-between" alignItems="center">
        <Input width="xs" variant="flushed" placeholder="Comment" />
        <Icon boxSize={5} as={FiSend} />
        <Icon boxSize={5} as={GrFavorite} />
      </Flex>
    </Box>
  );
}

export default Comment;
