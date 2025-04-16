// 2. Sistema de Exibição de Mensagem com switch - Verificação de Dia da Semana
// Esse sistema recebe um número correspondente a um dia da semana (1 para segunda-feira, 2 para terça-feira, etc.)
//e exibe uma mensagem informando qual é o dia atual. Se o número informado não corresponder a um dia válido (1 a 7), 
// uma mensagem de erro é mostrada, indicando que o valor inserido é inválido.

let diaDaSemana = 5

switch (diaDaSemana) {
    case 1:
        console.log('Segunda-feira, boa semana!🙏🙏🙏');
        
        break;
        case 2:
        console.log('Terça-feira, bora pra cima!!💪💪💪');
        
        break;
        case 3:
        console.log('Quarta-feira, dia de jogo(coringão maior de todos!!!🦅🦅🦅');
        
        break;
        case 4:
        console.log('Quintou, quase o que queremos!😫😤');
        
        break;
        case 5:
        console.log('Sextou naquelexx pique!!! 😎🤑');
        
        break;
        case 6:
        console.log('Sábadinho pouca ideia e muita mídia!🥵👻👀');
        
        break;
        case 7:
        console.log('Domingo(à noite) !🥺🐺😭');
        
        break;



    default:
        console.log('ERRO!!! Não possuímos este dia.❌❌❌');
        break;
}
