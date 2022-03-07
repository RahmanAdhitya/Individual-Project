import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from '@chakra-ui/react';
import { Button, Text, Box, Flex, Spacer, Avatar } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const NavBar = () => {
  return (
    <Flex bg="red.400" mb={2}>
      <Flex>
        <Menu>
          <MenuButton ms={4} mt={2} mb={2}>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </MenuButton>
          <MenuList>
            <MenuItem>My Profile</MenuItem>
            <MenuItem>Sign-out</MenuItem>
          </MenuList>
        </Menu>
        <Box margin={3}>
          <Text fontWeight="bold">Segun Adebayo</Text>
          <Text fontSize="sm">UI Engineer</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default NavBar;
