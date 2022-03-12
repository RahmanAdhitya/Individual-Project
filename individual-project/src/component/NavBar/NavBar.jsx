import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from '@chakra-ui/react';
import { Text, Box, Flex, Spacer, Avatar } from '@chakra-ui/react';
import Upload from '../Upload/Upload';
import UserProfile from '../UserProfile/UserProfile';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import user_types from '../../redux/types/users';

const NavBar = () => {
  const userSelector = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const logoutButtonHandler = () => {
    dispatch({
      type: user_types.LOGOUT_USER,
    });
    localStorage.removeItem('user_data');
  };
  return (
    <Flex bg="red.400" mb={2}>
      <Flex>
        <Menu>
          <MenuButton ms={1} mt={1} mb={1}>
            <Avatar name={userSelector.id ? `hello ${userSelector.name}` : null} src="https://bit.ly/dan-abramov" />
          </MenuButton>
          <MenuList>
            <MenuOptionGroup title="Account" type="none">
              <UserProfile />
            </MenuOptionGroup>
            <MenuOptionGroup title="Moment" type="none">
              <MenuItemOption>Notification</MenuItemOption>
              <MenuItemOption>Favorite</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuGroup>
              <MenuItem>
                <Link to="/login">Sign-out</Link>
              </MenuItem>
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
