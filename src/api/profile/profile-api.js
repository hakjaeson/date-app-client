import axios from "axios";

export const getProfile = async () => {
  try {
    const res = await axios.get();
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
