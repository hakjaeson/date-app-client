import axios from "axios";

export const getReadPage = async (setData, diaryId, setEmojiName) => {
  const res = await axios.get("mainPage.json");
  setData(res.data[diaryId]);
  setEmojiName(res.data[diaryId].emoji - 1);
};
