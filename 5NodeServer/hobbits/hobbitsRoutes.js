const express = require('express');


const router = express.Router();
router.use(express.json());


let hobbits = [
    {
        id: 1,
        name: 'Frodo',
        race: 'Hobbit'
    },
    {
        id: 2,
        name: 'Sam',
        race: 'Hobbit'
    },
    {
        id: 3,
        name: 'Merry',
        race: 'Hobbit'
    },
    {
        id: 4,
        name: 'Pippen',
        race: 'Hobbit'
    },
]

let nextID = 5


router.get('/', (req, res) => {
    res.json(hobbits)
})

router.get('/:id', (req, res) => {
    const hobbit = hobbits.find(element => element.id === parseInt(req.params.id))

    res.send(hobbit)
})

router.post('/', (req, res) => {
    const hobbit = req.body;
    hobbit.id = nextID++;

    hobbits.push(hobbit);

    res.status(201).json(hobbits);
});

router.put('/:id', (req, res) => {
    const hobbit = hobbits.find(hobbit => hobbit.id === parseInt(req.params.id))

    if(!hobbit){
        res.status(404).json({message: 'Hobbit not found'})
    } else {
        Object.assign(hobbit, req.body);

        res.status(200).json(hobbit)
    }
})

router.delete('/:id', (req, res) => {
    hobbits = hobbits.filter(hobbit => hobbit.id !== parseInt(req.params.id))

    res.send(hobbits)
})


module.exports = router;