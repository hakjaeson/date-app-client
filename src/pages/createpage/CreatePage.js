import styled from "@emotion/styled";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import CreatePageForm from "./CreatePageForm";

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

const CreatePageHeader = styled.div`
  /* background-color: red; */
  position: relative;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const CreatePageMain = styled.div`
  /* background-color: blue; */
  position: relative;
  width: 100%;
  height: 90vh;
`;

const CreatePage = () => {
  useEffect(() => {
    // 컴포넌트가 마운트될 때 실행되는 코드
    // 전체 어플리케이션의 body에 스크롤을 없애는 스타일을 추가
    document.body.style.overflow = "hidden";

    // 컴포넌트가 언마운트될 때 cleanup 함수
    return () => {
      // 컴포넌트가 언마운트될 때 실행되는 코드
      // 스타일을 초기 상태로 복구
      document.body.style.overflow = "auto";
    };
  }, []); // 빈 배열은 마운트와 언마운트 시에만 실행

  return (
    <Wrapper>
      <Device>
        <CreatePageHeader>
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ width: 20, height: 20, marginLeft: 20 }}
          />
        </CreatePageHeader>
        <CreatePageMain>
          <CreatePageForm />
        </CreatePageMain>
      </Device>
    </Wrapper>
  );
};

export default CreatePage;
