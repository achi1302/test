const autoresCtrl = {}


const autor = require('../models/autores.js')


autoresCtrl.getAutores = async (req,res) =>
{
    const autores = await autor.find()
    res.json(autores)
}

autoresCtrl.getAutorByID = async (req, res) =>
{
    const Autor = await autor.findById(req.params.id)
    res.send(Autor)
}

autoresCtrl.getNombreDeAutorByID = async (req, res) =>
{
    const Autor = await autor.findById(req.params.id)
    res.send(Autor.nombre)
}

autoresCtrl.getAboutDeAutorByID = async (req, res) =>
{
    const Autor = await autor.findById(req.params.id)
    res.send(Autor.about)
}

autoresCtrl.getLibrosDeAutorByID = async (req, res) =>
{
    const Autor = await autor.findById(req.params.id)
    res.send(Autor.libros)
}

autoresCtrl.createAutor = async (req, res) => 
{
    const newAutor =  new autor(req.body);
    await newAutor.save();
    //console.log(newGrupo);
    res.send({message: 'Se agrego un nuevo autor'})
}

autoresCtrl.deleteAutor = async (req, res) => 
{
    const autorId = await autor.findByIdAndDelete(req.params.id)
    res.send({message: 'Autor Eliminado', autorId})
}

autoresCtrl.updateAutor = async (req, res) => 
{
    const autorId = await autor.findByIdAndUpdate(req.params.id, req.body)
    res.send({message: 'Autor Actualizado', autorId})
}


module.exports = autoresCtrl;