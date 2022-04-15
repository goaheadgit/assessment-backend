let kittens = require('./db.json')
let globalID = 11

module.exports = {
    adoptKitten: (req, res) => {
        
        res.status(200).send(kittens)
    },
    abandonKitten: (req, res) => {
        let index = kittens.findIndex(elem => elem.id === +req.params.id);
        kittens.splice(index, 1);
        res.status(200).send(kittens);
    },
    breedKitten: (req, res) => {
        const {name, gender, cuddleability, breed, imageURL} = req.body;
        let newKitten = {
            id: globalID,
            name,
            gender,
            cuddleability,
            breed,
            imageURL
        }
        kittens.push(newKitten);
        globalID++;
        res.status(200).send(kittens)
    },
    renameKitten: (req, res) => {
        const {id} = req.params;
        const {type} = req.body;
        let index = kittens.findIndex(elem => +elem.id === +id);
        console.log(type);
        kittens[index].name = input
    }
}