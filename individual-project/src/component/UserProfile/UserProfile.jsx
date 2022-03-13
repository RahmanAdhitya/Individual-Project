import { Icon } from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';
import { Text, Avatar, Button, Drawer, DrawerOverlay, DrawerContent, MenuItemOption, DrawerHeader, DrawerBody, Stack, FormLabel, Textarea, DrawerFooter, Box, Input } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

// componen ini di import ke navbar//
const UserProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  const userSelector = useSelector((state) => state.auth);

  return (
    <>
      <MenuItemOption onClick={onOpen}>My Profile</MenuItemOption>
      <Drawer isOpen={isOpen} placement="left" initialFocusRef={firstField} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Avatar size="xl" name={userSelector.id ? userSelector.username : null} src="https://bit.ly/dan-abramov" />
            {/* {edit ? <Input mt={2} variant="flushed" placeholder={userSelector.username} /> :  */}
            <Text fontWeight="bold">{userSelector.username}</Text>
          </DrawerHeader>
          {/* my profile akan berubah sesui dengan nama usernya dalam tampilan avatar */}

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel mb={0}>Email</FormLabel>
                {/* <Input mb={2} variant="flushed" placeholder="email" /> */}
                <Text fontWeight="bold">{userSelector.email}</Text>
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Bio</FormLabel>
                <Textarea id="desc" />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button colorScheme="blue">Edit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default UserProfile;
