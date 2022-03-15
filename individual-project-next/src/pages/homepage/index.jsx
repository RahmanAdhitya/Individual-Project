import React, { useEffect, useState } from 'react';
import Content from '../../component/Content';
import { Box } from '@chakra-ui/react';
import { axiosInstance } from '../../configs';

const HomePages = () => {
  const [contentList, setContentList] = useState([]);

  const fetchContentList = async () => {
    try {
      const res = await axiosInstance.get(`/posts`);
      setContentList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderContentList = () => {
    return contentList.map((val) => {
      return <Content username={val.username} caption={val.caption} image={val.image_url} location={val.location} likes={val.number_of_likes} id={val.id} />;
    });
  };

  useEffect(() => {
    fetchContentList();
  }, []);

  return <Box>{renderContentList()}</Box>;
};
export default HomePages;
