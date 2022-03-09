import { AddIcon } from '@chakra-ui/icons';
import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Stack, FormLabel, Textarea, DrawerFooter, Box, Input, InputGroup } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';

// componen ini di import ke navbar//
const Upload = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <>
      <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen}>
        New Post
      </Button>
      <Drawer isOpen={isOpen} placement="right" initialFocusRef={firstField} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Shares Moment</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="url">Add a Moment</FormLabel>
                <InputGroup>
                  <Input type="url" id="url" placeholder="Chose your moment" />
                </InputGroup>
              </Box>
              <Box>
                <FormLabel htmlFor="url">Location</FormLabel>
                <InputGroup>
                  <Input type="text" placeholder="Location" />
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Caption</FormLabel>
                <Textarea id="desc" />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Share</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Upload;
