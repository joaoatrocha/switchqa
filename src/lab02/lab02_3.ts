// Crie uma função que, tendo como dados de entrada dois pontos num plano:
// P(x1, y1) e P(x2,y2) –calcule a distância entre eles. A fórmula da determinação da distância entre dois pontos é:

export function distance(x1: number, y1: number, x2: number, y2: number): number {
    const xDiff = x2 - x1;
    const yDiff = y2 - y1;
    const dist = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    return dist;
  }
// Math.pow = "return" a base elevada ao expoente
// Math.sqrt = "return" a raiz quadrada de um número