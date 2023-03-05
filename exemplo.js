const temIngresso = true;
const censura = 16;
const idade = 14;

if (temIngresso === true) {
if (idade >= censura) {
    console.log("Autorizado a entrar");
} else {
    console.log("Proibida pela censura");
}
} else {
    console.log("Proibida a entrada por falta de ingresso.");
}
