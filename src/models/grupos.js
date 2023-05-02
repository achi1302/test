const {Schema,model} = require('mongoose')

const gruposchema = new Schema 
({

    nombre:{type:String, required:true},
    miembros:{type:String, required:true},
    descripcion:{type:String, required:true},


},{
    timestamps:true, //agregar tiempo de creacion
    versionKey:false 
})

module.exports = model('grupos',gruposchema)
