const {Schema,model} = require('mongoose')

const gruposchema = new Schema 
({

    nombre:{type:String, required:true},
    miembros:{type:String, required:true},
    descripcion:{type:String, required:true},
    miembro1nom:{type:String, required:true},
    miembro1post:{type:String, required:true},
    miembro1tit:{type:String, required:true},
    miembro1lib:{type:String, required:true},
    miembro1group:{type:String, required:true},
    miembro2nom:{type:String, required:true},
    miembro2post:{type:String, required:true},
    miembro2tit:{type:String, required:true},
    miembro2lib:{type:String, required:true},
    miembro2group:{type:String, required:true},
    miembro3nom:{type:String, required:true},
    miembro3post:{type:String, required:true},
    miembro3tit:{type:String, required:true},
    miembro3group:{type:String, required:true},
    miembro3lib:{type:String, required:true},
 
    


},{
    timestamps:true, //agregar tiempo de creacion
    versionKey:false 
})

module.exports = model('grupos',gruposchema)
