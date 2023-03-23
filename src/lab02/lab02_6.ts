// Exercício 6: Cálculo de função matemática (*)
// Construa um algoritmo/método e respetivos testes que efetue o cálculo dos valores da seguinte função:
// F(x) = xsex < 0
//        0sex = 0
//        x2 –2xsex > 0

function respetivaFunção(x: number): number {
  let xx: number;
  if (x < 0)
    return x; else if (x == 0)
    return 0; else xx = (x ** 2) - (2 * x);
  return xx;
}

console.log(respetivaFunção(5)); 

export { respetivaFunção };