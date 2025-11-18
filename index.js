import express from "express"
import createError from "http-errors"
import catalogRouter from "./src/routes/catalog.js" // Import routes for "catalog" area of site

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
  res.send("Welcome to My Vercel project v1.0.0.4-1!")
})

app.use("/api/catalog", catalogRouter) // Add catalog routes

app.use(function (req, res, next) {
  next(createError(404))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})

export default app
