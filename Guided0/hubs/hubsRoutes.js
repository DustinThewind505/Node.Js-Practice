const express = require('express');

let hubs = [
    {
        id: 1,
        name: 'A',
        lessonId: 11,
        cohort: 'Web27'
    },
    {
        id: 2,
        name: 'B',
        lessonId: 12,
        cohort: 'Web28'
    },
    {
        id: 3,
        name: 'C',
        lessonId: 13,
        cohort: 'Web29'
    },
]

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('<h1>Hubs route</h1>')
})

module.exports = router;
