/* eslint-disable */
import React, { Component } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import ModalForm from "./ModalForm";

class Modal extends Component {
  state = {
    data: {},
  };
  componentDidMount() {
    if (this.props.format === "openSoon") {
      // fetch("/data/openSoonModal.json")
      fetch(`http://54.180.24.190:8000/lecture/${this.props.id}`)
        .then(res => res.json())
        .then(res => {
          this.setState({ data: res.pending_lecture });
          //this.setState({ data: res });
        });
    } else {
      fetch("/data/creatorPreview.json")
        // fetch(`http://10.58.7.250:8000/lecture/${this.props.id}`)
        .then(res => res.json())
        .then(res => {
          // this.setState({ data: res.pending_lecture });
          this.setState({ data: res });
        });
    }
  }

  render() {
<<<<<<< HEAD
=======
    console.log("Modal!!!!!", this.state.data);
>>>>>>> 3a1790f... ADD: 제품리스트 filter,sort 기능, 이미지 s3 모달연결 기능추가
    return (
      <>
        {Object.keys(this.state.data).length > 0 && (
          <ModalForm
            format={
              this.props.format === "openSoon"
                ? openSoonProps
                : creatorApplyProps
            }
            data={this.state.data}
            openModal={this.props.openModal}
          />
        )}
      </>
    );
  }
}

export default withRouter(Modal);

const openSoonProps = {
  type: "openSoon",
  name: "오픈예정모달",
};

const creatorApplyProps = {
  type: "creatorApply",
  name: "크리에이터지원",
};
