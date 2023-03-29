import { calcularVolume } from "../../lab01/lab03";

describe("Testes - Lab 03", () => {
    test("Teste 1", () => {
        //Arrange
        const raio = 5;
        const altura = 10;
        const expected = 785.3981633974483;
        //Act
        let result = calcularVolume(raio, altura);
        //Assert
        expect(result).toBe(expected);
    });
});