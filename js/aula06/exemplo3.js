// 3. Sistema de Cálculo de Média de Notas com Array
// // Neste sistema, um array armazena as notas de um aluno em diversas disciplinas. 
//O sistema calcula a média das notas e exibe o resultado. 
//Dependendo do valor da média, o aluno será classificado como aprovado ou reprovado,
// de acordo com a média mínima estabelecida (geralmente 7.0).

let notas = [4+ 4 + 2 + 7]
let media = notas / 4
if (media >= 7) {
    console.log('Parabéns, você foi aprovado e passou de ano!! Sua média foi de' , media);
}
else if (media>5) {
    console.log('Você está de recuperação, sua média foi de', media);

}
else if (media<=5){
    console.log('Você foi reprovado, sua média foi de', media);
}
