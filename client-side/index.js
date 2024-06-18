const express = require('express');
const app = express();
const cors = require('cors');
const blogs = require('./api/blogsData.json');

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Blog server is running!");
});

app.get('/blogs', (req, res) => {
  res.send(blogs);
})
app.get('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  // console.log(id)
  const blog = blogs.filter(b => b.id === id);
  // console.log(blog)
  res.send(blog)
})

app.listen(8000, () => {
  console.log(`Example app listening on port 8000`);
})