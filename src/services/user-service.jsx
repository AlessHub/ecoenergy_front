import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const login = (data) => {
  return axios.post(baseUrl + "/login", data);
};

export const register = (data) => {
  return axios.post(baseUrl + "/register", data);
};

export const logout = (data,headers) => {
  return axios.post(baseUrl + "/logout", data, headers);
};

export const userSingle = (user_id, headers) => {
  return axios.get(baseUrl + "/user/" + `${user_id}`, headers);
};

export const forum = (data, headers) => {
  return axios.get(baseUrl + "/forums", data, headers);
};

export const forumSingle = (id, data) => {
  return axios.get(baseUrl + "/forums/" + `${id}`, data);
};

export const postForum = (data, headers) => {
  return axios.post(baseUrl + "/forums", data, headers);
};

export const deleteForum = (id, data) => {
  return axios.delete(baseUrl + "/forums/" + `${id}`, data);
};

export const adviceAll = (data) => {
  return axios.get(baseUrl + "/advices", data);
};

export const postAdvice = (data, headers) => {
  return axios.post(baseUrl + "/advices", data, headers);
};

export const getAllComment = (data, headers) => {
  return axios.get(baseUrl + "/comments", data, headers);
};

export const postSingleComment = (data, headers) => {
  return axios.post(baseUrl + "/comments", data, headers);
};
