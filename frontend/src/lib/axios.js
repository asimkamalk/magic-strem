import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // Still useful for other cookies if any
});

// Intercept requests to attach the Clerk token for cross-domain authentication
axiosInstance.interceptors.request.use(async (config) => {
  try {
    // Access the Clerk instance attached to the window object
    if (window.Clerk && window.Clerk.session) {
      const token = await window.Clerk.session.getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
  } catch (error) {
    console.error("Error fetching Clerk token:", error);
  }
  return config;
});

export default axiosInstance;
