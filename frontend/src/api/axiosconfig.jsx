import axios from "axios";


const instance = axios.create({
    baseURL : import.meta.env.PROD
    ? "https://otaku-backend-92hv.onrender.com"
    : "http://localhost:3000",
})

export default instance