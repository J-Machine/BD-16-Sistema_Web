const express = require('express');
const router = express.Router();

var listaLibroController = require('../controllers/listaLibrosController');

router.get('/', listaLibroController.list);

module.exports = router;