export function calcularAlturaPredio(d1: number, d2: number, h2: number): number {
  const altura = (h2 * d1) / d2;
  return altura;
}

console.log(calcularAlturaPredio(20, 50, 1.7));