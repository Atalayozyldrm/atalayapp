import mongoose from "mongoose";


const entry = new mongoose.Schema({
    title: {
        type: String,
    },
    // date: {
    //     type: Date.now()
    // },
    entry: {
        type: String,
        required: true,
        min: [2, "En az 3 karakter "]
    },
    like: {
        type: Number,
    },
    id: { type: String, },
    token: { type: String },
});

const Entry = mongoose.model("Entry", entry);

export default Entry;
