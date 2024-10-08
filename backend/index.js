const expres = require("express");
const dbConnect = require("./config/dbConnect");
const app = expres();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoutes");
const productRouter = require("./routes/productRoutes");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

// const associates = re;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("tiny"));

dbConnect();
app.use("/api/user", authRouter);
app.use("/api/product", productRouter);

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
