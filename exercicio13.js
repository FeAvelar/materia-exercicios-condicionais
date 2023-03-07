const tipoDePagamento = "credito";
const desconto = 5/100;
const valorDoProduto = 13000;


if (tipoDePagamento === "credito") {
    const desconto = valorDoProduto * 95/100;
    //const valorAPagar = valorDoProduto - desconto;
    console.log(`Valor a ser pago R$ ${(desconto/100).toFixed(2)}, pois a compra no crédito tem 5% de desconto.`);

} else if (tipoDePagamento === "cheque") {
    const desconto = valorDoProduto * 97/100;
    const valorAPagar = valorDoProduto - desconto;
    console.log(`Valor a ser pago R$ ${(desconto/100).toFixed(2)}, pois a compra no crédito tem 5% de desconto.`);

} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    const desconto = valorDoProduto * 90/100;
    const valorAPagar = valorDoProduto - desconto;
    console.log(`Valor a ser pago R$ ${(desconto/100).toFixed(2)}, pois a compra no crédito tem 5% de desconto.`);
}    