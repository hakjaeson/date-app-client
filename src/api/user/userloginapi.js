import axios from "axios";

export const postUserLogin = async (obj, successFN, failFN, setUser) => {
  try {
    const res = await axios.post("/api/user", obj);
    const userData = res.data;
    console.log("user Data API page :", res.data);
    setUser(userData);
    // userLog(userData);
    successFN();
  } catch (error) {
    console.log(error);
    alert("서버 에러입니다.");
    // const demo = axios.get("/json/logindummy.json");
    // console.log(demo.data);
    failFN();
  }
};
