import { calcularPerimetro } from '../../lab01/lab04'

describe('calcularPerimetro', () => {
  it('calcula o perimetro corretamente', () => {
    //Arrange
    const ladoA: number = 10;
    const ladoB: number = 25;
    const expectedPerimeter: number = 70;

    //Act
    const calculatedPerimeter: number = calcularPerimetro(ladoA, ladoB);

    //Assert
    expect(calculatedPerimeter).toBe(expectedPerimeter);
  });
});