const express = require("express");
const app = express();
const articlesRouter = require("./routes/articles");
const mongoose = require("mongoose");
const Articles = require("./models/article");

mongoose
    .connect("mongodb+srv://asif:pass12345@cluster0.mfx8fpf.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.log("Could not connect to MongoDB...", err));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/articles", articlesRouter);
app.set("view engine", "ejs");
app.get("/", async (req, res) => { const articles = await Articles.find(); res.render("index", { articles }); });

app.get("/new", async (req, res) => {
    const articles = await Articles.find();
    console.log(articles)
    res.render("articles", { articles });
});
app.get("/:id", async (req, res) => {
    let id = req.params.id;
    Articles.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect("/");
        } else {
            res.redirect("/");
        }
    });
    // const articles = await Articles.find();
    // console.log(articles)
    // res.render("articles", { articles });
});
app.listen(8000);
// < !--title
// body
// author
// created at-- >
