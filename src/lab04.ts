function calcularPerimetro(ladoA: number, ladoB: number): number {
  const perimetro: number = 2 * (ladoA + ladoB);

  return perimetro;
}

const ladoA1: number = 10;
const ladoB1: number = 25;
console.log(`O perímetro é: ${calcularPerimetro(ladoA1, ladoB1)}`);

export { calcularPerimetro };

