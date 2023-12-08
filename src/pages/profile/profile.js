import styled from "@emotion/styled";
import React from "react";

const profile = () => {
  const Main = styled.main`
    width: 100%;
    min-height: 500px;
    background-color: yellowgreen;
  `;
  return (
    <>
      <header>상단 바 </header>
      <Main>
        <img src="#" />
        <div>
          <form></form>
        </div>
      </Main>
      <footer>네이게이션 바 영역</footer>
    </>
  );
};

export default profile;
