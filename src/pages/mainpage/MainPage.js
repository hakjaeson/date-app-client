import React, { useEffect, useState } from "react";

import axios from "axios";
// Emotion JS
import {
  MainPageWrapper,
  SelectMonth,
} from "../../styles/diarystyles/mainpage/mainpagestyle";
// Call Components
import AnniversaryContent from "../../components/mainpage/AnniversaryContent";
import EmptyContent from "../../components/mainpage/EmptyContent";
import Footer from "../../components/mainpage/Footer";
import MainContents from "../../components/mainpage/MainContents";
import MonthSelect from "../../components/mainpage/MonthSelect";
import HashHeader from "../../components/mainpage/HashHeader";
import NotSaveContents from "../../components/mainpage/NotSaveContents";

// 메인페이지
const MainPage = () => {
  // axios setting
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [hashClick, setHashClick] = useState(false);
  const [selectHashTag, setSelectHashTag] = useState("");

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

  useEffect(() => {
    // console.log("MainPage:", filteredData);
  }, [filteredData]);
  // useEffect(() => {}, [hashTag]);

  // hashTag Filtering
  const handleHashTagClick = hashTag => {
    const newData = data.filter(item => item.hashContents.includes(hashTag));
    setFilteredData(newData);
    setHashClick(true);
    setSelectHashTag(hashTag);
  };

  const handleBackClick = () => {
    setHashClick(false);
  };

  return (
    // Wrapper

    <MainPageWrapper>
      {/* 조건 : hash버튼 눌렀을 때 활성화 하지 않았을 때 */}
      {hashClick ? (
        <>
          <HashHeader hashTag={selectHashTag} onBackClick={handleBackClick} />
          <MainContents
            data={filteredData}
            onHashTagClick={handleHashTagClick}
          />
        </>
      ) : (
        <>
          {/* Anniversary area */}
          <AnniversaryContent data={data} />
          <SelectMonth>
            {!loading && (
              <MonthSelect data={data} setFilteredData={setFilteredData} />
            )}
          </SelectMonth>
          {/* 데이터가 없을 때([])(empty-contents components) */}
          {/* 해야할 것 : filteredData -> 이게 없을 때 저장된 기록이 없어요. */}
          {/* {filteredData.length > 0 ? <></> : <></>} */}
          {data.length > 0 && filteredData.length > 0 ? (
            <MainContents
              data={filteredData}
              onHashTagClick={handleHashTagClick}
            />
          ) : filteredData.length == 0 ? (
            <NotSaveContents />
          ) : (
            <EmptyContent />
          )}
        </>
      )}
      ;{/* Footer area */}
      <Footer />
    </MainPageWrapper>
  );
};

export default MainPage;
