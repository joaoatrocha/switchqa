function precoRamo(qtdRosas: number, qtdTulipas: number, precoRosas: number, precoTulipas: number): number {
    const valorTotal = qtdRosas * precoRosas + qtdTulipas * precoTulipas;
    return valorTotal;
  }
  
  const qtdRosas = 1;
  const qtdTulipas = 3;
  const precoRosas = 2;
  const precoTulipas = 1;
  
  const valor = precoRamo(qtdRosas, qtdTulipas, precoRosas, precoTulipas);
  console.log(valor);
  
  export { precoRamo };
  