import { calcularPerimetro } from '../../lab01/lab04'

describe('calcularPerimetro', () => {
  test('calcula o perimetro corretamente', () => {
    //Arrange
    const ladoA: number = 10;
    const ladoB: number = 20;
    const expectedPerimeter: number = 60;

    //Act
    const calculatedPerimeter: number = calcularPerimetro(ladoA, ladoB);

    //Assert
    expect(calculatedPerimeter).toBe(expectedPerimeter);
  });
});