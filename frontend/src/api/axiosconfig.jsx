import axios from "axios";

const instance = axios.create({
  baseURL: "https://otaku-backend-92hv.onrender.com",
});

export default instance;
