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


//newnew
router.get('/:id/miembro1nom', gruposCtrl.getMiembro1Nom);
router.get('/:id/miembro1post', gruposCtrl.getMiembro1Post);
router.get('/:id/miembro1lib', gruposCtrl.getMiembro1Lib);
router.get('/:id/miembro1group', gruposCtrl.getMiembro1Group);
router.get('/:id/miembro1tit', gruposCtrl.getMiembro1Tit);

router.get('/:id/miembro2nom', gruposCtrl.getMiembro2Nom);
router.get('/:id/miembro2post', gruposCtrl.getMiembro2Post);
router.get('/:id/miembro2lib', gruposCtrl.getMiembro2Lib);
router.get('/:id/miembro2group', gruposCtrl.getMiembro2Group);
router.get('/:id/miembro2tit', gruposCtrl.getMiembro2Tit);

router.get('/:id/miembro3nom', gruposCtrl.getMiembro3Nom);
router.get('/:id/miembro3post', gruposCtrl.getMiembro3Post);
router.get('/:id/miembro3lib', gruposCtrl.getMiembro3Lib);
router.get('/:id/miembro3group', gruposCtrl.getMiembro3Group);
router.get('/:id/miembro3tit', gruposCtrl.getMiembro3Tit);

module.exports = router;