import axios from "axios";

export const postCreatePage = async (data, emojiIdx, hashTag) => {
  await axios
    .post("/api/diary", {
      title: data.title,
      contents: data.content,
      emoji: emojiIdx,
      pics: [data.image[0].name],
      hashContents: [...hashTag],
    })
    .then(response => {
      console.log("서버 응답:", response.data);
    })
    .catch(error => {
      console.error("에러 발생:", error);
    });
};
