import React, { useEffect, useState } from "react";

import axios from "axios";
import {
  Anniversary,
  MainPageWrapper,
  SelectMonth,
} from "../../styles/diarystyles/mainpage/mainpagestyle";
import Footer from "./Footer";
import MainContents from "./MainContents";
//DatePicker
import "react-datepicker/dist/react-datepicker.css";
import MonthSelect from "./MonthSelect";

// 메인페이지
const MainPage = () => {
  // Axios setting
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("mainPage.json");
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
      }
    };
    fetchData();
  }, []);

  return (
    // Wrapper
    <MainPageWrapper>
      <SelectMonth data={data}>
        <MonthSelect />
      </SelectMonth>
      {/* Anniversary area */}
      <Anniversary>
        <span>D+1000</span>
      </Anniversary>

      {/* Content area */}
      <MainContents data={data} />
      {/* Footer area */}
      <Footer  />
    </MainPageWrapper>
  );
};

export default MainPage;
