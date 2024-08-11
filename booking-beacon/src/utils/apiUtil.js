import axios from "axios";

export const axiosAuth = axios.create({
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

axiosAuth.interceptors.request.use(
  (config) => {
    const copyConfig = { ...config };
    if (!config.headers) return config;
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && config.headers) {
      copyConfig.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axiosAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error);
    const errorStatus = error.response.status;
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem("refreshToken");
    if (errorStatus === 401) {
      try {
        const res = await axios.post("/auth/refresh-token", {
          refreshToken,
        });
        const newAccessToken = res.data.accessToken;
        const newRefreshToken = res.data.refreshToken;
        localStorage.setItem("accessToken", newAccessToken);
        localStorage.setItem("setItem", newRefreshToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return await axios(originalRequest);
      } catch (err) {
        alert("토큰 재발급에 실패했습니다. 다시 로그인 해주세요");
        window.location.replace("/login");
      }
    }
    return Promise.reject(error);
  }
);
