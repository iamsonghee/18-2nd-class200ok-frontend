import React, { PureComponent } from "react";
import styled from "styled-components";

class ModalArrows extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <PageArrow>
        <div className="leftArea area">
          <div className="btnLeft btn" onClick={this.props.handlePrev}>
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        <div className="rightArea area">
          <div className="btnRight btn" onClick={this.props.handleNext}>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </PageArrow>
    );
  }
}

export default ModalArrows;

const PageArrow = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  .area {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 30%;
    position: absolute;
    &.leftArea {
      left: 0px;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0px;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        margin-left: 14px;
        background-color: rgba(0, 0, 0, 0.3);
        color: white;
      }
    }
    &.rightArea {
      right: 0px;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0px;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        margin-right: 14px;
        background-color: rgba(0, 0, 0, 0.3);
        color: white;
      }
    }
  }
`;
