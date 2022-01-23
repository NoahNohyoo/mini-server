const express = require("express");
const router = express.Router();
const MiniTrade = require("../schemas/miniTrade");
const MiniAssets = require("../schemas/miniAssets");

// buying
router.post("/buy", async (req, res) => {
    try {
        await MiniAssets.findOne({ userSeq: req.body.userSeq }, async (err, assets) => {
            if (err) {
                console.log(err);
            } else {
                console.log(assets);
                console.log(req.body.symbol);
                console.log(req.body.quantity);

                switch (req.body.symbol) {
                    case "BTC":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    btc: assets.btc + req.body.quantity,
                                    usd: assets.usd - req.body.amount
                                }
                            }
                        );
                        break;
                    case "ETH":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    eth: assets.eth + req.body.quantity,
                                    usd: assets.usd - req.body.amount
                                }
                            }
                        );
                        break;
                    case "BNB":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    bnb: assets.bnb + req.body.quantity,
                                    usd: assets.usd - req.body.amount
                                }
                            }
                        );
                        break;
                    case "SOL":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    sol: assets.sol + req.body.quantity,
                                    usd: assets.usd - req.body.amount
                                }
                            }
                        );
                        break;
                    case "ADA":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    ada: assets.ada + req.body.quantity,
                                    usd: assets.usd - req.body.amount
                                }
                            }
                        );
                        break;
                    case "XRP":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    xrp: assets.xrp + req.body.quantity,
                                    usd: assets.usd - req.body.amount
                                }
                            }
                        );
                        break;
                    case "LUNA":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    luna: assets.luna + req.body.quantity,
                                    usd: assets.usd - req.body.amount
                                }
                            }
                        );
                        break;
                    case "DOT":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    dot: assets.dot + req.body.quantity,
                                    usd: assets.usd - req.body.amount
                                }
                            }
                        );
                        break;
                    case "DOGE":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    doge: assets.doge + req.body.quantity,
                                    usd: assets.usd - req.body.amount
                                }
                            }
                        );
                        break;
                    case "MATIC":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    matic: assets.matic + req.body.quantity,
                                    usd: assets.usd - req.body.amount
                                }
                            }
                        );
                        break;
                    case "LINK":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    link: assets.link + req.body.quantity,
                                    usd: assets.usd - req.body.amount
                                }
                            }
                        );
                        break;
                    case "UNI":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    uni: assets.uni + req.body.quantity,
                                    usd: assets.usd - req.body.amount
                                }
                            }
                        );
                        break;
                }
                res.json({ message: 'Succeed' });
            }
        });
    } catch (err) {
        console.log(err);
        res.json({ message: false });
    }
});

// selling
router.post("/sell", async (req, res) => {
    try {
        await MiniAssets.findOne({ userSeq: req.body.userSeq }, async (err, assets) => {
            if (err) {
                console.log(err);
            } else {
                console.log(assets);
                console.log(req.body.symbol);

                switch (req.body.symbol) {
                    case "BTC":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    btc: assets.btc - req.body.quantity,
                                    usd: assets.usd + req.body.amount
                                }
                            }
                        );
                        break;
                    case "ETH":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    eth: assets.eth - req.body.quantity,
                                    usd: assets.usd + req.body.amount
                                }
                            }
                        );
                        break;
                    case "BNB":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    bnb: assets.bnb - req.body.quantity,
                                    usd: assets.usd + req.body.amount
                                }
                            }
                        );
                        break;
                    case "SOL":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    sol: assets.sol - req.body.quantity,
                                    usd: assets.usd + req.body.amount
                                }
                            }
                        );
                        break;
                    case "ADA":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    ada: assets.ada - req.body.quantity,
                                    usd: assets.usd + req.body.amount
                                }
                            }
                        );
                        break;
                    case "XRP":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    xrp: assets.xrp - req.body.quantity,
                                    usd: assets.usd + req.body.amount
                                }
                            }
                        );
                        break;
                    case "LUNA":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    luna: assets.luna - req.body.quantity,
                                    usd: assets.usd + req.body.amount
                                }
                            }
                        );
                        break;
                    case "DOT":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    dot: assets.dot - req.body.quantity,
                                    usd: assets.usd + req.body.amount
                                }
                            }
                        );
                        break;
                    case "DOGE":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    doge: assets.doge - req.body.quantity,
                                    usd: assets.usd + req.body.amount
                                }
                            }
                        );
                        break;
                    case "MATIC":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    matic: assets.matic - req.body.quantity,
                                    usd: assets.usd + req.body.amount
                                }
                            }
                        );
                        break;
                    case "LINK":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    link: assets.link - req.body.quantity,
                                    usd: assets.usd + req.body.amount
                                }
                            }
                        );
                        break;
                    case "UNI":
                        await MiniAssets.updateOne(
                            { userSeq: req.body.userSeq },
                            {
                                $set: {
                                    uni: assets.uni - req.body.quantity,
                                    usd: assets.usd + req.body.amount
                                }
                            }
                        );
                        break;
                }
                res.json({ message: 'Succeed' });
            }
        });
    } catch (err) {
        console.log(err);
        res.json({ message: false });
    }
});


module.exports = router;
