const chompixApp = {};

chompixApp.platos = [
    {
        plato: 'Pizza',
        precio: 25,
    },
    {
        plato: 'Hamburgesa',
        precio: 20,
    },
    {
        plato: 'Rabas',
        precio: 50,
    },
];


chompixApp.funciones = {
    ordenar : id => {
        console.log(`
        Tu plato :  ${chompixApp.platos[id].plato} se esta preparando
        `);
    },
    agregarPlato: (plato,precio) =>{
        const nuevo = {
            plato,
            precio
        }
        chompixApp.platos.push(nuevo);
    },
    mostrarMenu: platos =>{
        console.log(`Guelcom al menu:`);
        platos.forEach((plato,index)=>{
            console.log(`${index} : ${plato.plato} $ ${plato.precio}`);
        });
    }
}

console.log(chompixApp);
const {platos} = chompixApp;
chompixApp.funciones.agregarPlato('Chocotorta', 40);
chompixApp.funciones.mostrarMenu(platos);
chompixApp.funciones.ordenar(2);
