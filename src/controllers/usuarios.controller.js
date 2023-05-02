const usuariosCtrl = {}


const usuario = require('../models/usuarios.js')


usuariosCtrl.getUsuarios = async (req,res) =>
{
    const usuarios = await usuario.find()
    res.json(usuarios)
}

usuariosCtrl.getUsuarioByID = async (req, res) =>
{
    const Usuario = await usuario.findById(req.params.id)
    res.send(Usuario)
}

usuariosCtrl.getUsernameByID = async (req, res) =>
{
    const Usuario = await usuario.findById(req.params.id)
    res.send(Usuario.username)
}

usuariosCtrl.getReviewsdeUsuarioByID = async (req, res) =>
{
    const Usuario = await usuario.findById(req.params.id)
    res.send(Usuario.reviews)
}

usuariosCtrl.getGruposdeUsuarioByID = async (req, res) =>
{
    const Usuario = await usuario.findById(req.params.id)
    res.send(Usuario.grupos)
}

usuariosCtrl.getFriendsdeUsuarioByID = async (req, res) =>
{
    const Usuario = await usuario.findById(req.params.id)
    res.send(Usuario.friends)
}

usuariosCtrl.getWantToReaddeUsuarioByID = async (req, res) =>
{
    const Usuario = await usuario.findById(req.params.id)
    res.send(Usuario.WantToRead)
}

usuariosCtrl.getActivitydeUsuarioByID = async (req, res) =>
{
    const Usuario = await usuario.findById(req.params.id)
    res.send(Usuario.activity)
}

usuariosCtrl.createUsuario = async (req, res) => 
{
    const newUsuario =  new usuario(req.body);
    await newUsuario.save();
    //console.log(newGrupo);
    res.send({message: 'Se agrego un nuevo usuario'})
}

usuariosCtrl.updateUsuario = async (req, res) => 
{
    const usuarioId = await usuario.findByIdAndUpdate(req.params.id, req.body)
    res.send({message: 'Usuario Actualizado', usuarioId})
}

usuariosCtrl.deleteUsuario = async (req, res) => 
{
    const usuarioId = await usuario.findByIdAndDelete(req.params.id)
    res.send({message: 'Usuario Eliminado', usuarioId})
}

module.exports = usuariosCtrl;