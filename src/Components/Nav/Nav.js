import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";
import "./Nav.scss";

export default function Nav() {
  return (
    <NavBox>
      <nav>
        <NavUpperBox>
          <ImgLogo src="/images/class200ok-logo.png" />
          <NavUpperDiv>
            <SpanText>
              <Link to="/creator">크리에이터 센터</Link>
            </SpanText>
            <SpanText>
              <Link to="/login">로그인</Link>
            </SpanText>
          </NavUpperDiv>
        </NavUpperBox>
        <NavLowerBox>
          <NavList>
            <Link to="/oepn-soon">오픈 예정</Link>
          </NavList>
          <NavList>
            <Link to="/lectures">바로 수강</Link>
          </NavList>
        </NavLowerBox>
      </nav>
    </NavBox>
  );
}

const NavBox = styled.div`
  padding: 20px 150px;
`;

const NavUpperBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImgLogo = styled.img`
  width: 180px;
  height: 50px;
`;

const NavUpperDiv = styled.div`
  width: 300px;
  height: 50px;
`;

const SpanText = styled.span`
  margin: 0px 10px;
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
    border-bottom: 3px solid black;
    border-radius: 2px;
  }
`;
