import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

// const token = JSON.parse(localStorage.getItem('token')) ? JSON.parse(localStorage.getItem('token')) : '.';


export const login = (data) => {
   return axios.post(baseUrl + "/login", data);
};

export const register = (data) => {
   return axios.post(baseUrl + "/register", data);
};

export const forum = (data) => {
   return axios.get(baseUrl + "/forums", data);
 };

 export const forumSingle = (id,data) => {
   return axios.get(baseUrl + "/forums/"+`${id}`, data);
};


 export const postForum = (data) => {
    return axios.post(baseUrl + "/forums", data);
 };

 export const adviceAll = (data) => {
    return axios.get(baseUrl + "/advices", data);
 };

 export const postAdvice = (data,headers) => {
   
    return axios.post(baseUrl + "/advices", data, headers);
 };

 export const getUser = (data) => {
   return axios.get(baseUrl + "/users", data);
};
