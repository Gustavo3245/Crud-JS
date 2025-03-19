const { mongoose } = require("mongoose");
const { ConnectMongo } = require("../../Mongo");

const { dotenv } = require("dotenv");
dotenv.config();


beforeAll(async () => {
     //connection code here, with mongoose.
    await ConnectMongo(process.env.MONGO_URI);
});

afterAll(async () => {
    //disconnect code here, with mongoose.
    await mongoose.disconnect();
});