const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const equipmentSchema = new Schema({
    name: String,
    image: String,
    category: String,
    price:Number,});

    const Equipment = mongoose.model("Equipment",equipmentSchema);
    module.exports = Equipment;