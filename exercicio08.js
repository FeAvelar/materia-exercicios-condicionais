const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (idade >= 12 && idade <= 17 || ehEstudante) {
    console.log("10 reais");
} else if (possuiPatologia || idade < 12 || idade > 65 || altura < 150) {
    console.log("Acesso negado");
} else { 
    console.log("20 reais");
}