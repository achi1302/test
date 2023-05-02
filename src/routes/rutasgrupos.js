const {Router} = require('express');
const router = Router();
//const express = requiere(express);
//const router = express.Router();

const gruposCtrl = require('../controllers/grupos.controller')

//Get
router.get('/', gruposCtrl.getGrupos);

//GetById
router.get('/:id', gruposCtrl.getGrupoByID);

router.get('/:id/nombre', gruposCtrl.getNombreDeGrupoByID);

router.get('/:id/miembros', gruposCtrl.getMiembrosByID);

router.get('/:id/descripcion', gruposCtrl.getDescripcionByID);

//Delete
router.delete('/:id', gruposCtrl.deleteGrupo);

//Actualizar
router.put('/:id', gruposCtrl.updateGrupo);

//Post
router.post('/', gruposCtrl.createGrupo);

module.exports = router;