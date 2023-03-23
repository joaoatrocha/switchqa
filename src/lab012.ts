export function calcularAlturaPredio(d1: number, d2: number, h2: number): number {
    const altura = (h2 * d1) / d2;
    return altura;
  }

const d1 = 20; // distância entre a base do edifício e o ponto de observação
const d2 = 50; // distância entre o ponto de observação e o edifício
const h2 = 1.7; // altura do observador em metros

const altura = calcularAlturaPredio(d1, d2, h2);

console.log(`A altura do edifício é de ${altura} metros.`);