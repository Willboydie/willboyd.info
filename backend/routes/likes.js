const express = require('express');
const { getLikes, updateLikes } = require('../controllers/likesController')

const router = express.Router()

// allow access to the likes api with all method types and headers
router.use('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*")
    next();
   });

router.get('/', getLikes);

router.patch('/', updateLikes)

module.exports = router;