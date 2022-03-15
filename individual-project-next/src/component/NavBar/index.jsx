import React from 'react';
import { Menu, MenuButton, MenuList, Button, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from '@chakra-ui/react';
import { Text, Box, Flex, Spacer, Avatar } from '@chakra-ui/react';
import Upload from '../Upload/Upload';
import UserProfile from '../UserProfile/UserProfile';
import { useSelector, useDispatch } from 'react-redux';
import user_types from '../../redux/types/users';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();
  const userSelector = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const logoutButtonHandler = () => {
    dispatch({
      type: user_types.LOGOUT_USER,
    });
    Cookie.remove('user_data');
    router.push('/login');
  };

  return (
    <Flex bg="red.400" boxShadow="lg">
      <Flex>
        <Menu>
          <MenuButton ms={1} mt={1} mb={1}>
            <Avatar name={userSelector.name} src="https://bit.ly/dan-abramov" />
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
                <Button
                  onClick={() => {
                    logoutButtonHandler();
                  }}
                >
                  Sign-out
                </Button>
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
        <Box mt={2} ms={2}>
          <Text fontWeight="bold">{userSelector.id ? `hello ${userSelector.username}` : null}</Text>
          <Text fontSize="sm">{userSelector.id ? `${userSelector.role}` : null}</Text>
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
