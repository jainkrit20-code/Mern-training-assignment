const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();


app.use(cookieParser());
app.use(express.json());

const connectDB = require("./Db");
connectDB();


const userRoute = require("./Project/Routes/UserRoutes");
const productRoute = require("./Project/Routes/ProductRoutes");

app.use("/user", userRoute);
app.use("/product", productRoute);


const PORT = 3000;


app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});