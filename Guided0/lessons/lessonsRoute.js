const express = require('express');

let lessons = [
    {
        id: 11,
        name: 'Apple',
        cohort: 'Web27'
    },
    {
        id: 12,
        name: 'Banana',
        cohort: 'Web28'
    },
    {
        id: 13,
        name: 'Cherry',
        cohort: 'Web29'
    },
]

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('<h1>Lessons route</h1>')
})

module.exports = router;