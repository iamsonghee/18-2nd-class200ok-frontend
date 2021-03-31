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
          <SpanText className="creatorCenter">
            <Link to="/creator">크리에이터 센터</Link>
          </SpanText>
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
  padding: 10px 150px;
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

const SpanText = styled.span`
  font-size: 20px;
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
  font-size: 25px;
`;

/*
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");

.navbar {
  font-family: "Noto Sans KR";

  .navUpperBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 100px;

    .logo {
      width: 170px;
      height: 50px;
    }
  }
}

*/
