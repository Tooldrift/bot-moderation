const mongoose = require("mongoose");
const config = require("./config");

mongoose.connect("mongodb+srv://Rage:DavideNoWay07.@cluster0.tjljrkd.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("[✅ DataBase] Connected!");
});
module.exports = mongoose;
