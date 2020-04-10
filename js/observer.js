let observer = {
    obtenerOfertas: function(callback){
        if (typeof callback === "function") {
            this.subsribers[this.subsribers.length] = callback;

        }
    },
    cancelarOfertas : function(callback){
        for(let i = 0; i < this.subsribers.length; i++){
            if (this.subsribers[i] === callback) {
                delete this.subsribers[i];               
            }
        }
    },
    publicarOferta : function(oferta){
        for(let i = 0; i < this.subsribers.length; i++){
            if (typeof this.subsribers[i] === "function") {
                this.subsribers[i](oferta);           
            }
        }
    },
    
    crear: function(objeto){
        for (let i in this){
            if (this.hasOwnProperty(i)) {
                objeto[i] = this[i];
                objeto.subsribers = [];
            }
        }
    }
}

const udemy = {
    nuevoCurso: function(){
        const curso = "un nuevo curso de JS";
        this.publicarOferta(curso);
    }
}

const facebook = {
    nuevoAnuncio: function(){
        const oferta = "Compra un celular";
        this.publicarOferta(oferta);
    }
}

observer.crear(udemy);
observer.crear(facebook);

const facu = {
    compartir: function(oferta){
        console.log('Facu dice: Compartiendo '+ oferta);
    }
}

const pepito = {
    interesa : function(oferta){
        console.log('Pepito dice: me interesa la oferta de '+ oferta);
    }
}
udemy.obtenerOfertas(pepito.interesa);
udemy.obtenerOfertas(facu.compartir);
udemy.nuevoCurso();
udemy.cancelarOfertas(pepito.interesa);
udemy.nuevoCurso();


facebook.obtenerOfertas(pepito.interesa);
facebook.obtenerOfertas(facu.compartir);
facebook.nuevoAnuncio();

