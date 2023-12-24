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
import { useParams } from "react-router";
import EmptyContent from "../../components/mainpage/EmptyContent";

// 메인페이지
const MainPage = ({ user }) => {
  // axios setting
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hashComponent, setHashComponent] = useState(false);

  const handleHashClick = () => {
    setHashComponent(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/diary`);
        setData(res.data);
        // console.log(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    // console.log("MainPage:", filteredData);
  }, [filteredData]);
  // useEffect(() => {}, [hashTag]);

  return (
    // Wrapper

    <MainPageWrapper>
      {/* 조건 : hashbutton을 활성화 하지 않았을 때 */}

      <AnniversaryContent user={user} />
      <SelectMonth>
        {!loading && (
          <MonthSelect data={data} setFilteredData={setFilteredData} />
        )}
      </SelectMonth>
      {/* 데이터가 없을 때([])(empty-contents components) */}
      {/* 해야할 것 : filteredData -> 이게 없을 때 저장된 기록이 없어요. */}
      {data.length > 0 ? (
        <MainContents data={filteredData} />
      ) : (
        <EmptyContent />
      )}

      {/* Anniversary area */}
      {/* Footer area */}
      <Footer />
    </MainPageWrapper>
  );
};

export default MainPage;
