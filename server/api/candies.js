const router = require('express').Router();

const { Candy } = require('../db')


//Get/api/candies
router.get('/', async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    res.json(candies)
  } catch (err) {
    res.json('Im in the api file', err)
    //next(err)
  }
});

module.exports = router;