import axios from "axios";

export const getUserProfile = async setProfileData => {
  try {
    const res = await axios.get("/api/user/profile");
    setProfileData(res.data);
  } catch (error) {
    console.log(error);
    alert("서버가 불안정하니 더미데이터활용");
    const fakeData = {
      nm: "홍길동",
      pic: "https://i.namu.wiki/i/R0AhIJhNi8fkU2Al72pglkrT8QenAaCJd1as-d_iY6MC8nub1iI5VzIqzJlLa-1uzZm--TkB-KHFiT-P-t7bEg.webp",
      birth: "2023-12-15",
      startedAt: "2023-12-15",
      partnerPic:
        "https://img1.daumcdn.net/thumb/C500x500/?fname=http://t1.daumcdn.net/brunch/service/user/6qYm/image/eAFjiZeA-fGh8Y327AH7oTQIsxQ.png",
    };
    setProfileData(fakeData);
  }
};

export const patchUserProfile = async ({ nm, pic, birth, startedAt }, fn) => {
  try {
    const res = await axios.patch("/api/user/profile", {
      nm,
      pic,
      birth,
      startedAt,
    });
    fn(res.data);
  } catch (error) {
    console.log(error);
    fn(-500);
  }
};

export const postUserProfile = async () => {
  try {
    const res = await axios.post("/api/user/profile");
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
