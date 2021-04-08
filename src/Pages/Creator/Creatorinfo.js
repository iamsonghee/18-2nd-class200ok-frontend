import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Creatorinfo(props) {
  const [inputState, inputSetstate] = useState("");

  const handleInputColor = e => {
    inputSetstate(e.target.value);
  };

  return (
    <CreatorInfoSection>
      <CreatorInfoHeader>간단하게 어떤 클래스인지 알려주세요</CreatorInfoHeader>
      <CreatorInfoArticle>
        언젠가 이런 걸 가르쳐봐야지 생각해본 적이 있으신가요? 간단히
        크리에이터님이 알려 줄 수 있는 카테고리를 설정해봐요. 모든 수정 사항은
        즉시 저장되니 안심해 주세요.
      </CreatorInfoArticle>
      <CreatorInfoSelect action="#" inputState={inputState}>
        <label className="selectHeader">브랜드</label>
        <select className="selectInfo">
          <option value="크리에이티브">
            크리에이티브(음악, 요리 등 취미클래스를 만들고싶어요)
          </option>
          <option value="커리어">커리어</option>
          <option value="머니">머니</option>
        </select>
        <label className="selectHeader">카테고리</label>
        <select className="selectInfo" required>
          <option className="valueDisabled" value="" selected disabled hidden>
            클래스 분야를 선택해주세요
          </option>
          <option value="공예">공예</option>
          <option value="디지털 드로잉">디지털 드로잉</option>
          <option value="라이프 스타일">라이프 스타일</option>
        </select>
        <label className="selectHeader">세부 카테고리</label>
        <input
          className="selectInput"
          placeholder="예시) 가계부 작성, 다이어리 꾸미기"
          onChange={handleInputColor}
        />
        {inputState.length === 0 ? (
          <div class="inputSub">필수입력입니다</div>
        ) : inputState.length <= 12 ? (
          <div class="inputSublength">{inputState.length}자 / 최대 12자</div>
        ) : (
          <div class="inputSub">최대 12자 입니다.</div>
        )}
        <label className="selectHeader">난이도</label>
        <select className="selectInfo" required>
          <option value="" selected disabled hidden>
            어떤 수강생에게 맞는 난이도인지 선택해주세요
          </option>
          <option value="입문자">입문자</option>
          <option value="초급자">초급자</option>
          <option value="중급자">중급자</option>
          <option value="준전문가">준전문가</option>
          <option value="전문가">전문가</option>
        </select>
      </CreatorInfoSelect>
    </CreatorInfoSection>
  );
}

const CreatorInfoSection = styled.div`
  width: 900px;
  height: 750px;
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

const CreatorInfoSelect = styled.form`
  height: 600px;
  color: rgb(26, 26, 26);
  letter-spacing: -0.4px;
  font-size: 24px;
  font-weight: bold;

  select:required:invalid {
    color: rgb(162, 162, 162);
  }

  .selectInput {
    height: 48px;
    width: 100%;
    margin-bottom: 40px;
    padding: 0px 48px 0px 16px;
    border: ${props =>
      props.inputState.length === 0
        ? "1px solid red"
        : "1px solid rgb(239, 239, 239);"};
    border-radius: 1px;
    line-height: 20px;
    letter-spacing: -0.15px;
    font-size: 14px;
    font-weight: normal;
    outline: none;
    cursor: pointer;
  }

  .inputSub {
    position: relative;
    top: -30px;
    color: rgb(255, 82, 82);
    font-size: 11px;
  }

  .inputSublength {
    position: relative;
    top: -30px;
    color: rgb(189, 189, 189);
    font-size: 11px;
  }

  .selectHeader {
    margin: 0px 0px 4px;
    color: rgb(26, 26, 26);
    font-size: 14px;
    letter-spacing: -0.15px;
  }

  .selectInfo {
    height: 48px;
    width: 100%;
    padding: 0px 48px 0px 16px;
    margin-bottom: 40px;
    border: 1px solid rgb(239, 239, 239);
    border-radius: 1px;
    background: url(https://farm1.staticflickr.com/379/19928272501_4ef877c265_t.jpg)
      no-repeat 98% 50%;
    background-size: 18px;
    line-height: 20px;
    letter-spacing: -0.15px;
    font-size: 14px;
    outline-color: black;
    appearance: none;
    cursor: pointer;
  }
`;

export default Creatorinfo;
