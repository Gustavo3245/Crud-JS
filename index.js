const { ConnectMongo } = require("./Mongo.js");
const app = require("./Server.js");

require("dotenv").config();

const port = 3000;
const MONGO_USER_NAME = process.env.MONGO_USER_NAME || "root";
const MONGO_USER_PASSWORD = process.env.MONGO_USER_PASSWORD || "example";

const MONGO_URI = "mongodb://${MONGO_USER_NAME}:${MONGO_USER_PASSWORD}@node.q21ql.mongodb.net/?retryWrites=true&w=majority&appName=Node";

ConnectMongo(MONGO_URI);

app.listen(port, () => {
    console.log("Server is running on port ${port}");
})