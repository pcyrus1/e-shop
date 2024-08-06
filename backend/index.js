const expres = require("express");
const dbConnect = require("./config/dbConnect");
const app = expres();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoutes");
const bodyParser = require("body-parser");

// const associates = re;
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

dbConnect();
app.use("/api/user", authRouter);
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
