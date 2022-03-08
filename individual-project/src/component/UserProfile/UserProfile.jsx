import { AddIcon } from '@chakra-ui/icons';
import { Avatar, Button, Drawer, DrawerOverlay, DrawerContent, MenuItemOption, DrawerHeader, DrawerBody, Stack, FormLabel, Textarea, DrawerFooter, Box, Input } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';

// componen ini di import ke navbar//
const UserProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <>
      <MenuItemOption onClick={onOpen}>My Profile</MenuItemOption>
      <Drawer isOpen={isOpen} placement="left" initialFocusRef={firstField} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </DrawerHeader>
          {/* my profile akan berubah sesui dengan nama usernya dalam tampilan avatar */}

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel mb={0}>User Name</FormLabel>
                <Input mb={2} variant="flushed" placeholder="UserName" />
                <FormLabel mb={0}>Email</FormLabel>
                <Input mb={2} variant="flushed" placeholder="email" />
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Bio</FormLabel>
                <Textarea id="desc" />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Post</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default UserProfile;
