import React, { useEffect } from "react";
import CreatePageForm from "./CreatePageForm";
import PrevHeader from "../../components/common/PrevHeader";
import {
  CreatePageMain,
  Device,
  Wrapper,
} from "../../styles/diarystyles/createpage/pagestyle";

const CreatePage = () => {
  useEffect(() => {
    // 스크롤 맨위로 올리기
    window.scrollTo(0, 0);

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
