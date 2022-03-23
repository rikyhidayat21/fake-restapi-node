# FAKE REST API NODE

## HOW TO INSTALL
```sh
npm i fake-restapi-node
```

## USAGE

```js
import { findAllPosts } from 'fake-restapi-node'
// or
const { findAllPosts } = require('fake-restapi-node')

// express js

app.get('/posts', async (req, res) => {
  try {
    const data = await findAllPosts()
    res.json(data) // will get list of posts
  } catch (error) {
    console.log(error)
  }
})

// react js
useEffect(() => {
  retrievePosts()
}, [])

const retrievePosts = async () => {
  const posts = await findAllPosts()
  return posts
}
```

## Resources
### Post resources

```js
// findAllPosts => get all posts list
// getPost => get post by id
// createPost => create new post
// deletePost => remove post by id
// updatePost => update post by id

const {
  findAllPosts, 
  createPost, 
  getPost, 
  deletePost, 
  updatePost
} = require('fake-restapi-node')


// sample using express js
// findAllPosts
app.get("/posts", async (req, res) => {
  try {
    const data = await findAllPosts()
    res.json(data) // will get list of posts
  } catch (error) {
    console.log(error)
  } 
})

// getPost
app.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params
    const data = await getPost(id)
    res.json(data) // will get post by id 
  } catch (error) {
    console.log(error)
  }
})

```