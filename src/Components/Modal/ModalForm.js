/* eslint-disable */
import React, { Component } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import BottomBox from "./BottomBox";
import ModalLayout from "./ModalLayout";

class ModalForm extends Component {
  render() {
    // const { id } = this.state;
    return (
      <LecModal>
        <ModalLayout type={this.props.format.type} data={this.props.data}>
          {this.props.format.type === "openSoon" && <BottomBox />}
        </ModalLayout>
      </LecModal>
    );
  }
}

export default ModalForm;

const LecModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.56);
  z-index: 1;
`;