import express from "express"
import { createClient } from "@supabase/supabase-js"
//import { getShoes } from "../controllers/catalogController.js"
const router = express.Router()

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

router.get("/:id", (_req, res) => {
  res.json({ id: _req.params.id })
})

router.get("/", async (req, res, next) => {
  if (!supabase) {
    return res.status(500).send("server connection failed")
  }

  const { data, error } = await supabase.from("shoes").select("*")

  if (error) {
    return res.status(500).send(error)
  }

  return res.send(data)
})

router.get("/:postId/comments/:commentId", (_req, res) => {
  res.json({ postId: _req.params.postId, commentId: _req.params.commentId })
})

export default router
