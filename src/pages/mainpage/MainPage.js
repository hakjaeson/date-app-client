import React, { useEffect, useState } from "react";

import {
  Anniversary,
  MainPageWrapper,
  SelectMonth,
} from "../../styles/diarystyles/mainpage/mainpagestyle";
import Footer from "./Footer";
import MainContents from "./MainContents";
import axios from "axios";

// 메인페이지
const MainPage = () => {
  // 데이터를 저장할 상태
  const [data, setData] = useState(null);
  // 요청이 진행 중인지 여부를 나타내는 상태
  const [loading, setLoading] = useState(true);
  // 에러가 발생했는지 여부를 나타내는 상태
  const [error, setError] = useState(null);

  const [month, setMonth] = useState(null);
  const [anniversary, setAnniversary] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("url");
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
