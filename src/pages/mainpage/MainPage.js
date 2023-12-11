import React from "react";

import {
  Anniversary,
  MainPageWrapper,
  SelctNotice,
} from "../../styles/diarystyles/mainpage/mainpagestyle";
import MainContents from "./MainContents";
// 메인페이지
const MainPage = () => {
  return (
    // Wrapper
    <MainPageWrapper>
      <SelctNotice>
        <span></span>
      </SelctNotice>
      {/* Anniversary area */}
      <Anniversary>
        <span>D+1000</span>
      </Anniversary>

      {/* Content area */}
      <MainContents />
      {/* <Navigation /> */}
    </MainPageWrapper>
  );
};

export default MainPage;
