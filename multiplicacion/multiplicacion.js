const fs = require ('fs');

let crearTabla = (base) =>{
    return new Promise( (resolve, reject) =>{

        let resultado = "";

        for(let i = 1 ; i < 11 ; i++){
            resultado += `${base} * ${i} = ${base*i} \n`;
        }
        
        
        fs.writeFile(`./multiplicacion/tabla${base}.txt`,resultado, (err)=>{
            if(err) reject(err)

            else{
                resolve(`tabla${base}.txt`);
            }
 
        });


    } )
}


module.exports = {
    crearTabla
}

