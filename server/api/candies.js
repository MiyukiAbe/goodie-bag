const router = require('express').Router();

const { Candy } = require('../db')


//Get/api/candies
router.get('/', async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    res.json(candies)
  } catch (err) {
    next(err)
  }
});

//Get/api/candies/:candyId
router.get('/:candyId', async (req, res, next) => {
  try {
    const aCandy = await Candy.findById(req.params.candyId)
    res.json(aCandy)
  } catch (err){
    next(err)
  }
})

//PUT/api/candies/:candyId and below is my solution
router.put('/:candyId', async (req, res, next) => {
  try {
    console.log('im inside api route and receiving request')
    const aCandy = await Candy.findById(req.params.candyId)
    const updatedRow = await aCandy.update(req.body)
    console.log('im inside API just updated row!')
    res.json(updatedRow)
  } catch (error) {
    next(error)
  }
})

//below is Fullstack Academy solution
// router.put('/:id/increase', async (req, res, next) => {
//   try {
//     let candy = await Candy.findById(req.params.id);
//     candy.quantity++;
//     await candy.save();
//     res.json(candy);
//   }
//   catch (err) {
//     next(err);
//   }
// });

// router.put('/:id/decrease', async (req, res, next) => {
//   try {
//     let candy = await Candy.findById(req.params.id);
//     candy.quantity--;
//     await candy.save();
//     res.json(candy);
//   }
//   catch (err) {
//     next(err);
//   }
// });

module.exports = router;