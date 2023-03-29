import { precoRamo } from "../../lab01/lab02";  

describe('precoRamo', () => {
  it('1', () => {
    // Arrange
    const quantidadeRosas = 2;
    const quantidadeTulipas = 3;
    const precoRosas = 5.5;
    const precoTulipas = 3.75;

    // Act
    const resultado = precoRamo(quantidadeRosas, quantidadeTulipas, precoRosas, precoTulipas);

    // Assert
    expect(resultado).toEqual(quantidadeRosas * precoRosas + quantidadeTulipas * precoTulipas);
  });

  it('2', () => {
    // Arrange
    const quantidadeRosas = 0;
    const quantidadeTulipas = 0;
    const precoRosas = 10;
    const precoTulipas = 5;

    // Act
    const resultado = precoRamo(quantidadeRosas, quantidadeTulipas, precoRosas, precoTulipas);

    // Assert
    expect(resultado).toEqual(0);
  });

  it('3', () => {
    // Arrange
    const quantidadeRosas = 2;
    const quantidadeTulipas = 3;
    const precoRosas = 0;
    const precoTulipas = 0;

    // Act
    const resultado = precoRamo(quantidadeRosas, quantidadeTulipas, precoRosas, precoTulipas);

    // Assert
    expect(resultado).toEqual(0);
  });
});
