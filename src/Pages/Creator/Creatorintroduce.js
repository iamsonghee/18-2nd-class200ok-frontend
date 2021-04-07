import React, { useState } from "react";
import styled from "styled-components";
import CreatorInfoContent from "./../../Components/Lecture/CreatorInfoItem";

function Creatorintroduce() {
  return (
    <CreatorIntroSection>
      <CreatorInfoHeader>어떤 걸 알려주실 수 있나요?</CreatorInfoHeader>
      <CreatorInfoArticle>
        클래스를 통해 알려주실 것과 완성할 수 있는 것들을 설명해 주세요.
      </CreatorInfoArticle>
      <CreatorInfoList className="CreatorInfoList">
        {CREATOR_BOX.map(box => {
          return (
            <CreatorInfoContent key={box.id} id={box.id} text={box.text} />
          );
        })}
      </CreatorInfoList>
    </CreatorIntroSection>
  );
}

const CREATOR_BOX = [
  {
    id: 1,
    text: "클래스 주제에 대한 사진, 영상",
  },
  {
    id: 2,
    text: "작업하는 영상이 담긴 사진, 영상",
  },
  {
    id: 3,
    text: "완성된 작품에 대한 사진, 영상",
  },
  {
    id: 4,
    text: "클래스 주제에 대한 사진, 영상",
  },
  {
    id: 5,
    text: "작업하는 영상이 담긴 사진, 영상",
  },
  {
    id: 6,
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
