const axios = require('../config')

const postFindAll = async () => {
  try {
    const { data } = await axios.get("/posts")
    return data
  } catch (error) {
    console.log(error.message, '<== error message') 
  }
}

const postFindById = async (id) => {
  try {
    const { data } = await axios.get(`/posts/${id}`)
    return data
  } catch (error) {
    console.log(error.message, '<== error message') 
  }
}

const postCreate = async (data) => {
  try {
    const createdPost = await axios.post("/posts", data) 
    return createdPost
  } catch (error) {
    console.log(error.message, '<== error message') 
  }
}

const postDelete = async (id) => {
  try {
    const deletedPost = await axios.delete(`/posts/${id}`) 
    return deletedPost
  } catch (error) {
    console.log(error.message, '<== error message') 
  }
}

const postUpdate = async (id, data) => {
  try {
    const updatedPost = await axios.put(`/posts/${id}`, data) 
    return updatedPost
  } catch (error) {
    console.log(error.message, '<== error message') 
  }
}

module.exports = { postFindAll, postFindById, postCreate, postDelete, postUpdate }