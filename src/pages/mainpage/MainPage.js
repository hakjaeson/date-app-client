import React from "react";

import {
  Anniversary,
  MainPageWrapper,
  SelectMonth,
} from "../../styles/diarystyles/mainpage/mainpagestyle";
import Footer from "./Footer";
import MainContents from "./MainContents";
// 메인페이지
const MainPage = () => {
  return (
    // Wrapper
    <MainPageWrapper>
      <SelectMonth>
        <span>DEC</span>
      </SelectMonth>
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
