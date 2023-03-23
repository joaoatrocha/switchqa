// Calcular a altura de um edifício usando a gravidade.

export function calcularAlturaEdificio(tempoQueda: number, aceleracaoGravidade: number): number {
    const altura = 0.5 * aceleracaoGravidade * tempoQueda ** 2;
    return altura;
  }    
const tempoQueda = 2; // tempo de queda da pedra em segundos
const aceleracaoGravidade = 9.8; // aceleração da gravidade em m/s²

const height = calcularAlturaEdificio(tempoQueda, aceleracaoGravidade);

console.log('A altura do edifício');
