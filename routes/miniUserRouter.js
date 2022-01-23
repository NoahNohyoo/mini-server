const express = require("express");
const router = express.Router();
const MiniUser = require("../schemas/miniUser");
const MiniAssets = require("../schemas/miniAssets");
const crypto = require("crypto");

// join
router.post("/join", async (req, res) => {
    try {
        let obj = { email: req.body.email };

        let user = await MiniUser.findOne(obj);
        console.log(user);

        if (user) {
            res.json({
                message: "Duplicate email. Please enter a new email.",
                dupYn: "1"
            });
        } else {
            crypto.randomBytes(64, (err, buf) => {
                if (err) {
                    console.log(err);
                } else {
                    crypto.pbkdf2(
                        req.body.password,
                        buf.toString("base64"),
                        100000,
                        64,
                        "sha512",
                        async (err, key) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log(key.toString("base64"));
                                buf.toString("base64");
                                obj = {
                                    userSeq: Date.now() + parseInt(Math.random() * 1000000),
                                    email: req.body.email,
                                    name: req.body.name,
                                    password: key.toString("base64"),
                                    salt: buf.toString("base64")
                                };
                                user = new MiniUser(obj);
                                await user.save();
                                assets = new MiniAssets(obj); // create assets
                                await assets.save();
                                res.json({ message: "Registered!", dupYn: "0" });
                            }
                        }
                    );
                }
            });
        }
    } catch (err) {
        console.log(err);
        res.json({ message: false });
    }
});

// login
router.post("/login", async (req, res) => {
    try {
        //이메일 값으로 아이디가 존재하는지 확인
        await MiniUser.findOne({ email: req.body.email }, async (err, user) => {
            if (err) {
                console.log(err);
            } else {
                console.log(user);
                if (user) {
                    //아이디가 존재할 경우 이메일과 패스워드가 일치하는 회원이 있는지 확인
                    console.log(req.body.password);
                    crypto.pbkdf2(
                        req.body.password,
                        user.salt,
                        100000,
                        64,
                        "sha512",
                        async (err, key) => {
                            if (err) {
                                console.log(err);
                            } else {
                                // console.log(key.toString('base64')); // 'dWhPkH6c4X1Y71A/DrAHhML3DyKQdEkUOIaSmYCI7xZkD5bLZhPF0dOSs2YZA/Y4B8XNfWd3DHIqR5234RtHzw=='
                                const obj = {
                                    email: req.body.email,
                                    password: key.toString("base64")
                                };
                                const user2 = await MiniUser.findOne(obj);
                                console.log(user2);
                                if (user2) {
                                    // 있으면 로그인 처리
                                    // console.log(req.body._id);
                                    req.session.email = user.email;
                                    res.json({
                                        message: "log-in succeed!",
                                        _id: user2._id,
                                        userSeq: user2.userSeq,
                                        name: user2.name,
                                        email: user2.email
                                    });
                                } else {
                                    res.json({
                                        message: "Email or Password does not match."
                                    });
                                }
                            }
                        }
                    );
                } else {
                    res.json({ message: "Email or Password does not match." });
                }
            }
        });
    } catch (err) {
        console.log(err);
        res.json({ message: "log-in failed" });
    }
});

router.get("/logout", (req, res) => {
    console.log("/logout" + req.sessionID);
    req.session.destroy(() => {
        res.json({ message: true });
    });
});

router.post("/delete", async (req, res) => {
    try {
        await MiniUser.remove({
            _id: req.body._id
        });
        res.json({ message: true });
    } catch (err) {
        console.log(err);
        res.json({ message: false });
    }
});

router.post("/update", async (req, res) => {
    try {
        await MiniUser.updateOne({
            _id: req.body._id,
            name: req.body.name
        });
        res.json({ message: true });
    } catch (err) {
        console.log(err);
        res.json({ message: false });
    }
});

router.post("/add", async (req, res) => {
    try {
        const user = new MiniUser(req.body);
        await user.save();
        res.json({ message: true });
    } catch (err) {
        console.log(err);
        res.json({ message: false });
    }
});

router.post("/getAllMember", async (req, res) => {
    try {
        const user = await MiniUser.find({});
        res.json({ message: user });
    } catch (err) {
        console.log(err);
        res.json({ message: false });
    }
});

module.exports = router;
