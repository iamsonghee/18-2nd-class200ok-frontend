/* eslint-disable */
import React, { Component, useEffect } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import * as config from "../../config";
import loginimage from "../../Pages/Login/login.png";

 function Login(props) {
  const { Kakao } = window;
  console.log(props)
  //카카오 이메일 계정이 없는 경우 key_error 에러 
  const handleKakao = response => {
    Kakao.Auth.login({
      success: 
      function (response) {
        fetch("http://10.58.3.60:8000/user/signin", {
          method: "POST",
          headers: {
            Authorization: response.new_token,
          }, 
        })
          .then(res => res.json())
          .then(res => {
            localStorage.setItem("access_token", res.access_token);
          })
          .then(props.history.push("/open-soon"));
        console.log("reresponse>>>", response);
      },
      fail: function (error) {
        console.log("error>>>", error);
      },
    });
  };

  return (
    <LoginPage>
      <LoginBody>
        <LoginContents>
          <div className="LoginHeader">CLASS101</div>
          <div className="LoginContainer">
            <div className="LoginText">로그인</div>
            <IdPwText>이메일</IdPwText>
            <LoginIDPW placeholder="example@kakao.com"></LoginIDPW>
            <IdPwText>비밀번호</IdPwText>
            <LoginIDPW placeholder="********"></LoginIDPW>
            <LoginButton onClick={() => alert("카카오톡으로 로그인해주세요")}>
              로그인
            </LoginButton>
            <LoginKakao onClick={handleKakao}>
              카카오톡으로 로그인하기
            </LoginKakao>
          </div>
        </LoginContents>
      </LoginBody>
      <LoginImg src={loginimage} alt="login" />
    </LoginPage>
  );
}
export default withRouter(Login)


const buttonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 1px solid white;
  border-radius: 3px;
  font-weight: 700;
  font-size: 18px;
  outline: none;
  cursor: pointer;
`;

const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const LoginImg = styled.img`
  width: 60%;
  height: 100vh;
  @media screen and (max-width: 1500px) {
    display: none;
  }
`;

const LoginBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-bottom: 150px;

  .LoginHeader {
    margin-bottom: 100px;
    font-size: 19px;
    font-weight: 800;
  }

  .LoginContainer {
    display: flex;
    flex-direction: column;
  }

  .LoginText {
    margin-bottom: 10px;
    color: rgb(58, 58, 58);
    font-size: 32px;
    font-weight: bold;
  }
`;

const IdPwText = styled.div`
  margin: 10px 0px 4px;
  color: rgb(58, 58, 58);
  font-size: 14px;
`;

const LoginContents = styled.div`
  width: 400px;
`;

const LoginIDPW = styled.input`
  height: 42px;
  padding: 0px 16px;
  border: 1px solid rgb(239, 239, 239);
  color: rgb(26, 26, 26);
  font-size: 14px;
  line-height: 20px;
  box-sizing: border-box;
  outline: none;
`;

const LoginButton = styled(buttonStyle)`
  margin: 25px 0px;
  color: rgb(255, 255, 255);
  background-color: rgb(255, 86, 0);

  &:hover {
    background-color: rgb(200, 86, 0);
  }
`;

const LoginKakao = styled(buttonStyle)`
  background-color: rgb(255, 232, 18);

  &:hover {
    background-color: rgb(225, 212, 18);
  }
`;