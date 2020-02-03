const express = require('express');
const router = express.Router();

// User model
const Item = require('../../models/user');

// @route GET api/users
// @desc  Register new user
// @access Public
router.post('/', (req, res) => {
    res.send('register');
});

// // @route POST api/items
// // @desc  Post an Item
// // @access Public
// router.post('/', (req, res) => {
//     const newItem = new Item( {
//         name: req.body.name
//     });
//     newItem.save().then(item => res.json(item));
// });

// // @route DELETE api/items/:id
// // @desc  Delete an item
// // @access Public
// router.delete('/:id', (req, res) => {
//     Item.findById(req.params.id)
//     .then(item => item.remove().then(() => res.json({ success: true })))
//     .catch(err => res.status(404).json({success: false}))
// });


module.exports = router;
