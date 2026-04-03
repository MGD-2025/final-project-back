const mongoose = require ('mongoose')

RecetaSchema = new mongoose.Schema ({
    Nombre: {
        type: String,
        required: true
    },
    Tipo: {
        enum: ['Entrantes', 'Principales', 'Ensaladas', 'Postres'],
        required: true
    },
    Ingredientes: {
        tipo:[String],
        required: true
    },
    Receta:{
        preparacion: [String],
        required: true
    },
    Alérgenos: {
        tipo: [String],
        enum: ['Lácteos, Huevos, Gluten, Mariscos, Vegano'],
        required: false
    }
})

const Receta = mongoose.model('Receta', RecetaSchema);

module.exports = Receta;