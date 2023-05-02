const {Schema,model} = require('mongoose')

const libroschema = new Schema 
({

    name:{type:String, required:true},
    autor:{type:String, required:true},
    descripcion:{type:String, required:true},
    score:{type:String, required:true},
    bundle:{type:String, required:true},
    genres:{type:String, required:true},
    relatedTo:{type:String, requiered:true},
    followers:{type:String, requiered:true},



},{
    timestamps:true, //agregar tiempo de creacion
    versionKey:false 
})

module.exports = model('libros',libroschema)

