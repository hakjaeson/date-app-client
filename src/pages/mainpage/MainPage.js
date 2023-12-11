import React from "react";

import {
  Anniversary,
  MainPageWrapper,
  SelctNotice,
} from "../../styles/diarystyles/mainpage/mainpagestyle";
import MainContents from "./MainContents";
import Footer from "./Footer";
// 메인페이지
const MainPage = () => {
  return (
    // Wrapper
    <MainPageWrapper>
      <SelctNotice>
        <span>12월</span>
      </SelctNotice>
      {/* Anniversary area */}
      <Anniversary>
        <span>D+1000</span>
      </Anniversary>

      {/* Content area */}
      <MainContents />
      {/* Footer area */}
      <Footer />
    </MainPageWrapper>
  );
};

export default MainPage;
