import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import User from "./models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"
import multer from "multer"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const uploadMiddleware = multer({ dest: "uploads/" })
// Make require work in es6 type:module;
import { createRequire } from "module"
const require = createRequire(import.meta.url)
const fs = require("fs")
import Post from "./models/Post.js"
const app = express()

// generates a hash for the password
const salt = bcrypt.genSaltSync(10)
const secret = "dad9232jfsdjdadqwds000asbosw236"

// middleware, cors, and json parser
app.use(
  cors({
    origin: "http://localhost:3000", // the origin of your frontend;
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
)
app.use(express.json())
// connect to mongoose database, insert connection string here;
// connection string: mongodb+srv://blog:<Vtf9e6f5O41rpzAR>@cluster0.g1u.mongodb.net/?retryWrites=true&w=majority

app.use(cookieParser())

app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect(
  "mongodb+srv://blog:Vtf9e6f5O41rpzAR@cluster0.g1uznrr.mongodb.net/?retryWrites=true&w=majority"
)

const port = 4000

// creating the post endpoints

// the async await function creates the user in the database;
app.post("/register", async (req, res) => {
  const { username, password } = req.body
  // try creates the user if everything is ok
  try {
    const userDoc = await User.create({
      username,
      // hash password
      password: bcrypt.hashSync(password, salt),
    })
    res.json(userDoc)
  } catch (e) {
    // catch is the response when we have an exception - an error ;
    res.status(400).json(e)
    console.log(e)
  }
})

app.post("/login", async (req, res) => {
  const { username, password } = req.body
  // grab user doc from database ;
  const userDoc = await User.findOne({ username })
  const passOk = bcrypt.compareSync(password, userDoc.password)
  if (passOk) {
    //user logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err
      res.cookie("token", token).json({
        id: userDoc._id,
        username,
      })
    })
  } else {
    // user not logged in
    res.status(400).json("wrong credentials")
  }
})

app.get("/profile", (req, res) => {
  const { token } = req.cookies
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err
    res.json(info)
  })
})

//invalidates the cookie in order to log you out;
app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok")
})

// on submit of new post, we access this, upload the file to uploads
app.post("/post", uploadMiddleware.single("file"), async (req, res) => {
  const { originalname, path } = req.file
  const parts = originalname.split(".")
  const ext = parts[parts.length - 1]
  const newPath = path + "." + ext
  fs.renameSync(path, newPath)

  const { title, summary, content } = req.body
  const postDoc = await Post.create({
    title,
    summary,
    content,
    cover: newPath,
  })
  res.json({ postDoc })
})

app.get("/post", async (req, res) => {
  res.json(await Post.find())
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
