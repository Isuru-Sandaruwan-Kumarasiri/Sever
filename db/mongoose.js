const mongoose = require("mongoose");

const monogdbURL =
  "";

mongoose.connect(monogdbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection
mongoose.set('strictQuery', true);

connection.once("open",()=>{
    console.log("MongoDB connected!")
})