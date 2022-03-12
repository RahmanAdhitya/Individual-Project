import { AddIcon } from '@chakra-ui/icons';
import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Stack, FormLabel, Textarea, DrawerFooter, Box, Input, InputGroup } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { axiosInstance } from '../../configs/api';

// componen ini di import ke navbar//
const Upload = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const [inputValue, setInputValue] = useState({
    username: '',
    location: '',
    caption: '',
    likes: '',
    image_url: '',
  });

  const inputHandler = (event) => {
    const { value, name } = event.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const addMoment = () => {
    console.log('berfungsi');
    const newMoment = { username: inputValue.username, caption: inputValue.caption, image_url: inputValue.imgURL, location: inputValue.location, likes: inputValue.likes };
    axiosInstance.post(`/posts`, newMoment);
  };

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
                <FormLabel htmlFor="url">your name</FormLabel>
                <InputGroup>
                  <Input onChange={inputHandler} type="text" name="username" placeholder="username" />
                </InputGroup>
                <FormLabel htmlFor="url">Add a Moment</FormLabel>
                <InputGroup>
                  <Input onChange={inputHandler} type="url" name="imgURL" placeholder="Chose your moment" />
                </InputGroup>
              </Box>
              <Box>
                <FormLabel htmlFor="url">Location</FormLabel>
                <InputGroup>
                  <Input onChange={inputHandler} type="text" placeholder="Location" name="location" />
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor="caption">Caption</FormLabel>
                <Textarea onChange={inputHandler} name="caption" />
              </Box>
              <Box>
                <FormLabel htmlFor="likes">Likes</FormLabel>
                <Input onChange={inputHandler} name="likes" />
              </Box>
            </Stack>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={() => addMoment()} colorScheme="blue">
              Share
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Upload;
