const router = require('express').Router();
const homeController = require('./controller/homeController');
const cubeController = require('./controller/cubeController');
const accessoryController = require('./controller/accessoryController');

router.use(homeController);
router.use('/cubes',cubeController);
router.use(accessoryController);
router.get('*',(req,res) => res.render('404'));

module.exports = router;
