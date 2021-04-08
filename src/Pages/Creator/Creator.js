import React, { Component } from "react";
import styled from "styled-components";
import Createinfo from "./Creatorinfo";
import CreateNav from "./CreatorNav";
import Creatorintroduce from "./Creatorintroduce";
import CreatorTitle from "./CreatorTitle";
import Modal from "../../Components/Modal/Modal";

export class Creator extends Component {
  componentDidMount() {
    console.log("************", this.props);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("************", this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <CreateNav
          navid={this.props.match.params.id}
          handleBtn={this.handleBtn}
        />
        <CreatorListBox>
          {this.props.match.params.id === "0" && <Createinfo />}
          {this.props.match.params.id === "1" && <CreatorTitle />}
          {this.props.match.params.id === "2" && <Creatorintroduce />}
        </CreatorListBox>
        <Modal />
      </div>
    );
  }
}

const CreatorListBox = styled.div`
  position: relative;
  top: 90px;
  left: 270px;
`;

export default Creator;
