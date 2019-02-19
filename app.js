const { crearTabla}  = require ("./multiplicacion/multiplicacion");



let b = 7;


crearTabla(b)
.then(archivo => console.log(archivo))
.catch(err => err)


