const mongoose = require ('mongoose')

RecetaSchema = new mongoose.Schema ({
    Nombre: 'string',
    Ingredientes: {
        tipo:['string']
    },
    Receta: 'string', 
    Menu: {
        tipo: ['string'],
        enum: ['Entrantes', 'Principales', 'Ensaladas', 'Postres']
    },
    Alérgenos: {
        tipo: ['string'],
        enum: ['Lácteos, Huevos, Gluten, Mariscos, Vegano']
    }
})

const Receta = mongoose.model('Receta', RecetaSchema);

module.exports = Receta;