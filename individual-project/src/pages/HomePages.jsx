import React, { useEffect, useState } from 'react';
import Content from '../component/Content/Content';
import { API_URL } from '../config/api';
import axios from 'axios';

const HomePages = () => {
  const [contentList, setContentList] = useState([]);

  const fetchContentList = () => {
    axios.get(`${API_URL}/posts`).then((res) => {
      setContentList(res.data);
    });
  };

  const renderContentList = () => {
    return contentList.map((val) => {
      return <Content username={val.username} location={val.location} imageURL={val.image_url} caption={val.caption} id={val.id} />;
    });
  };

  useEffect(() => {
    fetchContentList();
  }, []);

  return <div>{renderContentList()}</div>;
};

export default HomePages;
