const mongoose = require("mongoose");

module.exports = () => {
    const connect = () => {
        if (process.env.NODE_ENV !== "production") {
            mongoose.set("debug", true);
        }
        mongoose.connect(
            "mongodb+srv://",
            {
                dbName: ""
            },
            error => {
                if (error) {
                    console.log("Connection Error MongoDB", error);
                } else {
                    console.log("Connection succeed MongoDB");
                }
            }
        );
    };
    connect();
    mongoose.connection.on("error", error => {
        console.log("Connection Error MongoDB", error);
    });
    mongoose.connection.on("disconnected", () => {
        console.log("Disconnected MongoDB. Try to reconnect");
        connect();
    });
    require("./miniUser");
    require("./miniAssets");
    require("./miniTrade");
};
