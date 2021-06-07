const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videosSchema = new Schema({
  name: String,
  image: String,
  category: String,
  price: Number,
});

const Videos = mongoose.model("Videos", videosSchema);
module.exports = Videos;
