import axios from "axios";
// 해당 게시물 상세페이지 데이터 가져오기
export const getReadPage = async (setData, diaryId, setEmojiName) => {
  try {
    const res = await axios.get(`/api/diary/${diaryId}`);

    if (res.status === 200 && res.data) {
      // 서버 응답이 성공하고 데이터가 존재할 경우
      // console.log(res.data);
      setData(res.data);
      setEmojiName(res.data.emoji);
    } else {
      // 서버 응답이 성공하였지만 데이터가 없는 경우
      console.error("데이터가 없습니다.");
    }
  } catch (error) {
    console.error("에러");
  }
};

// 해당 게시물 상세페이지 데이터 수정
export const updateReadPage = async (
  data,
  diaryId,
  imgUrl,
  updateEmojiNum,
  hashTag,
) => {
  try {
    const res = await axios.patch(`/api/diary`, {
      diaryId: diaryId,
      title: data.title,
      contents: data.content,
      diaryPics: [...imgUrl],
      hashContents: [...hashTag],
      emoji: updateEmojiNum,
    });

    if (res.status === 200 && res.data) {
      alert("수정이 완료 되었습니다.");
    } else {
      // 서버 응답이 성공하였지만 데이터가 없는 경우
      console.error("데이터가 없습니다.");
    }
  } catch (error) {
    console.error("에러");
  }
};

// 해당 게시물 상세페이지 데이터 삭제
export const deleteReadPage = async diaryId => {
  try {
    const res = await axios.delete(`/api/diary/${diaryId}`);

    if (res.status === 200 && res.data) {
      alert("삭제가 완료 되었습니다.");
    } else {
      // 서버 응답이 성공하였지만 데이터가 없는 경우
      console.error("데이터가 없습니다.");
    }
  } catch (error) {
    console.error("에러");
  }
};
