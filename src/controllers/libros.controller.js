const librosCtrl = {}


const libro = require('../models/libros.js')


librosCtrl.getLibros = async (req,res) =>
{
    const libros = await libro.find()
    res.json(libros)
}

librosCtrl.createLibro = async (req, res) => 
{
    const newLibro =  new libro(req.body);
    await newLibro.save();
    //console.log(newLibro);
    res.send({message: 'Se agrego un nuevo libro'})
}

librosCtrl.getLibroByID = async (req, res) =>
{
    const Libro = await libro.findById(req.params.id)
    res.send(Libro)
}

librosCtrl.getNameByID = async (req, res) =>
{
    const Libro = await libro.findById(req.params.id)
    res.send(Libro.name)

}

librosCtrl.getAutorByID = async (req, res) =>
{
    const Libro = await libro.findById(req.params.id)
    res.send(Libro.autor)

}

librosCtrl.getAutorDescripcionByID = async (req, res) =>
{
    const Libro = await libro.findById(req.params.id)
    res.send(Libro.autor_descripcion)

}

librosCtrl.getDescripcionByID = async (req, res) =>
{
    const Libro = await libro.findById(req.params.id)
    res.send(Libro.descripcion)

}

librosCtrl.getBundlesByID = async (req, res) =>
{
    const Libro = await libro.findById(req.params.id)
    res.send(Libro.bundle)

}

librosCtrl.getScoreByID = async (req, res) =>
{
    const Libro = await libro.findById(req.params.id)
    res.send(Libro.score)

}

librosCtrl.getGenresByID = async (req, res) =>
{
    const Libro = await libro.findById(req.params.id)
    res.send(Libro.genres)

}

librosCtrl.getPaginasByID = async (req, res) =>
{
    const Libro = await libro.findById(req.params.id)
    res.send(Libro.paginas)

}

librosCtrl.getFechaByID = async (req, res) =>
{
    const Libro = await libro.findById(req.params.id)
    res.send(Libro.fecha)

}

librosCtrl.getRelatedByID = async (req, res) =>
{
    const Libro = await libro.findById(req.params.id)
    res.send(Libro.relatedTo)

}

librosCtrl.getFollowersByID = async (req, res) =>
{
    const Libro = await libro.findById(req.params.id)
    res.send(Libro.followers)

}


librosCtrl.getResena1ByID = async (req, res) =>
{
    const Libro = await libro.findById(req.params.id)
    res.send(Libro.resena1)

}

librosCtrl.getResena1NombreByID = async (req, res) =>
{
    const Libro = await libro.findById(req.params.id)
    res.send(Libro.resena1_nom)

}

librosCtrl.getResena1RatingByID = async (req, res) =>
{
    const Libro = await libro.findById(req.params.id)
    res.send(Libro.resena1_rating)

}

librosCtrl.getResena1NumeroByID = async (req, res) =>
{
    const Libro = await libro.findById(req.params.id)
    res.send(Libro.resena1_num)

}


librosCtrl.getResena2ByID = async (req, res) =>
{
    const Libro = await libro.findById(req.params.id)
    res.send(Libro.resena2)

}

librosCtrl.getResena2NombreByID = async (req, res) =>
{
    const Libro = await libro.findById(req.params.id)
    res.send(Libro.resena2_nom)

}

librosCtrl.getResena2RatingByID = async (req, res) =>
{
    const Libro = await libro.findById(req.params.id)
    res.send(Libro.resena2_rating)

}

librosCtrl.getResena2NumeroByID = async (req, res) =>
{
    const Libro = await libro.findById(req.params.id)
    res.send(Libro.resena2_num)

}



librosCtrl.deleteLibro = async (req, res) => 
{
    const libroId = await libro.findByIdAndDelete(req.params.id)
    res.send({message: 'Libro Eliminado', libroId})
}

librosCtrl.updateLibro = async (req, res) => 
{
    const libroId = await libro.findByIdAndUpdate(req.params.id, req.body)
    res.send({message: 'Libro Actualizado', libroId})
}


module.exports = librosCtrl;