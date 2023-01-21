//-------------------------------------Dependencies-------------------------------------
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = 8000;
const connectDB = require("./db/connect");
const AskRouter = require("./routes/routes");

//-------------------------------------Middleware---------------------------------------
app.use(express.json());
app.use(cors());

//-------------------------------------Routes---------------------------------------------
app.use("/ask", AskRouter);

app.get("/", (req, res) => {
  res.json({ msg: "success" });
});

//-------------------------------------Error + Listen-----------------------------------
app.get("/*", (req, res) => {
  res.send("<h1>ERROR!</h1>");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Listening on PORT: ${PORT}`);
    });
  } catch (error) {
    throw new Error(error);
  }
};

start();
