var cardapioBebidas = [
    { id: 1, bebida: "Café", preco: 8.10 },
    { id: 2, bebida: "leite", preco: 5.50, },
    { id: 3, bebida: "Chá", preco: 10.25 }
]

console.log("Cardápio de bebidas: ");
console.log("------------------");
cardapioBebidas.forEach(bebidas => console.log(bebidas.id, ":", bebidas.bebida, "R$", bebidas.preco.toFixed(2)));
console.log("----------------")

let = NumeroBebida = 3;

var buscarBebida = cardapioBebidas.find(bebida => bebida.id === NumeroBebida);
 if (buscarBebida) {
    
    switch (NumeroBebida) {
        case 1:
            console.log("Seu pedido foi um: "+ buscarBebida.bebida);
            console.log("Valor total do Pedido: R$ " + buscarBebida.preco.toFixed(2))
            break;
        case 2:
            console.log("Seu pedido foi um: "+ buscarBebida.bebida);
            console.log("Valor total do Pedido: R$ " + buscarBebida.preco.toFixed(2))
            break;
        case 3:
            console.log("Seu pedido foi um: "+ buscarBebida.bebida);
            console.log("Valor total do Pedido: R$ " + buscarBebida.preco.toFixed(2))
            break;
    }
} else {
    console.log('Está bebida não se encontra no Cardápio!');
}