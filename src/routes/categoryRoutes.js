const express = require('express');
const router = express.Router();
router.get('/', (req, res) => res.json({ msg: 'Categorias OK' }));
module.exports = router;
