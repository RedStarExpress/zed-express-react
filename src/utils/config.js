import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://95.46.96.45:48908/",
    headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
    // 'Content-Type': "application/x-www-form-urlencoded"
    }
});


export const urlFile = "http://95.46.96.45:48908/";
