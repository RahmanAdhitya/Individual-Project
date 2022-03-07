import React from 'react';
import { Box, Button, Collapse, Text } from '@chakra-ui/react';
import { useState } from 'react';

function Comment() {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <Collapse startingHeight={10} in={show}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </Collapse>
      <Button size="sm" onClick={handleToggle} mt="1rem">
        Show {show ? 'Less' : 'More'}
      </Button>
    </>
  );
}

export default Comment;
