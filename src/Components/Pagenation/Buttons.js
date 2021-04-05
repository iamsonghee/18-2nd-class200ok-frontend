import React from "react";
import "./Buttons";

export default function Buttons(handleClick) {
  return (
    <div className="pageBtn">
      <Buttons data-idx="0" onClick={handleClick}>
        1
      </Buttons>
      <Buttons data-idx="1" onClick={handleClick}>
        2
      </Buttons>
      <Buttons data-idx="2" onClick={handleClick}>
        3
      </Buttons>
      <Buttons data-idx="3" onClick={handleClick}>
        4
      </Buttons>
      <Buttons data-idx="4" onClick={handleClick}>
        5
      </Buttons>
    </div>
  );
}
