const Vendedor = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}
const Comprador = function(nombre){
    this.nombre = nombre;
}

Vendedor.prototype = {
    oferta: function(articulo, precio){
        console.log(`Tenemos el siguiente articulo ${articulo},
        iniciamos en ${precio}`);
    },
    vendido: function(comprador){
        console.log(`Vendido a ${comprador}`);
    }
}

Comprador.prototype = {
    oferta: function(mensaje,comprador){
        console.log(`${comprador.nombre}: ${mensaje}`);
    }
}


const Subasta = function(){
    let compradores = {};

    return {
        registrar: function(usuario){
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}
const facu = new Comprador('Facu');
const pepe = new Comprador('Pepe');
const jose = new Comprador('Jose');
const vendedor = new Vendedor('Vendedor');


const subasta = new Subasta();
subasta.registrar(facu);
subasta.registrar(pepe);
subasta.registrar(jose);


vendedor.oferta('Ferrari f12',30000);
facu.oferta(35000,facu);
pepe.oferta(40000,pepe);
jose.oferta(100000,jose);
vendedor.vendido(jose.nombre);
