const {Schema,model} = require('mongoose')

const usuarioschema = new Schema 
({

    username:{type:String, required:true},
    reviews:{type:String, required:true},
    grupos:{type:String, required:true},
    friends:{type:String, required:true},
    WantToRead:{type:String, required:true},
    activity:{type:String, required:true},




},{
    timestamps:true, //agregar tiempo de creacion
    versionKey:false 
})

module.exports = model('usuarios',usuarioschema)