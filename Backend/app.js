require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./Routes/userRoutes");
const User = require("./Models/user");

const app = express();
const port = 8080;
const mongoUrl = process.env.MONGO_URL;

app.use(express.json());
app.use(express.urlencoded({extended : true}));

async function main() { 
  await mongoose.connect(mongoUrl);
}
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err); 
  });


app.use("/api/users" , userRouter);


app.listen(port , ()=>{
    console.log(`server listening at port ${port}`);
}) 