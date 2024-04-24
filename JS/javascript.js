$("#phone").mask("(99) 9999-99999");

var prods = [
    { id: 1, name: "Bife", price: 30.0 },
    { id: 2, name: "Coxa", price: 25.0 },
    { id: 3, name: "Carne", price: 22.0 },
    { id: 4, name: "Farofa", price: 10.0 },
    { id: 5, name: "Salada", price: 8.0 },
    { id: 6, name: "Torresmo", price: 12.0 },
];

function calc(){
    var quantities = document.getElementsByName("quantity");
    var output     = document.getElementById("output");
    var finalPrice = 0;
    var name = document.getElementById("name").value;
    var hasItem = false;

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    output.innerHTML = ""; // Limpa o conteúdo anterior

    for(var i = 0; i < prods.length; i++){
        var quantity = parseFloat(quantities[i].value);
        if(quantity > 0){
            hasItem = true;
            var total = prods[i].price * quantity;
            finalPrice += total;
            output.innerHTML += `<li class="fs-6">Prato: ${prods[i].name} - Preço unitário: ${formatter.format(prods[i].price)} - Quantidade: ${quantity} - Total: ${formatter.format(total)}</li>`;
        }
    }

    if(hasItem){
        output.innerHTML = `<div class="text-start">Caro <b>${name}</b>
        <div>Seguem os dados do seu pedido.</div>
        <div class="mb-3">O seu pedido é:</div></div>` + output.innerHTML;
        output.innerHTML += `<h3 class="mt-3">Preço final ${formatter.format(finalPrice)}</h3>`;
    } else {
        output.innerHTML = `<h3 class="text-danger text-center">Selecione pelo menos um prato!</h3>`;
    }
}
