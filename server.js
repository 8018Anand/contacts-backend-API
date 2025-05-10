const express = require("express");
const dotenv = require("dotenv").config();
const process = require("process");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

connectDb();
const app = express();

const port = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   console.log("hey");
//   console.log(require("./routes/contactRoutes"));
//   res.send("hello");
//   res.end();
// });

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is runnig on port ${port}`);
});
