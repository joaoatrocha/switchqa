import { calcularAlturaPredio } from "../../lab01/lab012";

describe("calcularAlturaPredio", () => {
  test("calcularAlturaPredio(20, 50, 1.7) = 0.68", () => {
    //Arrange
    const d1 = 20;
    const d2 = 50;
    const h2 = 1.7;
    const expected = 0.68;
    //Act
    const result = calcularAlturaPredio(d1, d2, h2);
    //Assert
    expect(result).toBe(expected);
  })
})