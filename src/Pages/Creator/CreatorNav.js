import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CreatorNav = () => {
  const [tap, setTap] = useState([]);
  const navArray = Array(CREATE_NAV_ARRAY.length - 1).fill(false);
  useEffect(() => {
    setTap([true, ...navArray]);
  }, []);

  const clickTap = (index) => {
    const newArr = Array(CREATE_NAV_ARRAY.length).fill(false);
    newArr[index] = true;
    setTap(newArr);
  };

  const indexMove = (num) => {
    const newArr = Array(CREATE_NAV_ARRAY.length).fill(false);
    const tapIndex = tap.indexOf(true);
    const tapIndexCondition = num === 1 ? tapIndex < 6 : tapIndex >= 1;

    tapIndexCondition
      ? (newArr[tapIndex + num] = true)
      : (newArr[tapIndex] = true);
    setTap(newArr);
  };

  return (
    <>
      <CreatorHeader>
        <div className="headerLeftItem">
          <div className="headerIcon">101</div>
          <div className="headerText">수요조사 시작하기</div>
        </div>
        <div className="headerExit">나가기</div>
      </CreatorHeader>
      <CreatorNavBox>
        {CREATE_NAV_ARRAY.map((e, index) => {
          return (
            <CreatorNavContent
              key={e.id}
              onClick={() => clickTap(index)}
              isClicked={tap[index]}
            >
              <div className="creatorNavNum">{e.id}</div>
              <CreatorNavItem isClicked={tap[index]}>
                {e.content}
              </CreatorNavItem>
            </CreatorNavContent>
          );
        })}
      </CreatorNavBox>
      <Creatorbottom>
        <div className="CreatorbottomLeft" onClick={() => indexMove(-1)}>
          이전
        </div>
        <div className="CreatorbottomRight">
          <div className="CreatorbottomSave">저장하기</div>
          <div className="CreatorbottomNext" onClick={() => indexMove(1)}>
            다음
          </div>
        </div>
      </Creatorbottom>
    </>
  );
};

const CREATE_NAV_ARRAY = [
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

const CreatorHeader = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  width: 100%;
  height: 72px;
  padding: 16px 24px;
  border-bottom: 2px solid rgb(228, 228, 228);
  align-items: center;

  .headerLeftItem {
    display: flex;
    width: 170px;

    .headerIcon {
      width: 40px;
      height: 30px;
      padding: 8px;
      font-size: 16px;
      font-weight: 700;
      background-color: black;
      color: white;
      cursor: pointer;
    }

    .headerText {
      margin-left: 12px;
      font-size: 16px;
      font-weight: 400;
      margin-top: 2px;
      align-self: center;
    }
  }

  .headerExit {
    width: 69px;
    height: 40px;
    padding: 14px 14px 14px 16px;
    background-color: rgb(248, 248, 248);
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: rgb(230, 230, 230);
    }
  }
`;

const CreatorNavBox = styled.div`
  position: fixed;
  top: 76px;
  width: 248px;
  height: 100%;
  border-right: 1px solid rgb(228, 228, 228);

  @media screen and (max-width: 1250px) {
    display: none;
  }
`;

const CreatorNavContent = styled.div`
  display: flex;
  width: 227px;
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
    border-bottom: 1px solid rgb(239, 239, 239);
    border-radius: 5px;
    background-color: ${(props) => (props.isClicked ? "white" : "")};
  }
`;

const CreatorNavItem = styled.div`
  padding: 6px 10px;
  color: ${(props) => (props.isClicked ? "black" : "rgb(189, 189, 189)")};
  font-size: 16px;
  font-weight: 700;
`;

const Creatorbottom = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  right: 0px;
  bottom: 0px;
  height: 76px;
  padding: 15px;
  width: calc(100% - 248px);
  align-items: center;
  border-top: 1px solid rgb(239, 239, 239);

  @media screen and (max-width: 1250px) {
    width: 100%;
  }

  .CreatorbottomLeft {
    width: 56px;
    height: 38px;
    border-radius: 5px;
    padding: 12px 12px 12px 14px;
    background-color: rgb(243, 243, 243);
    cursor: pointer;

    &:hover {
      background-color: rgb(230, 230, 230);
    }
  }

  .CreatorbottomRight {
    display: flex;

    .CreatorbottomSave {
      width: 80px;
      height: 38px;
      padding: 12px 12px 12px 14px;
      background-color: rgb(243, 243, 243);
      cursor: pointer;

      &:hover {
        background-color: rgb(230, 230, 230);
      }
    }

    .CreatorbottomNext {
      width: 56px;
      height: 38px;
      padding: 12px 12px 12px 14px;
      margin-left: 10px;
      border-radius: 5px;
      color: white;
      background-color: rgb(244, 70, 2);
      cursor: pointer;

      &:hover {
        background-color: rgb(204, 70, 2);
      }
    }
  }
`;

export default CreatorNav;
