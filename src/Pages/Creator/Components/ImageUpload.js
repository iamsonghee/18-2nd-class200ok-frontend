/* eslint-disable */

import React from "react";
import styled from "styled-components";

export default function ImageUpload(props) {
  const handlefileSelected = (event) => {
    console.log(event.target.files[0]);
  };

  console.log(props);

  // let reader = FileReader();

  return (
    <>
      <ImageUpBox>
        <TitleImgUp type="file" onChange={handlefileSelected} />
      </ImageUpBox>
    </>
  );
}

const ImageUpBox = styled.div`
  width: 150px;
  /* height: ${(props) => {
    if (props.thumbnail) {
      return "30px";
    }
    if (props.cover) {
      return "300px";
    }
  }}; */
  height: 300px;
  margin: 10px 0;
  border: 1px solid rgb(239, 239, 239);
`;

const TitleImgUp = styled.input``;
