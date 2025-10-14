import axios from "axios";

const URL = "http://localhost:8000";
export const Authenicatesignup = async (data) => {
  try {
    return await axios.post(`${URL}/signupuser`, data);
  } catch (error) {
    console.log("error while calling the signup api", error);
    return error.response;
  }
};
export const AuthenicateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/loginupuser`, data);
  } catch (error) {
    console.log("error while calling the login api", error);
    return error.response;
  }
};
