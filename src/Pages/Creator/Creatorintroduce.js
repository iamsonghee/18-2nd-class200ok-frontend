import React, { useState } from "react";
import styled from "styled-components";
import CreatorInfoContent from "./../../Components/Lecture/CreatorInfoItem";

function Creatorintroduce() {
  const [imageList, setImageList] = useState([]);

  const handleBtn = () => {
    const formData = new FormData();

    imageList.forEach(img => {
      formData.append("introduction_image", img);
    });

    fetch("http://54.180.24.190:8000/creator/class-introduction", {
      method: "POST",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZV9pZCI6OH0.NNZDWxZMo3V7a6qALMReMTWDOCY7SUkKQX4pinevPao",
        // Authorization: localStorage.getItem("access_token"),
        // "Content-Type": "multipart/form-data",
      },
      body: formData,
    })
      .then(res => res.json())
      .then(res => console.log(res));
    alert("서버에 이미지가 발사됐습니다");
  };

  const handleAddImg = (id, img) => {
    const addImgArray = [...imageList];
    addImgArray[id] = img;
    setImageList(addImgArray);
  };
  // console.log(imageList);
  return (
    <CreatorIntroSection>
      <CreatorInfoHeader>
        어떤 걸 알려주실 수 있나요?<button onClick={handleBtn}>전송</button>
      </CreatorInfoHeader>
      <CreatorInfoArticle>
        클래스를 통해 알려주실 것과 완성할 수 있는 것들을 설명해 주세요.
      </CreatorInfoArticle>
      <CreatorInfoList className="CreatorInfoList">
        {CREATOR_BOX.map(box => {
          return (
            <CreatorInfoContent
              key={box.id}
              id={box.id}
              text={box.text}
              handleAddImg={handleAddImg}
            />
          );
        })}
      </CreatorInfoList>
    </CreatorIntroSection>
  );
}

const CREATOR_BOX = [
  {
    id: 0,
    text: "클래스 주제에 대한 사진, 영상",
  },
  {
    id: 1,
    text: "작업하는 영상이 담긴 사진, 영상",
  },
  {
    id: 2,
    text: "완성된 작품에 대한 사진, 영상",
  },
  {
    id: 3,
    text: "클래스 주제에 대한 사진, 영상",
  },
  {
    id: 4,
    text: "작업하는 영상이 담긴 사진, 영상",
  },
  {
    id: 5,
    text: "완성된 작품에 대한 사진, 영상",
  },
];

const CreatorIntroSection = styled.div`
  width: 55%;
  height: 100%;
  padding: 20px;
`;

const CreatorInfoHeader = styled.header`
  padding-bottom: 16px;
  margin: 0px;
  color: rgb(26, 26, 26);
  line-height: 34px;
  letter-spacing: -0.4px;
  font-size: 24px;
  font-weight: bold;

  button {
    margin-left: 10px;
  }
`;

const CreatorInfoArticle = styled.div`
  width: 500px;
  padding-bottom: 32px;
  color: rgb(162, 162, 162);
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.15px;
`;

const CreatorInfoList = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  column-gap: 24px;
  flex-wrap: wrap;
`;

export default Creatorintroduce;
