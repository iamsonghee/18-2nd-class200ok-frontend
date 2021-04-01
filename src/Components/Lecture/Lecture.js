import React, { Component } from "react";
import styled from "styled-components";
import LectureForm from "./LectureForm";

export default class Lecture extends Component {
  render() {
    return (
      <div>
        <LectureForm format={lectureSoonProps} />
      </div>
    );
  }
}

const lectureSoonProps = {
  type: "lectureSoon",
  text: "오픈예정",
  data: [],
};

const lectureNowProps = {
  type: "lectureNow",
  text: "바로수강",
  data: [],
};
