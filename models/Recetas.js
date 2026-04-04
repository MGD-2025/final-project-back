const mongoose = require ('mongoose')

RecetaSchema = new mongoose.Schema ({
    Nombre: {
        type: String,
        required: true
    },
    Orden: {
        type: [String],
        enum: ['Entrantes', 'Principales', 'Ensaladas', 'Postres'],
        required: true
    },
    Ingredientes: {
        type:[String],
        required: true
    },
    Receta:{
        type: [String],
        required: true
    },
    Alergenos: {
        type: [String],
        enum: ['Lácteos', 'Huevos', 'Gluten', 'Mariscos', 'Vegano'],
        required: false
    }
})

const Receta = mongoose.model('Receta', RecetaSchema);

module.exports = Receta;