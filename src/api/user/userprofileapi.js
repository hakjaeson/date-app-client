import axios from "axios";

// 프로필 정보 불러오기
export const getUserProfile = async setProfileData => {
  console.log("겟 실행");
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

// // 파트너 프로필 정보 불러오기
// export const getUserProfilePartner = async (setProfileData, partner_id) => {
//   console.log("겟 실행");
//   try {

//     const res = await axios.get(`/api/user/profile?partner_id=${partner_id}`);

//     setProfileData(res.data);
//   } catch (error) {
//     console.log(error);
//     alert("서버가 불안정합니다.");
//     const fakeData = {
//       nm: "최웅",
//       pic: `${process.env.PUBLIC_URL}/images/girl.png`,
//       partnerPic: `${process.env.PUBLIC_URL}/images/boy.png`,
//       birth: "1990-03-26",
//       startedAt: "2021-12-06",
//     };
//     setProfileData(fakeData);
//   }
// };

// 프로필 수정하기
export const patchUserProfile = async ({ nm, pic, birth, startedAt }, fn) => {
  console.log("패치 실행");
  try {
    const res = await axios.patch(
      `/api/user/profile?nm=${nm}&pic=${pic}&birth=${birth}&startedAt=${startedAt}`,
    );
    console.log(res.data);
    fn(res.data);
  } catch (error) {
    console.log(error);
    fn(-500);
  }
};
