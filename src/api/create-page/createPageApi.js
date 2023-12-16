import axios from "axios";

export const postCreatePage = async data => {
  await axios
    .post("http://localhost:4000/diary", {
      title: data.title,
      diaryPics: data.img,
      emoji: data.emoji,
      contents: data.content,
      hashContents: [data.hashContents, "tag2", "tag3"],
    })
    .then(response => {
      console.log("서버 응답:", response.data);
    })
    .catch(error => {
      console.error("에러 발생:", error);
    });
};
