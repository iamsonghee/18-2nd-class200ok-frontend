import React, { useState } from "react";
import styled from "styled-components";

const CreatorNav = () => {
  const [tap, setTap] = useState(Array(createNavArray.length).fill(false));

  const clickTap = (index) => {
    const newArr = Array(createNavArray.length).fill(false);
    newArr[index] = true;
    setTap(newArr);
  };

  return (
    <CreatorNavBox>
      {createNavArray.map((e, index) => {
        return (
          <CreatorNavContent
            key={e.id}
            onClick={() => clickTap(index)}
            isClicked={tap[index]}
          >
            <div className="creatorNavNum">{e.id}</div>
            <CreatorNavItem>{e.content}</CreatorNavItem>
          </CreatorNavContent>
        );
      })}
    </CreatorNavBox>
  );
};

const createNavArray = [
  {
    id: 0,
    content: "기본 정보",
  },
  {
    id: 1,
    content: "제목 및 커버",
  },
  {
    id: 2,
    content: "소개",
  },
  {
    id: 3,
    content: "요약",
  },
  {
    id: 4,
    content: "커리큘럼 설문조사",
  },
  {
    id: 5,
    content: "크리에이터 소개",
  },
  {
    id: 6,
    content: "오픈 전 확인사항",
  },
];

const CreatorNavBox = styled.div`
  width: 248px;
  height: 414px;
`;

const CreatorNavContent = styled.div`
  display: flex;
  width: 248px;
  height: 48px;
  padding: 12px;
  margin: 13px;
  border-radius: 5px;
  background: ${(props) => (props.isClicked ? "rgb(239, 239, 239)" : "")};
  cursor: pointer;

  &:hover {
    background-color: rgb(230, 230, 230);

    .creatorNavNum {
      background-color: white;
    }
  }

  .creatorNavNum {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    padding-top: 2px;
    border: 1px solid rgb(239, 239, 239);
    border-radius: 5px;
  }
`;

const CreatorNavItem = styled.div`
  padding: 6px 10px;
  color: rgb(189, 189, 189);
  font-size: 16px;
  font-weight: 700;
`;

export default CreatorNav;
