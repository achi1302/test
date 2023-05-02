const {Router} = require('express');
const router = Router();

const autoresCtrl = require('../controllers/autores.controller')


//Get
router.get('/', autoresCtrl.getAutores);

//GetById
router.get('/:id', autoresCtrl.getAutorByID);

router.get('/:id/nombre', autoresCtrl.getNombreDeAutorByID);

router.get('/:id/about', autoresCtrl.getAboutDeAutorByID);

router.get('/:id/libros', autoresCtrl.getLibrosDeAutorByID);

//Post
router.post('/', autoresCtrl.createAutor);

//Delete
router.delete('/:id', autoresCtrl.deleteAutor);

//Actualizar
router.put('/:id', autoresCtrl.updateAutor);

module.exports = router;