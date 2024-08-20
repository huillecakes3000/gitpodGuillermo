const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://guille:eltaz1234@cluster0.x3lxgft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/taskdb')



.then(()=> console.log('Base de Datos conectada'));
console.warn();(e=> console.log(e));