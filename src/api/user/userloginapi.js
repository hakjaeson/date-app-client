import axios from "axios";

export const postUserLogin = async (obj, successFN, failFN) => {
  try {
    const res = await axios.post("/api/user", obj);
    console.log(res.data);
    successFN();
  } catch (error) {
    console.log(error);
    alert("서버 에러입니다.");
    // const demo = axios.get("/json/logindummy.json");
    // console.log(demo.data);
    failFN();
  }
};
