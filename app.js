const express = require("express");
const app = express();
const userRouter = require("./Router/UserRouter");
const orgRouter = require("./Router/OrgRouter");
const checkupRouter = require("./Router/CheckupRouter");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/org", orgRouter);
app.use("/reports", checkupRouter);

module.exports = app;
