import express from "express"
import createError from "http-errors"

const app = express()

//CORS Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
    return res.status(200).json({})
  }

  next()
})

app.use(express.json())

app.get("/", (_req, res) => {
  res.send("Welcome to My Vercel project!")
})

app.get("/api/users/:id", (_req, res) => {
  res.json({ id: _req.params.id })
})

app.get("/api/posts/:postId/comments/:commentId", (_req, res) => {
  res.json({ postId: _req.params.postId, commentId: _req.params.commentId })
})

app.use(function (req, res, next) {
  next(createError(404))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})

export default app
