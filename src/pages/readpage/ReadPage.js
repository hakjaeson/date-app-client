import styled from "@emotion/styled";
import React, { useEffect } from "react";
import PrevHeader from "../../components/common/PrevHeader";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 320px;
  max-width: 600px;
  max-height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Device = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 900px;
`;

const PageMain = styled.div`
  background-color: blue;
  position: relative;
  width: 100%;
  height: 90vh;
`;

const ReadTitle = styled.div`
  background-color: violet;
  height: 10%;
  display: flex;
  padding-left: 25px;
  align-items: center;
  font-size: 25px;
`;

const ReadPage = () => {
  return (
    <Wrapper>
      <Device>
        <PrevHeader />
        <PageMain>
          <ReadTitle>제목</ReadTitle>
        </PageMain>
      </Device>
    </Wrapper>
  );
};

export default ReadPage;
