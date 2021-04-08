/* eslint-disable */
import React, { Component } from "react";
import { mockAPI } from "../../config";
import FirstModal from "../Filter/FirstModal";
import "./OpenSoon.scss";
import Lecture from "../../Components/Lecture/Lecture";
import Nav from "../../Components/Nav/Nav";
import * as config from "../../config";

class OpenSoon extends Component {
  constructor() {
    super();
    this.state = {
      classList: [],
      selectedFilter: [],
      modalOn: false,
      voteCount: 0,
    };
  }


  componentDidMount = () => {
    if (!Kakao.isInitialized()) {
      Kakao.init(config.KAKAO_LDH_KEY);
    }
    fetch(mockAPI)
      .then(res => res.json())
      .then(res => this.setState({ classList: res }));
  };
  selectFilter = (value, type) => {
    const newArr = [...this.state.selectedFilter];
    newArr[type === 'category' ? 0 : 1] = value;
    const query = this.makeQuery(newArr);
    this.setState({selectedFilter: newArr});
    // fetch(`API${query}`)
    // .then(res => res.json())
    // .then(res => this.setState({classList: res}))
  }
  makeQuery = (arr) => {
    let query = '?'
    if (arr[0]) query += `category=${arr[0]}`;
    if (arr[1]) query += `&category=${arr[1]}`;
   return query;
  }

  handleVoteCount = () => {
    this.setState({voteCount: this.state.voteCount+1})
  }

  handleModal = () => {
    this.setState(!modalOn)
  }

  render() {
    const { Kakao } = window;
    const { classList, filter, collection, sortingSequence } = this.state;
    return (
      <>
        <Nav />
        <div className="banner">
          <div className="boxContainer">
            <div className="firstBox">클래스를 응원하면 더 빨리 제작돼요</div>
            <div className="secondBox"><div>응원한 클래스</div> <div>{this.state.voteCount}개</div></div>
            <div className="thirdBox"><div>내 응원권</div></div>
          </div>
        </div>
        <div className="filter">
        <select className="firstFilter" onChange={(e) => this.selectFilter(e.target.value, 'category')}>
          <option value={1}>미술</option>
          <option value={2}>공예</option>
          <option value={3}>디지털 드로잉</option>
          <option value={4}>라이프 스타일</option>
          <option value={5}>사진/영상</option>
          <option value={6}>요리/음료</option>
          <option value={7}>음악</option>
          <option value={8}>운동</option>
        </select>
        <select className="secondFilter" onChange={e => this.selectFilter(e.target.value,'sort')}>
          <option value='latest'>신상품순</option>
          <option value='lowest'>낮은 가격순</option>
          <option value='highest'>높은 가격순</option>
        </select>
      </div>
        <div className="openSoonMain">
          <div className="list">
            {classList.pending_classes?.map(data => {
              return <Lecture data={data} handleModal={this.handleModal} handleVoteCount={this.handleVoteCount} />;
            })}
          </div>
        </div>
      </>
    );
  }
}
// const SIZES = [
//   {
//     id: 1,
//     name: "미술",
//   },
//   {
//     id: 2,
//     name: "공예",
//   },
//   {
//     id: 3,
//     name: "디지털 드로잉",
//   },
//   {
//     id: 4,
//     name: "라이프 스타일",
//   },
//   {
//     id: 5,
//     name: "사진/영상",
//   },
//   {
//     id: 6,
//     name: "요리/음료",
//   },
//   {
//     id: 7,
//     name: "음악",
//   },
//   {    
//     id: 8,
//     name: "운동",
//   },
// ];
// const COLLECTIONS = ["latest", "popular"];
export default OpenSoon;