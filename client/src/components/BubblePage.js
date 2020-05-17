import React, { useState, useEffect } from "react";
// import axios from "axios";
import axiosWithAuth from '../axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import AddColor from "./AddColor";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const getColors = () => {
    axiosWithAuth()
    .get('http://localhost:5000/api/colors')
    .then(results => {
      // console.log('getColors: ', results.data);
      setColorList(results.data)
    })
    .catch(error => {
      console.log('getColors Error: ', error)
    })
  }

  useEffect(() => {
    getColors();
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
      <AddColor updateColors={setColorList} />
    </>
  );
};

export default BubblePage;
