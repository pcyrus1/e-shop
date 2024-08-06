const expres = require("express");
const dbConnect = require("./config/");
const app = expres();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;

dbConnect();
app.use("/", (req, res) => {
  res.send("Hello guysss");
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
