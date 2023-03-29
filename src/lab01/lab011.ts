// Calcular a altura de um edifício usando a gravidade.

export function calcularAlturaEdificio(tempoQueda: number, aceleracaoGravidade: number): number {
    const altura = 0.5 * aceleracaoGravidade * tempoQueda ** 2;
    return altura;
  }    

console.log(calcularAlturaEdificio(2, 9.8))
