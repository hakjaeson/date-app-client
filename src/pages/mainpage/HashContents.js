import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const HashContents = () => {
  //받아온 데이터
  const { hashContets } = useParams();
  // Hash 저장
  const [hashFilteredData, setHashFilteredData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("mainPage.json");
        setHashFilteredData(res.hashFilteredData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [hashContets]);
  if (!hashFilteredData) {
    return <div>loading</div>;
  }
  return <div>{hashContets}</div>;
};

export default HashContents;
