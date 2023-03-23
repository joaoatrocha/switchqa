export function expression(x: number): number {
// calcula o valor da expressão
const resultado = Math.pow(x, 2) - 3 * x + 1;

// exibe o resultado
return resultado;    
}
console.log (expression(2));
