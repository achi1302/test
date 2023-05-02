const {Router} = require('express');
const router = Router();

const usuariosCtrl = require('../controllers/usuarios.controller')

//Get
router.get('/', usuariosCtrl.getUsuarios);

//GetById
router.get('/:id', usuariosCtrl.getUsuarioByID);

router.get('/:id/username', usuariosCtrl.getUsernameByID);

router.get('/:id/reviews', usuariosCtrl.getReviewsdeUsuarioByID);

router.get('/:id/grupos', usuariosCtrl.getGruposdeUsuarioByID);

router.get('/:id/friends', usuariosCtrl.getFriendsdeUsuarioByID);

router.get('/:id/WantToRead', usuariosCtrl.getWantToReaddeUsuarioByID);

router.get('/:id/activity', usuariosCtrl.getActivitydeUsuarioByID);

//Post
router.post('/', usuariosCtrl.createUsuario);

//Actualizar
router.put('/:id', usuariosCtrl.updateUsuario);

//Delete
router.delete('/:id', usuariosCtrl.deleteUsuario);

module.exports = router;