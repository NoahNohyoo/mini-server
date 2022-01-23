const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
    Types: { ObjectId }
} = Schema;
const miniAssets = new Schema({
    userSeq: {
        type: String,
        required: true,
        ref: "UserMini"
    },
    usd: {
        type: Number,
        default: 1000000
    },
    btc: {
        type: Number,
        default: 0
    },
    eth: {
        type: Number,
        default: 0
    },
    bnb: {
        type: Number,
        default: 0
    },
    sol: {
        type: Number,
        default: 0
    },
    ada: {
        type: Number,
        default: 0
    },
    xrp: {
        type: Number,
        default: 0
    },
    luna: {
        type: Number,
        default: 0
    },
    dot: {
        type: Number,
        default: 0
    },
    doge: {
        type: Number,
        default: 0
    },
    matic: {
        type: Number,
        default: 0
    },
    link: {
        type: Number,
        default: 0
    },
    uni: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("MiniAssets", miniAssets);
