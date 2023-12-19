import React, { useEffect, useState } from "react";

import axios from "axios";
// Emotion JS
import {
  MainPageWrapper,
  SelectMonth,
} from "../../styles/diarystyles/mainpage/mainpagestyle";
// Call Components
import AnniversaryContent from "../../components/mainpage/AnniversaryContent";
import Footer from "../../components/mainpage/Footer";
import MainContents from "../../components/mainpage/MainContents";
import MonthSelect from "../../components/mainpage/MonthSelect";

// 메인페이지
const MainPage = () => {
  // axios setting
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("mainPage.json");
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
      }
    };
    fetchData();
  }, []);

  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    // console.log("MainPage:", filteredData);
  }, [filteredData]);

  const handleHashClick = hashContents => {
    const filtered = data.filter(item =>
      item.hashContents.includes(hashContents),
    );
    setFilteredData(filtered);
  };

  return (
    // Wrapper
    <MainPageWrapper>
      <SelectMonth>
        {!loading && (
          <MonthSelect
            data={data}
            // filteredData={filteredData}
            setFilteredData={setFilteredData}
          />
        )}
      </SelectMonth>
      {/* Anniversary area */}
      <AnniversaryContent data={data} />
      {/* Content area */}
      <MainContents data={filteredData} onHashClick={handleHashClick} />
      {/* Footer area */}
      <Footer />
    </MainPageWrapper>
  );
};

export default MainPage;
