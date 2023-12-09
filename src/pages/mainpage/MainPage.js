import React from "react";

import { Link } from "react-router-dom";
import {
  Anniversary,
  ContentHeader,
  ContentNameTitle,
  MainPageContent,
  MainPageWrapper,
  NavigationBar,
  NavigationList,
} from "../../styles/diarystyles/mainpage/mainpagestyle";
import Navigation from "./Navigation";
import MainContents from "./MainContents";
// 메인페이지
const MainPage = () => {
  return (
    // Wrapper
    <MainPageWrapper>
      {/* Anniversary area */}
      <Anniversary>
        <span>D+1000</span>
      </Anniversary>

      {/* Content area */}
      <MainContents />
      <Navigation />
    </MainPageWrapper>
  );
};

export default MainPage;
