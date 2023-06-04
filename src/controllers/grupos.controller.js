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

gruposCtrl.getMiembro1Nom = async (req, res) =>
{
    const Grupo = await grupo.findById(req.params.id)
    res.send(Grupo.miembro1nom)

}

gruposCtrl.getMiembro1Post = async (req, res) =>
{
    const Grupo = await grupo.findById(req.params.id)
    res.send(Grupo.miembro1post)

}

gruposCtrl.getMiembro1Tit = async (req, res) =>
{
    const Grupo = await grupo.findById(req.params.id)
    res.send(Grupo.miembro1tit)

}

gruposCtrl.getMiembro1Lib = async (req, res) =>
{
    const Grupo = await grupo.findById(req.params.id)
    res.send(Grupo.miembro1lib)

}

gruposCtrl.getMiembro1Group = async (req, res) =>
{
    const Grupo = await grupo.findById(req.params.id)
    res.send(Grupo.miembro1group)

}



gruposCtrl.getMiembro2Nom = async (req, res) =>
{
    const Grupo = await grupo.findById(req.params.id)
    res.send(Grupo.miembro2nom)

}

gruposCtrl.getMiembro2Post = async (req, res) =>
{
    const Grupo = await grupo.findById(req.params.id)
    res.send(Grupo.miembro2post)

}

gruposCtrl.getMiembro2Tit = async (req, res) =>
{
    const Grupo = await grupo.findById(req.params.id)
    res.send(Grupo.miembro2tit)

}

gruposCtrl.getMiembro2Lib = async (req, res) =>
{
    const Grupo = await grupo.findById(req.params.id)
    res.send(Grupo.miembro2lib)

}

gruposCtrl.getMiembro2Group = async (req, res) =>
{
    const Grupo = await grupo.findById(req.params.id)
    res.send(Grupo.miembro2group)

}

gruposCtrl.getMiembro3Nom = async (req, res) =>
{
    const Grupo = await grupo.findById(req.params.id)
    res.send(Grupo.miembro3nom)

}

gruposCtrl.getMiembro3Post = async (req, res) =>
{
    const Grupo = await grupo.findById(req.params.id)
    res.send(Grupo.miembro3post)

}

gruposCtrl.getMiembro3Tit = async (req, res) =>
{
    const Grupo = await grupo.findById(req.params.id)
    res.send(Grupo.miembro3tit)

}

gruposCtrl.getMiembro3Lib = async (req, res) =>
{
    const Grupo = await grupo.findById(req.params.id)
    res.send(Grupo.miembro3lib)

}

gruposCtrl.getMiembro3Group = async (req, res) =>
{
    const Grupo = await grupo.findById(req.params.id)
    res.send(Grupo.miembro3group)

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