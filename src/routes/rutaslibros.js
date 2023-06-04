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

//newnew
router.get('/:id/autor_descripcion', librosCtrl.getAutorDescripcionByID);

router.get('/:id/paginas', librosCtrl.getPaginasByID);

router.get('/:id/fecha', librosCtrl.getFechaByID);

router.get('/:id/resena1', librosCtrl.getResena1ByID);
router.get('/:id/resena1_nom', librosCtrl.getResena1NombreByID);
router.get('/:id/resena1_rating', librosCtrl.getResena1RatingByID);
router.get('/:id/resena1_num', librosCtrl.getResena1NumeroByID);

router.get('/:id/resena2', librosCtrl.getResena2ByID);
router.get('/:id/resena2_nom', librosCtrl.getResena2NombreByID);
router.get('/:id/resena2_rating', librosCtrl.getResena2RatingByID);
router.get('/:id/resena2_num', librosCtrl.getResena2NumeroByID);

module.exports = router;