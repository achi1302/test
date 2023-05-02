const {Router} = require('express');
const router = Router();
//const express = requiere(express);
//const router = express.Router();


const librosCtrl = require('../controllers/libros.controller') // Esta línea importa el controlador.
//////////////LIBROS///////////////////////////////////////////////
//Get
router.get('/', librosCtrl.getLibros);

//GetById
router.get('/:id', librosCtrl.getLibroByID);

//GetName
router.get('/:id/name', librosCtrl.getNameByID);

//GetAutor
router.get('/:id/autor', librosCtrl.getAutorByID);

//GetDescripcion
router.get('/:id/descripcion', librosCtrl.getDescripcionByID);

//GetBundles
router.get('/:id/bundles', librosCtrl.getBundlesByID);

//GetScore
router.get('/:id/score', librosCtrl.getScoreByID);

//GetScore
router.get('/:id/genres', librosCtrl.getGenresByID);

//GetRelated
router.get('/:id/relatedTo', librosCtrl.getRelatedByID);

//GetFollowers
router.get('/:id/followers', librosCtrl.getFollowersByID);

//Post
router.post('/', librosCtrl.createLibro);


//delete
router.delete('/:id', librosCtrl.deleteLibro);

//actualizar
router.put('/:id', librosCtrl.updateLibro);


module.exports = router;