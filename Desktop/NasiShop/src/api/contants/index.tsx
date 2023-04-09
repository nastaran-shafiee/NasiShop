import axios from "axios";
import Cookies from "js-cookie";

export const baseURL = "http://localhost:3002";

export const instance = axios.create({
  baseURL,
  timeout: 80000,
});

instance.interceptors.request.use(
  (config) => {
    const authToken = Cookies.get("token");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
      config.headers.refreshToken = localStorage.getItem("refresh_token");
      config.timeout = 800000;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      response: { status },
    } = error;

    if (status === 401) {
      try {
        const { data } = await instance.post("/auth/refresh-token");
        console.log(data);
        const { accessToken } = data;

        Cookies.set("token", accessToken);
        window.location.reload();
      } catch (error) {
        // handle error
      }
    }
    return Promise.reject(error);
  }
);
