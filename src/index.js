import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
// import "./styles/common.scss";
// import "./styles/reset.scss";
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.render(
  <>
    <GlobalStyle />
    <Routes />
  </>,
  document.getElementById("root")
);
