/* eslint-disable */
import React, { Component } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import ModalArrows from "./ModalArrows";
import { Store } from "../Lecture/LectureForm";

class ModalLayout extends Component {
  state = {
    id: 0,
    imgLength: 0,
    intervalId: null,
  };

  componentDidMount = () => {
    const { images } = this.props.data;
    if (this.props.type === "openSoon") {
      const intervalId = setInterval(() => {
        this.handleNext();
      }, 2000);
      this.setState({
        intervalId,
      });
    }
    this.setState({
      imgLength: images.length - 1,
    });
  };

  componentDidUpdate() {
    if (
      this.state.id === this.state.imgLength &&
      this.state.intervalId !== null
    ) {
      clearInterval(this.state.intervalId);
      this.setState({ intervalId: null });
    }
    if (
      this.state.intervalId === null &&
      this.state.id < this.state.imgLength &&
      this.props.type === "openSoon"
    ) {
      const intervalId = setInterval(() => {
        this.handleNext();
      }, 2000);
      this.setState({
        intervalId: intervalId,
      });
    }
  }
  handleAddClassName = id => {
    return this.state.id >= id ? "on" : "";
  };

  handleClose = fnOpenModal => {
    clearInterval(this.state.intervalId);
    fnOpenModal(false);
  };

  handlePrev = () => {
    if (this.state.id > 0) {
      this.setState({
        id: this.state.id - 1,
      });
    }
  };

  handleNext = () => {
    if (this.state.id < this.state.imgLength) {
      this.setState({
        id: this.state.id + 1,
      });
    }
  };

  render() {
    console.log(this.props);
    const { id } = this.state;
    return (
      <Form>
        <Main>
          <Img src={this.props.data.images[id].imgURL}></Img>
          <StatusBars>
            {this.props.data.images.map((img, idx) => {
              return (
                <span
                  key={idx}
                  id={idx}
                  className={this.handleAddClassName(idx)}
                />
              );
            })}
          </StatusBars>
          {this.props.type === "openSoon" && (
            <Store.Consumer>
              {fnOpenModal => (
                <div
                  className="btnRound btn"
                  onClick={() => this.handleClose(fnOpenModal)}
                >
                  <i className="fas fa-times" />
                </div>
              )}
            </Store.Consumer>
          )}
          <GradientBottom />
          <ModalArrows
            handleNext={this.handleNext}
            handlePrev={this.handlePrev}
          />
          <Title>
            <Tags>
              {this.props.data.images[0].tags.map((tag, idx) => {
                return <span key={idx}>{tag}</span>;
              })}
            </Tags>
            <div className="titleText">{this.props.data.title} </div>
          </Title>
        </Main>
        {this.props.children}
      </Form>
    );
  }
}

export default ModalLayout;

const Form = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: 720px;
  width: 405px;
  border-radius: 10px;
`;
const StatusBars = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 24px;
  right: 24px;
  top: 16px;
  span {
    display: flex;
    height: 3px;
    width: 25%;
    margin-right: 2px;
    background-color: rgb(255, 255, 255);
    opacity: 0.5;
    &.on {
      opacity: 1;
    }
  }
`;
const Title = styled.div`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 80px;
  color: white;
  font-weight: 700;
  .titleText {
    padding: 10px 0px;
    font-size: 23px;
    line-height: 32px;
  }
`;
const Tags = styled.div`
  span {
    margin-right: 5px;
    padding: 6px 8px;
    border-radius: 5px;
    font-size: 11px;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
const GradientBottom = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 200px;
  bottom: calc(100% - 648px);
  background: linear-gradient(rgba(27, 28, 29, 0) 0%, rgb(27, 28, 29) 100%);
  border-radius: 0px 0px 10px 10px;
`;
const Main = styled.div`
  height: 648px;
  .btnRound {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    top: 30px;
    right: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    color: white;
    font-size: 18px;
    padding: 8px;
    z-index: 3;
  }
`;
const Img = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 648px;
  border-radius: 10px;
  object-fit: cover;
`;
