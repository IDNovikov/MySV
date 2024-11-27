require("dotenv").config();
const sequelize = require("./db");
const express = require("express");
const models = require("./models/models");
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middleWare/ErrorHandlingMiddleWare");

app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.json());
app.use("/api", router);

app.get("/test", (req, res) => {
  res.status(200).json({ message: "WORKING" });
});
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {}
};

start();
