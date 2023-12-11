const uniqId = require('uniqid');
const cubes = []

exports.create = (cubeData) => {
    const newCube = {
        id: uniqId(),
        ...cubeData
    }
    cubes.push(newCube);

}

exports.getAll = (search, from, to) => {
    let result = cubes.slice();
    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }
    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }
    return result
}

exports.getOne = (cubeId) => cubes.find(c => c.id == cubeId);