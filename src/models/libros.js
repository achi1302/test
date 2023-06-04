const {Schema,model} = require('mongoose')

const libroschema = new Schema 
({

    name:{type:String, required:true},
    autor:{type:String, required:true},
    autor_descripcion:{type:String, required:true},
    descripcion:{type:String, required:true},
    score:{type:String, required:true},
    bundle:{type:String, required:true},
    genres:{type:String, required:true},
    paginas:{type:String, required:true},
    fecha:{type:String, required:true},
    relatedTo:{type:String, requiered:true},
    followers:{type:String, requiered:true},
    resena1:{type:String, requiered:true},
    resena1_nom:{type:String, requiered:true},
    resena1_rating:{type:String, requiered:true},
    resena1_num:{type:String, requiered:true},
    resena2:{type:String, requiered:true},
    resena2_nom:{type:String, requiered:true},
    resena2_rating:{type:String, requiered:true},
    resena2_num:{type:String, requiered:true},



},{
    timestamps:true, //agregar tiempo de creacion
    versionKey:false 
})

module.exports = model('libros',libroschema)

