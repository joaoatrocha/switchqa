import { calcularVolume } from "../../lab01/lab03";

describe("Testes - Lab 03", () => {
    test("Teste 1", () => {
        //Arrange
        const raio = 5;
        const altura = 10;
        const expected = 785398.1633974484;
        //Act
        let result = calcularVolume(raio, altura);
        //Assert
        expect(result).toBe(expected);
    });
});