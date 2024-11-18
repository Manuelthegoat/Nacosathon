require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());
connectDB();

const cors = require("cors");
app.use(cors());

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

const swaggerDocument = JSON.parse(
  fs.readFileSync(path.join(__dirname, "swagger.json"), "utf8")
);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
