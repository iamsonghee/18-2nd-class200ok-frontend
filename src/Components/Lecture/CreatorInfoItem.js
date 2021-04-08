/* eslint-disable */
import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import styled from "styled-components";
import createitem from "./../../Pages/Creator/create2.png";

function CreatorInfoContent(props) {
  const [imgPreview, setImgPreview] = useState({
    file: "",
    imagePreviewUrl: "",
  });
  const setUploadImg = event => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      setImgPreview({ file: file, imagePreviewUrl: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const removeState = () => {
    setImgPreview({ file: "", imagePreviewUrl: "" });
  };

  return (
    <CreatorInfoItem>
      <label className="image_container">
        <img src={imgPreview.imagePreviewUrl} />
        <input
          type="file"
          name="imgFile"
          accept="image/*,video/mp4,video/x-m4v,video/*"
          id="imgFile"
          onChange={setUploadImg}
        />
      </label>
      <CreatorInfoMedia>
        {imgPreview.imagePreviewUrl && (
          <div className="removestate" onClick={removeState}>
            <FaRegTrashAlt />
          </div>
        )}
        {imgPreview.imagePreviewUrl.length === 0 && <div className="hideImg" />}
        <img src={createitem} />
        <CreateMidiaTitle>{props.text}</CreateMidiaTitle>
      </CreatorInfoMedia>
      <CreatorInfoTextarea placeholder="사진,영상에 대한 설명을 적어주세요."></CreatorInfoTextarea>
    </CreatorInfoItem>
  );
}

const CreateMidiaTitle = styled.div`
  color: rgb(202, 202, 202);
  margin: 8px 0px;
  font-size: 14px;
  z-index: -100;
`;

const CreatorInfoItem = styled.div`
  width: 16vw;
  height: 40vw;

  input[type="file"] {
    display: none;
  }

  .image_container {
    position: absolute;
    width: 16vw;
    height: 28vw;
    z-index: 2;
    cursor: pointer;
    @media screen and (max-width: 1375px) {
      width: 24vw;
      height: 35vw;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  input {
    position: absolute;
    width: 16vw;
    height: 28vw;
    @media screen and (max-width: 1375px) {
      width: 24vw;
      height: 50vw;
    }
  }
  @media screen and (max-width: 1375px) {
    width: 24vw;
    height: 50vw;
  }
`;

const CreatorInfoMedia = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 70%;
  border: 1px solid rgb(229, 229, 229);
  align-items: center;
  cursor: pointer;
  .hideImg {
    position: absolute;
    width: 30px;
    height: 30px;
    left: 1px;
    top: 0px;
    background-color: white;
    z-index: 3;
  }
  .removestate {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    top: 5px;
    right: 8px;
    background-color: white;
    border: 1px solid white;
    border-radius: 50px;
    z-index: 5;
  }
  img {
    width: 72px;
    height: 72px;
    z-index: -100;
  }
`;

const CreatorInfoTextarea = styled.textarea`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 18%;
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid rgb(229, 229, 229);
  outline-color: black;
  ::placeholder {
    color: rgb(202, 202, 202);
  }
`;

export default CreatorInfoContent;
