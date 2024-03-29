import axios from "axios";
import { Http, HttpBase } from "../../../shared/utils/httpWrapper/Http";
import { UserModel } from "../../../models/UserModel";

export const register = async (userData: any) => {
  const res = await axios.post("auth/register", userData);
  userData && localStorage.setItem("user", JSON.stringify(res.data));
  return res.data;
};
// export const login =async (userData: any)  => {
//     const res = await axios.post('/auth/login', userData)
//     userData && localStorage.setItem("user", JSON.stringify(res.data));
//     userData && localStorage.setItem("token",  res.data.accesToken);

//    return res.data

// }
export const login = async (userData: any) => {
  try {
    const res = await axios.post("auth/login", userData);
      localStorage.setItem("user", JSON.stringify(res) ?? "");
    localStorage.setItem("token", res.accessToken !!);
    console.log('accessToken',res);
    

    return res;
  } catch (error) {
    console.log(error );
    throw error;
  }
};
const authAPI = {
  register,
  login,
};
export default authAPI;
