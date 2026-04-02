const Receta = require ('../models/Recetas')

const RecetaController = {
  async create (req, res) {
    try {
        const receta = await Receta.create({...req.body})
        res.status(201).send(receta)
    } catch (error) {
      console.log(error)
    }
  },
  async getAll (req, res) {
    try {
        const receta = await Receta.find();
        res.json(receta);
    } catch (error) {
        console.log(error)
    }
  },
  async getByName (req, res) {
    try {
      const name = req.params.nombre;
      const receta = await Receta.findByName(name);
      res.json(receta)
    } catch (error) {
        console.log(error)
    }
  },
async updateReceta (req, res) {
  try {
    const id = req.params._id;
    const updateReceta = await Receta.findByIdAndUpdate(
      id,
      req.body,
      { new: true });
      
    if (!updateReceta) {
      return res.status(404).json({ message: 'Receta NO encontrada' });
    }

    res.json({message: 'Receta ACTUALIZADA correctamente', updateReceta});
  } catch (error) {
    console.log(error);
  }
},
  async delete (req, res) {
    try {
      const id = req.params._id
      const deleteReceta = await Receta.findByIdAndDelete(id)
      if (!deleteReceta) {
        return res.status(404).json({message: 'Receta NO encontrada'})
      }  
      res.json({message: 'Receta ELIMINADA correctamente', deleteReceta})
    } catch (error) {
        console.log(error)
    }
}

}

module.exports = RecetaController