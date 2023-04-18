const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");

console.log('database',"ecommerce");

mongoose
  .connect("mongodb://mongodb:27017/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() =>
    console.log(
      "==============Mongodb Database Connected Successfully=============="
    )
  )
  .catch((err) => console.log("Database Not Connected !!!"));

app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors('*'));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/hello',(req,res)=>{
  res.send("hello world");
})

app.use("/api", authRouter);

app.use("/api/user", usersRouter);

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
console.log("Server is running on ", PORT);
});
