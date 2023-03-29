export function precoRamo(qtdRosas: number, qtdTulipas: number, precoRosas: number, precoTulipas: number): number {
  const valorTotal = qtdRosas * precoRosas + qtdTulipas * precoTulipas;
  return valorTotal;
}
console.log(precoRamo(10, 20, 5, 3));
