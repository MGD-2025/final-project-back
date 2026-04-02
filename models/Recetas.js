const mongoose = require ('mongoose')

RecetaSchema = new mongoose.Schema ({
    Nombre: String,
    Tipo: {
        enum: ['Entrantes', 'Principales', 'Ensaladas', 'Postres']
    },
    Ingredientes: {
        tipo:[String]
    },
    Receta:{
        preparacion: [String],
    },
    Alérgenos: {
        tipo: [String],
        enum: ['Lácteos, Huevos, Gluten, Mariscos, Vegano']
    }
})

const Receta = mongoose.model('Receta', RecetaSchema);

module.exports = Receta;