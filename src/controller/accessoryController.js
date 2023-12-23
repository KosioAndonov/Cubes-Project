const router = require('express').Router();
const accessoryManager = require('../manager/accessoryManager');


router.get('/create/accessory', (req,res)=>{
    res.render('accessory/createAccessory');
})

router.post('/create/accessory', async (req,res)=>{
const {name, description, imageUrl} = req.body;

await accessoryManager.create({name, description, imageUrl});

res.redirect('/');

})

module.exports = router;