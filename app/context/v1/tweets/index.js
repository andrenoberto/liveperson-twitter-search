const express = require('express');

const TweetController = require('./controller');

const router = express.Router();

router.get('/', TweetController.getTweets);

module.exports = router;