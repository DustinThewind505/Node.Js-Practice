// ========== IMPORTS ==========
const express = require('express');
const morgan = require('morgan');
const { sodas } = require('../database');


// ========== ROUTER ==========
const router = express.Router();
router.use(morgan('tiny'));

router.get('/', (req, res) => {
    res.status(200).json(sodas)
})

module.exports = router;
