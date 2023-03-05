import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;


export const login = (data) => {
   return axios.post(baseUrl + "/login", data);
};

export const register = (data) => {
   return axios.post(baseUrl + "/register", data);
};

export const forum = (data) => {
    // const token = localStorage.getItem("token");
    //     const headers = {
    //         "Authorization": `Bearer ${token}`,
    //         "Content-Type": "application/json"
    //       };
    return axios.get(baseUrl + "/forums", data);
 };

 export const postForum = (data) => {
    return axios.post(baseUrl + "/forums", data);
 };

 export const advice = (data) => {
    return axios.get(baseUrl + "/advices", data);
 };

 export const postAdvice = (data) => {
    return axios.post(baseUrl + "/advices", data);
 };