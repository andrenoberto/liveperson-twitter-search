const express = require('express');

const { TwitterService } = require('../../../services');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { query } =  req;
    const result = await TwitterService.searchTweets(query);
    res.json(result);
  } catch(err) {
    console.error(err);
    res.status(500).end();
  }
});

module.exports = router;