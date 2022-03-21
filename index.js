const { findAll, create, getById, deleteById, updateById} = require('./lib/services/posts')

async function findAllPosts() {
  try {
    const { data } = await findAll()
    return data 
  } catch (error) {
    console.log(error)
  }
}

async function getPost(id) {
  try {
    const { data } = getById(id) 
    return data
  } catch (error) {
    console.log(error) 
  }
}

async function createPost(data) {
  try {
    const { data } = create(data) 
    return data
  } catch (error) {
    console.log(error) 
  }
}

async function deletePost(id) {
  try {
    const { data } = deleteById(id)
    return data
  } catch (error) {
    console.log(error) 
  }
}

async function updatePost(id, data) {
  try {
    const { data } = updateById(id, data) 
    return data
  } catch (error) {
    console.log(error) 
  }
}
module.exports = { findAllPosts, createPost, getPost, deletePost, updatePost}