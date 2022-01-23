const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
    Types: { ObjectId }
} = Schema;
const miniTrade = new Schema({
    userSeq: {
        type: String,
        required: true,
        ref: "UserMini"
    },
    tradeNo: {
        type: Number,
        required: true,
    },
    tradeType: {
        type: String,
        required: true,
    },
    tradeStatus: {
        type: String,
        required: true,
    },
    cryptoType: {
        type: String,
        required: true,
    },
    submittedPrice: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    contractedAt: {
        type: Date,
    }
});

module.exports = mongoose.model("MiniTrade", miniTrade);
