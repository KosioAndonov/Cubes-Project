const router = require('express').Router();
const cubeManager = require('../manager/cubeManager');
const accessoriesManager = require('../manager/accessoryManager');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const { name,
        description,
        imageUrl,
        difficultyLevel } = req.body;

    await cubeManager.create({
        name,
        description,
        imageUrl,
        difficultyLevel : Number(difficultyLevel)
    });

    res.redirect('/');
});

router.get('/:cubeId/details', async (req, res) => {
    const cube = await cubeManager.getOneWithAccessories(req.params.cubeId).lean();
    res.render('detailsPage', {cube});
});

router.get('/attach-accessory/:cubeId', async (req,res)=>{
    const cube = await cubeManager.getOneWithAccessories(req.params.cubeId).lean();
    const accessories = await accessoriesManager.getOthers(cube.accessories).lean();
    const hasAccessories = accessories.length > 0;
    res.render('accessory/attachAccessory',{cube, accessories,hasAccessories})
});

router.post('/attach-accessory/:cubeId', async (req,res)=>{
    const {accessory: accessoryId} = req.body;
    const cubeId = req.params.cubeId;
    
    await cubeManager.attachAccessory(cubeId, accessoryId);

    res.redirect(`/cubes/${cubeId}/details`);


})

module.exports = router;
