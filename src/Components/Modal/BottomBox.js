import React, { PureComponent } from "react";
import styled from "styled-components";

class BottomBox extends PureComponent {
  render() {
    return (
      <ButtonBox>
        <div className="statusInfo">
          <div className="countNow">현재 응원 수</div>
          <div className="countStatus">
            <span>1명</span>/<span>200명</span>
          </div>
          <div className="bar"></div>
        </div>
        <div className="btnSquare btn">👏응원하고 리워드 쿠폰 받기</div>
      </ButtonBox>
    );
  }
}

export default BottomBox;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: calc(100% - 648px);
  position: absolute;
  bottom: 0;
  background-color: rgb(26, 26, 26);
  border-radius: 0px 0px 10px 10px;
  padding: 12px 24px;
  color: white;
  .statusInfo {
    display: flex;
    flex-direction: column;
    width: 35%;
    .countNow {
      width: 100%;
      opacity: 0.6;
      font-size: 11px;
    }
    .countStatus {
      padding: 10px 0px;
      span:first-child {
        font-weight: 700;
      }
    }
    .bar {
      display: flex;
      height: 2px;
      width: 100%;
      background-color: white;
    }
  }
  .btnSquare {
    display: flex;
    height: 100%;
    padding: 0px 15px;
    align-items: center;
    border-radius: 8px;
    background-color: rgb(253, 48, 73);
    font-weight: 700;
    &:hover {
      background-color: rgb(248, 2, 32);
    }
  }
`;
