const express = require('express');
const morgan = require('morgan');


const router = express.Router();
router.use(express.json());

function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('Origin')}`);
    next();
}

function atTheGates(req, res, next) {
    console.log('At the gates about to be eaten');
    next();
}

function auth(req, res, next) {
    if(req.url === '/mellon') {
        next();
    } else {
        res.send('<h1>You shall not pass</h1>')
    }
}

router.use(morgan('tiny'))
router.use(atTheGates)


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

router.get('/mellon', auth, (req, res) => {
    console.log('Speak friend and open gate');
    console.log('Inside and safe');
    res.send('<h1>Welcome Traveler</h1>');
})


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