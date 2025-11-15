import express from "express"
const router = express.Router()

router.get("/api/users/:id", (_req, res) => {
  res.json({ id: _req.params.id })
})

router.get("/api/posts/:postId/comments/:commentId", (_req, res) => {
  res.json({ postId: _req.params.postId, commentId: _req.params.commentId })
})

export default router
