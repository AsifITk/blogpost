const express = require('express');
const article = require('../models/article');
const router = express.Router();
const Article = require('../models/article');



router.get('/', (req, res) => {

    res.send('Articles List');
}
)
router.post('/add', async (req, res) => {

    // res.send('<h1>Hello World</h1 > ');

    console.log(req.body);
    const article = new Article({
        title: req.body.title,
        name1: req.body.name1,
        author_name: 'name1',

    });
    await article.save();
    res.redirect('/');



});

module.exports = router;
