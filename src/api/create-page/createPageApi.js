import axios from "axios";

export const postCreatePage = async (data, imgUrl, emojiIdx, hashTag) => {
  // console.log(data);
  await axios
    .post("/api/diary", {
      title: data.title,
      contents: data.content,
      emoji: emojiIdx,
      pics: [...imgUrl],
      hashContents: [...hashTag],
    })
    .then(response => {
      console.log("서버 응답:", response.data);
    })
    .catch(error => {
      console.error("에러 발생:", error);
    });
};
