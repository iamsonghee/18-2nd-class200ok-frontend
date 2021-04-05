/* eslint-disable */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CreatorNav from "./CreatorNav";
import ImageUpload from "./Components/ImageUpload";
import CreatorInfoItem from "../../Components/Lecture/CreatorInfoItem"

export default function CreatorTitle() {
  const [profilePic, setprofilePic] = useState({ file: "", previewURL: "" });
  const [inputValue, setinputValue] = useState("");

  const handleInput = (e) => {
    setinputValue(e.target.value);
  };

 
  

  return (
    <>
      <CreatorNav />
        <TitleCoverDiv>
        <TitleContentDiv>
          <TitleTopDiv>
            <TitleTopTxt>
              클래스의 컨셉이 잘 드러난
              <br /> 제목과 이미지를 보여주세요
            </TitleTopTxt>
            <TitleSecondTopTxt>
              감성적이면서도 클래스를 잘 표현하는 제목과 이미지를 등록해 주세요.
            </TitleSecondTopTxt>
          </TitleTopDiv>
          <form>
            <TitleCoverUpperDiv>
              <TitleImgUpDiv>
                <CoverImgDiv>
                커버 이미지
                </CoverImgDiv>
                <CreatorInfoItem />
              </TitleImgUpDiv>
              <TitleImgUpDiv>
                클래스 제목
                <ClassTitleInput
                  onKeyUp={handleInput}
                  placeholder="컨셉이 잘 드러나는 클래스의 제목을 지어주세요."
                />
                <GuideDiv>
                  <p>어떤 사진과 제목이 좋을지 고민이신가요?</p> <br />
                  <p>
                    감성적이면서도 직관적인 제목이 좋아요! 두 가지 모두 표현하는
                    것이 어렵다면 제목 가이드 를 참고해 주세요.
                  </p>
                  <br />
                  <p>
                    커버 이미지가 첫 인상을 결정해요. 어떤 이미지가 좋을지 커버
                    이미지 가이드를 확인해 보세요!
                  </p>
                  <GuideImg src="https://user-images.githubusercontent.com/46774456/112266922-0b83f300-8cb8-11eb-9e4c-2fa60755b834.png" />
                  <GuideImg src="https://user-images.githubusercontent.com/46774456/112266898-032bb800-8cb8-11eb-8faa-115276adc745.png" />
                  <GuideImg src="https://user-images.githubusercontent.com/46774456/112266972-19397880-8cb8-11eb-9a88-200e3594b9b3.png" />
                </GuideDiv>
              </TitleImgUpDiv>
            </TitleCoverUpperDiv>
            <ThumbnailImgUpBox>
              <p>썸네일 이미지</p>
              <ThumbnailImgDiv>
              <CreatorInfoItem />
              <GuideBottomDiv><p>썸네일 이미지가 어디에 사용되나요?</p> <br />
              <p>썸네일 이미지는 아래와 같이 홈페이지의 메인, 수요 조사 메인 페이지에서 보이는 이미지예요. 
                커버 이미지와 다르게 세로형이 아닌 가로형 이미지에 최적화돼있습니다.</p>
                <GuideImg src="https://user-images.githubusercontent.com/46774456/112266922-0b83f300-8cb8-11eb-9e4c-2fa60755b834.png" />
                  <GuideImg src="https://user-images.githubusercontent.com/46774456/112266898-032bb800-8cb8-11eb-8faa-115276adc745.png" />
                  <GuideImg src="https://user-images.githubusercontent.com/46774456/112266972-19397880-8cb8-11eb-9a88-200e3594b9b3.png" />
                </GuideBottomDiv>
              </ThumbnailImgDiv>
            </ThumbnailImgUpBox>
          </form>
        </TitleContentDiv>
      </TitleCoverDiv>
    </>
  );
}

const TitleCoverDiv = styled.div`
  display: flex;
  margin: 0 0 50px 230px;
  padding: 80px 0 0 10px;
`;

const TitleContentDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleTopDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
`;


const TitleImgUpDiv = styled(TitleTopDiv)`
  display: flex;
  margin-bottom: 10px;
`;

const TitleCoverUpperDiv = styled.div`
display: flex;
`;

const CoverImgDiv = styled.div`
padding-bottom: 15px;
`;

const ImageUpBox = styled.div`
  width: 150px;
  height: 300px;
  margin: 10px 0;
  border: 1px solid rgb(239, 239, 239);
`;

const TitleTopTxt = styled.h3`
  width: 300px;
  margin-top: 5px;
  padding: 20px 0;
  color: rgb(26, 26, 26);
  font-size: 25px;
  font-weight: bold;
`;

const TitleSecondTopTxt = styled.div`
  color: rgb(162, 162, 162);
  font-size: 15px;
  padding-bottom: 25px;
`;

const ClassTitleInput = styled.input`
  width: 350px;
  height: 45px;
  margin-top: 10px;
  padding-left: 10px;
  border: 1px solid rgb(239, 239, 239);
  outline: rgb(26, 26, 26);

  &:hover {
    border: rgb(215, 215, 215);
  }
`;

const GuideDiv = styled.div`
  width: 350px;
  height: 240px;
  background-color: rgb(248, 248, 248);
  margin-top: 15px;
  padding: 10px;
`;

const GuideImg = styled.img`
  width: 100px;
  height: 120px;
  padding-top: 10px;
  border-radius: 5px;
  margin-right: 10px;
`;

const ThumbnailImgUpBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding-left: 40px;
`;

const ThumbnailImgDiv = styled.div`
display: flex;
padding-top: 15px;
`;

const GuideBottomDiv = styled.div`
  width: 350px;
  height: 220px;
  background-color: rgb(248, 248, 248);
  margin-left: 50px;
  padding: 10px;
`;
