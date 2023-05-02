const gruposCtrl = {}


const grupo = require('../models/grupos.js')


gruposCtrl.getGrupos = async (req,res) =>
{
    const grupos = await grupo.find()
    res.json(grupos)
}

gruposCtrl.createGrupo = async (req, res) => 
{
    const newGrupo =  new grupo(req.body);
    await newGrupo.save();
    //console.log(newGrupo);
    res.send({message: 'Se agrego un nuevo grupo'})
}

gruposCtrl.getGrupoByID = async (req, res) =>
{
    const Grupo = await grupo.findById(req.params.id)
    res.send(Grupo)
}

gruposCtrl.getNombreDeGrupoByID = async (req, res) =>
{
    const Grupo = await grupo.findById(req.params.id)
    res.send(Grupo.nombre)

}

gruposCtrl.getMiembrosByID = async (req, res) =>
{
    const Grupo = await grupo.findById(req.params.id)
    res.send(Grupo.miembros)

}

gruposCtrl.getDescripcionByID = async (req, res) =>
{
    const Grupo = await grupo.findById(req.params.id)
    res.send(Grupo.descripcion)

}

gruposCtrl.deleteGrupo = async (req, res) => 
{
    const grupoId = await grupo.findByIdAndDelete(req.params.id)
    res.send({message: 'Grupo Eliminado', grupoId})
}

gruposCtrl.updateGrupo = async (req, res) => 
{
    const grupoId = await grupo.findByIdAndUpdate(req.params.id, req.body)
    res.send({message: 'Grupo Actualizado', grupoId})
}



module.exports = gruposCtrl;