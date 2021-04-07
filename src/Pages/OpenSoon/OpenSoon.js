import React, { Component } from "react";
import { mockAPI } from "../../config";
import FirstModal from "../Filter/FirstModal";
import "./OpenSoon.scss";
import Lecture from "../../Components/Lecture/Lecture";

class OpenSoon extends Component {
  constructor() {
    super();
    this.state = {
      classList: {},
    };
  }

  componentDidMount = () => {
    fetch(mockAPI)
      .then(res => res.json())
      .then(res => this.setState({ classList: res }));
  };

  render() {
    const { classList } = this.state;
    // const { sortClass, sortPrice } = this;
    console.log("첫번째 콘솔", this.state.classList);
    return (
      <>
        <div className="banner">
          <div className="boxContainer">
            <div className="firstBox">클래스를 응원하면 더 빨리 제작돼요</div>

            <div className="secondBox">응원한 클래스</div>
            <div className="thirdBox">내 응원권</div>
          </div>
        </div>
        {/* <filter sortClass={sortClass} sortPrice={sortPrice} /> */}
        <div className="openSoonMain">
          <div className="list">
            {classList.pending_classes?.map(data => {
              return <Lecture data={data} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default OpenSoon;
