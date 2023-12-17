import axios from "axios";

export const getUserProfile = async setProfileData => {
  try {
    const res = await axios.get("/api/user/profile");
    setProfileData(res.data);
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다.");
    const fakeData = {
      nm: "국연수",
      pic: "https://i.namu.wiki/i/PZJXLu30vFbxLw-VUwE_szEe2vtwsGFAjGbQl1D7vbAIAgBvgPeQL64Ne6gIChTAYePWFyFZn-A92V_1jhNzjOIXfn6_2Al-l4DzWEmKeJGZcHiXJ-1vaqSwT4JbMwr7SEaQRepLD8dxJVoXeuqQtA.webp",
      birth: "1995-04-09",
      startedAt: "2021-12-06",
      partnerPic:
        "https://i.namu.wiki/i/RrXoHMNkjsbK55Es-U3uVMTlwpF5HeM0n5z8BX5grsj6ZxZ9k-rMkHuBFOis3OzmkJZAKDEEhb7L-RXO6-tcCMhmRPtUiOYfVuHAGAr4HbgOnz1_aaAf8NLeKMdf4Np4S2RGxujXu4y1Wlv8OFsQZw.webp",
      partnerNm: "최웅",
      partnerBirth: "1990-03-26",
    };
    setProfileData(fakeData);
  }
};

export const patchUserProfile = async ({ pic, nm, birth, startedAt }, fn) => {
  try {
    const res = await axios.patch("/api/user/profile", {
      pic,
      nm,
      birth,
      startedAt,
    });
    fn(res.data);
  } catch (error) {
    console.log(error);
    fn(-500);
  }
};
