const mongoose = require ('mongoose')

RecetaSchema = new mongoose.Schema ({
    Nombre: String,
    Ingredientes: {
        tipo:[String]
    },
    Receta: String, 
    Menu: {
        tipo: [String],
        enum: ['Entrantes', 'Principales', 'Ensaladas', 'Postres']
    },
    Alérgenos: {
        tipo: [String],
        enum: ['Lácteos, Huevos, Gluten, Mariscos, Vegano']
    }
})

const Receta = mongoose.model('Receta', RecetaSchema);

module.exports = Receta;