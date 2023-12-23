const Cube = require('../models/Cube');

exports.create = (cubeData) => {
  const newCube = new Cube(cubeData);
  return newCube.save()

}

exports.getAll = async (search, from, to) => {
    let result = await Cube.find().lean();
    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }
    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }
    return result;
}

exports.getOne = (cubeId) => Cube.findById(cubeId);