const mongoose = require("mongoose");

const PersonSchema = mongoose.Schema(
    {
        name: {
            type: String,
            default: "Person Name",
            required: [true, "Please, Enter Person Name"],
            trim: true
        },
        age: {
            type: Number,
            default: 0,
            required: [true, "Please, Enter Person Age"],
            min: 0,
            max: 120
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        },
        Adress: {
            
        },
        CellPhone: {
            type: String,
            required: true,
            match: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
        }
    },
    
    {
        timestamps: true,
    }
)

const Person = mongoose.model("Person", PersonSchema);
module.exports(Person);