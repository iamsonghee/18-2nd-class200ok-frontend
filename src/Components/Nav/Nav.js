import React, { useState, useEffect } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import * as config from "../../config";
import styled from "styled-components";

export default function Nav() {
  const [isLogin, setIsLogin] = useState(false);

  const { Kakao } = window;

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setIsLogin(!isLogin);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setIsLogin(!isLogin);
    if (!Kakao.Auth.getAccessToken()) {
      console.log("Not logged in.");
      return;
    }
    Kakao.Auth.logout(function () {
      console.log(Kakao.Auth.getAccessToken());
    });
    alert("로그아웃 하셨습니다!");
  };

  return (
    <withRouter>
      <NavBox>
        <nav>
          <NavUpperBox>
            <ImgLogo src="/images/class101-logo.png" />
            <NavUpperDiv>
              {isLogin && (
                <DivText>
                  <Link to="/creator">크리에이터 센터</Link>
                  <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
                </DivText>
              )}
              {!isLogin && (
                <DivText>
                  <Link to="/creator">크리에이터 지원</Link>
                  <Link to="/login">로그인</Link>
                </DivText>
              )}
            </NavUpperDiv>
          </NavUpperBox>
          <NavLowerBox>
            <NavList>
              <NavLink to="/open-soon">오픈 예정</NavLink>
            </NavList>
            <NavList>
              <Link to="/lecture">바로 수강</Link>
            </NavList>
          </NavLowerBox>
        </nav>
      </NavBox>
    </withRouter>
  );
}

const NavBox = styled.div`
  padding: 20px 150px;
`;

const NavUpperBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ImgLogo = styled.img`
  width: 110px;
  height: 20px;
  margin-left: 50px;
`;

const NavUpperDiv = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 50px;

  a {
    padding-top: 2px;
  }
`;

const LogoutBtn = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 15px;
`;

const DivText = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 200px;
  margin: 0px 20px;
  font-size: 15px;
`;

const NavLowerBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 60%;
  border: 1px solid, black;
`;

const NavList = styled.li`
  display: inline;
  margin-left: 10px;
  padding-bottom: 5px;
  font-size: 20px;

  &:hover {
    border-bottom: 2px solid black;
  }
`;
