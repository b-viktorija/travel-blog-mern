import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import User from "./models/User.js"

const app = express()

// middleware, cors, and json parser
app.use(cors())
app.use(express.json())
// connect to mongose database, insert connection string here;
// connection string: mongodb+srv://blog:<Vtf9e6f5O41rpzAR>@cluster0.g1uznrr.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(
  "mongodb+srv://blog:Vtf9e6f5O41rpzAR@cluster0.g1uznrr.mongodb.net/?retryWrites=true&w=majority"
)

const port = 4000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

// the async await function creates the user in the database;
app.post("/register", async (req, res) => {
  const { username, password } = req.body
  // try creates the user if everything is ok 
  try {
    const userDoc = await User.create({
      username,
      password,
    })
    res.json(userDoc)
  } 
  // catch is the response when we have an exception - an error ;  
  catch (e) {
    res.status(400).json(e)
  }
})
