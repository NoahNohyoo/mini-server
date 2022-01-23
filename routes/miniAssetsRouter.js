const express = require("express");
const router = express.Router();
const MiniAssets = require("../schemas/miniAssets");

// retrieve assets
router.post("/retrieveAssets", async (req, res) => {
    try {
        await MiniAssets.findOne({ userSeq: req.body.userSeq }, async (err, assets) => {
            if (err) {
                console.log(err);
            } else {
                console.log(assets);
                res.json({ message: assets });
            }
        });
    } catch (err) {
        console.log(err);
        res.json({ message: false });
    }
});

module.exports = router;
