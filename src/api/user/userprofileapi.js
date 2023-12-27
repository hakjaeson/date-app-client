import axios from "axios";

// 프로필 정보 불러오기
export const getUserProfile = async setProfileData => {
  try {
    const res = await axios.get(`/api/user/profile`);
    setProfileData(res.data);
  } catch (error) {
    console.log(error);
    alert("서버가 불안정합니다.");
    const fakeData = {
      nm: "국연수",
      pic: `${process.env.PUBLIC_URL}/images/girl.png`,
      birth: "1995-04-09",
      startedAt: "2021-12-06",
      partnerPic: `${process.env.PUBLIC_URL}/images/boy.png`,
    };
    setProfileData(fakeData);
  }
};

// 프로필 수정하기
export const patchUserProfile = async (item, fn) => {
  try {
    const res = await axios.patch(`/api/user/profile`, item);

    fn(res.data.result);
  } catch (error) {
    console.log(error);
    fn(-500);
  }
};
