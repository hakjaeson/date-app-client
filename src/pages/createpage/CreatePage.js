import styled from "@emotion/styled";
import React, { useEffect } from "react";
import CreatePageForm from "./CreatePageForm";
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
  /* background-color: greenyellow; */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 900px;
`;

const CreatePageMain = styled.div`
  /* background-color: blue; */
  position: relative;
  width: 100%;
  height: 100%;
`;

const CreatePage = () => {
  useEffect(() => {
    // 전체 어플리케이션의 body에 스크롤을 없애는 스타일을 추가
    document.body.style.overflow = "hidden";

    return () => {
      // 스타일을 초기 상태로 복구
      document.body.style.overflow = "auto";
    };
  }, []); // 빈 배열은 마운트와 언마운트 시에만 실행

  return (
    <Wrapper>
      <Device>
        <PrevHeader />
        <CreatePageMain>
          <CreatePageForm />
        </CreatePageMain>
      </Device>
    </Wrapper>
  );
};

export default CreatePage;
