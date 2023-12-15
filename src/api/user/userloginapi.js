import axios from "axios";

export const postUserLogin = async obj => {
  try {
    const res = await axios.post("/api/user", obj);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
