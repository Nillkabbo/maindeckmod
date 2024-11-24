import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "https://05ca-68-196-100-204.ngrok-free.app/api";

export const register = async (emailOrUsername: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/user/simple_register`, {
      email: emailOrUsername,
      password: password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Failed to register");
    } else {
      throw new Error("Failed to register");
    }
  }
};

export const login = async (emailOrUsername: string, password: string) => {
  try {
    let data = JSON.stringify({
      email: emailOrUsername,
      password: password,
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${API_URL}/user/authenticate`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error("Network error occurred", JSON.stringify(error, null, 2));
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Failed to login");
    } else {
      throw new Error("Failed to login");
    }
  }
};

export const fetchData = async (api_route: string) => {
  let token = await AsyncStorage.getItem("token");
  if (token) {
    const parsedToken = JSON.parse(token);
    const accessToken = parsedToken.token.access;
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${API_URL}/${api_route}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    console.log("config", config);
    try {
      const response = await axios.request(config);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message || "Failed to fetch data");
      } else {
        throw new Error("Failed to fetch data");
      }
    }
  } else {
    throw new Error("No token found");
  }
};
