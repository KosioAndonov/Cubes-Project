const router = require('express').Router();
const cubeManager = require('../manager/cubeManager')


router.get('/', async (req, res) => {
    const {search, from , to} = req.query;

    const cubes = await cubeManager.getAll(search, from , to); 
    res.render('index', {cubes, search, from , to} )
})

router.get('/about',(req,res)=>{
    res.render('about');
})


router.get('/deatails',(req,res)=>{
    res.render('details');
})


module.exports = router;