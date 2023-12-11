const router = require('express').Router();
const homeController = require('./controller/homeController');
const cubeController = require('./controller/cubeController');

router.use(homeController);
router.use('/cubes',cubeController);
router.get('*',(req,res) => res.render('404'))

module.exports = router;
