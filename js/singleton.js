const alumnos = {
    listaAlumnos : [],

    get: function(id){
        console.log(id);
        return this.listaAlumnos[id];
    },

    crear: function(datos){
        console.log(datos);
        this.listaAlumnos.push(datos);
        return datos;
    },

    listado: function(){
        return this.listaAlumnos;
    }
}


const infoAlmuno = {
    nombre: 'Juan',
    edad: 20
}
const infoAlmuno2 = {
    nombre: 'Pablo',
    edad: 21
}

alumnos.crear(infoAlmuno);
alumnos.crear(infoAlmuno2);

const listado = alumnos.listado();


console.log(listado);

const alumno = alumnos.get(0);
console.log(alumno);