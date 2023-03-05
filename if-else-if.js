const idade = 66;

// menor de 18 anos -> menor de idade
// maior de idade, mas menor ou igual a 65 anos -> adulto
// acima de 65 anos -> idoso

if (idade < 18) {
    console.log("Menor de idade");
} else if (idade <= 65) {
    console.log("Adulta");
} else {
    console.log("Idosa");
}
