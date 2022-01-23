const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const connect = require("./schemas");

connect();

const corsOptions = {
    origin: true,
    credentials: true
};

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: "miniCrypto",
        cookie: {
            httpOnly: true,
            secure: false
        }
    })
);

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/miniUser", require("./routes/miniUserRouter"));
app.use("/miniAssets", require("./routes/miniAssetsRouter"));
app.use("/miniTrade", require("./routes/miniTradeRouter"));

app.listen(8080, () => {
    console.log("connect port 8080");
});
