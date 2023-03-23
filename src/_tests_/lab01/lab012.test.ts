import { calcularAlturaPredio } from "../../lab012";

describe('Teste para a função calcularAlturaPredio', () => {
  it('Deve retornar a altura correta com os valores fornecidos', () => {
    // Arrange
    const d1 = 20;
    const d2 = 50;
    const h2 = 1.7;

    // Act
    const resultado = calcularAlturaPredio(d1, d2, h2);

    // Assert
    expect(resultado).toBeCloseTo(0.68, 2);
  });
});