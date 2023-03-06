const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; 
      //emCentavos
 if (aposentada || portadoraDeDoenca) {
    console.log("Isenta");
 } else if (totalDeRendimentos <= 2855970) {
    console.log("Vaza leão! Já ta dificil sem você");
 } else {
    console.log("Pega Leao");
 }
