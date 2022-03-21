const axios = require('../config')

const findAll = () => {
  return axios.get("/posts") 
}

const getById = (id) => {
  return axios.get(`/posts/${id}`) 
}

const create = (data) => {
  return axios.post("/posts", data) 
}

const deleteById = (id) => {
  return axios.delete(`/posts/${id}`) 
}

const updateById = (id, data) => {
  return axios.put(`posts/${id}`, data) 
}

module.exports = { findAll, getById, create, deleteById, updateById }