const {Schema,model} = require('mongoose')

const autorschema = new Schema 
({

    nombre:{type:String, required:true},
    about:{type:String, required:true},
    libros:{type:String, required:true},




},{
    timestamps:true, //agregar tiempo de creacion
    versionKey:false 
})

module.exports = model('autores',autorschema)