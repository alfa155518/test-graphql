const mongoose = require("mongoose");
const express = require("express");
const app = express();
const https = require("https");
const fs = require("fs");
const schema = require("./graphql/schema");
const { createHandler } = require("graphql-http/lib/use/express");
const { graphqlHTTP } = require("express-graphql");

const cors = require("cors");
require("dotenv").config();

app.use(cors());

app.use(express.json());
// const userRouter = require("./route/user");
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

// ! Fore express-graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

const privateKey = fs.readFileSync("server.key");
const certificate = fs.readFileSync("server.cert");

// app.all(
//   "/graphql",
//   createHandler({
//     schema: schema,
//     graphiql: true,
//   })
// );

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// https.createServer({ key: privateKey, cert: certificate }, app).listen(port);
