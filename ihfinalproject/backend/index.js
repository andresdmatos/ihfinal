const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { response } = require("express");

console.log("Testing 1,2,3");

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://admindani:admindani@cluster0.i5tvw.mongodb.net/sportStore?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((x) =>
    console.log(`Connected! Database name: ${x.connections[0].name}`)
  )
  .catch(() => console.error("Error connecting to Database"));

app.use(express.json());

app.use(cors());

app.use("/api", require("./routes/routes.js"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`is Listening to port ${PORT}`));
