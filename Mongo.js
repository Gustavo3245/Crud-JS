const mongoose = require('mongoose');

async function ConnectMongo(uri) {

    await mongoose.connect(uri)
    .then(() => {
        console.log("Connect to database!");
    })
    .catch((error) => {
        console.log("Connect failed", error);
    })
    
}

module.exports = { ConnectMongo };