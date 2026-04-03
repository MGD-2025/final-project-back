const express = require('express')
const router = express.Router()
const Recetas = require('../models/Recetas.js')
const RecetaController = require('../controllers/RecetaController.js')

router.post("/create", RecetaController.create)
router.get('/', RecetaController.getAll )
router.get('/name/nombre', RecetaController.getByName)
router.get('/id/:id', RecetaController.getById)
router.put('/editar/:_id', RecetaController.updateReceta )
router.delete('/id/:_id', RecetaController.delete )

module.exports = router