import React, { Component } from "react";
import styled from "styled-components";
import LectureForm from "./LectureForm";

export default class Lecture extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <LectureForm format={lectureSoonProps} data={data} />
      </div>
    );
  }
}

const lectureSoonProps = {
  type: "lectureSoon",
  text: "오픈예정",
};

const lectureNowProps = {
  type: "lectureNow",
  text: "바로수강",
  data: [],
};
