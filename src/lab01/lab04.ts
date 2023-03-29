function calcularPerimetro(ladoA: number, ladoB: number): number {
  const perimetro: number = 2 * (ladoA + ladoB);

  return perimetro;
}
console.log(calcularPerimetro(10, 20));

export { calcularPerimetro };

