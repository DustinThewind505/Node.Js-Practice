const express = require('express');

const router = express.Router();
router.use(express.json());


const plants = [
    {
        id: 1,
        name: 'Mullen'
    }, {
        id: 2,
        name: 'Sun Flower'
    }
]

router.get('/', (req, res) => {
    res.status(200).json(plants)
})

module.exports = router;
