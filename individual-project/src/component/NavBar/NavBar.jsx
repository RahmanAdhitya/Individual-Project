import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from '@chakra-ui/react';
import { Button, Text, Box, Flex, Spacer, Avatar } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Upload from '../Upload/Upload';

const NavBar = () => {
  return (
    <Flex bg="red.400" mb={2}>
      <Flex>
        <Menu>
          <MenuButton ms={1} mt={1} mb={1}>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </MenuButton>
          <MenuList>
            <MenuOptionGroup title="Account" type="none">
              <MenuItemOption>My Profile</MenuItemOption>
              <MenuItemOption>My Favorite</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuGroup>
              <MenuItem>Sign-out</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
        <Box mt={2} ms={2}>
          <Text fontWeight="bold">Segun Adebayo</Text>
          <Text fontSize="sm">UI Engineer</Text>
        </Box>
      </Flex>
      <Spacer />
      <Flex margin={2}>
        <Upload />
      </Flex>
    </Flex>
  );
};

export default NavBar;
