const {Schema,model}= require("mongoose");


const tareaSchema =new Schema({

   Tarea: String,
    
   Descripcion:String
    
 });

module.exports=model('Tarea',tareaSchema);