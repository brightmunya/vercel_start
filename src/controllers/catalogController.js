import express from "express"
import { createClient } from "@supabase/supabase-js"

const router = express.Router()

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

export const getShoes = async (req, res, next) => {
  if (!supabase) {
    return res.status(500).send("server connection failed")
  }

  const { data, error } = await supabase.from("shoes").select("*")

  if (error) {
    return res.status(500).send(error)
  }

  return res.send(data)
}
