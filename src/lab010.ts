export function expression(x: number, y: number): number {
    const z = 10;

// calcula o valor da expressão
const resultado = Math.pow(x, 2) - 3 * x + 1;

// exibe o resultado
console.log(`O resultado da expressão x² - 3x + 1 para x = ${x} é: ${resultado}`);

    return Math.pow(x, y);
}
