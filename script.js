//Dados
let m1 = 11;
let m2 = 5;
let m3 = 8;

//Cálculo 
let media = (m1 + m2 + m3) / 3;
console.log(media.toFixed(2))
//Verificação
if (media < 5) {
  console.log("Você foi reprovado!")
} else if (media >= 5 && media <= 7) {
  console.log("Você está de recuperação!")
} else if(m1 > 10 || m2 > 10 || m3 > 10) {
  console.log("Ocorreu algum erro, corrija suas notas");
} else {
  console.log("Você passou de semestre!!")
}

