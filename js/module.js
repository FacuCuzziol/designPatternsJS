const comprarBoleto=(function (){
    //privado
    let evento = 'JS 2020 course';
    const adquirirBoleto = () => {
        const elemento = document.createElement('p');
        elemento.textContent= `Comprando boleto para: ${evento}`;
        document.querySelector('#app').appendChild(elemento);
    }
    //publico
    return{
        mostrarBoleto: function(){
            adquirirBoleto();
        }
    }
})();

comprarBoleto.mostrarBoleto();