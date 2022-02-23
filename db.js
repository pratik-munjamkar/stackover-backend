const mongoose = require("mongoose");

const url =
  "mongodb+srv://pra-tik_06:pratik123@cluster0.nwcyp.mongodb.net/StackOverFlow?retryWrites=true&w=majority";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};