import axios from "axios";

export const getReadPage = async (setData, diaryId) => {
  const res = await axios.get("mainPage.json");
  setData(res.data[diaryId]);
};
