import axios from "axios";
import { SERVER_URL } from "../config";

export const getUserProfile = async setProfileData => {
  try {
    const res = await axios.get(`/api/user/profile`);
    // const res = await axios.get("profiledummy.js");

    setProfileData(res.data);
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다.");
    const fakeData = {
      nm: "국연수",
      pic: `${process.env.PUBLIC_URL}/images/국연수.png`,
      birth: "1995-04-09",
      startedAt: "2021-12-06",
      partnerPic: `${process.env.PUBLIC_URL}/images/최웅.png`,
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
    if (error.res) {
      console.log(error.res.data);
    } else {
      console.log(error);
    }
    fn(-500);
  }
};
