import { obterDigito } from "../../lab02/lab02_4";

describe("Testes - Lab 02 - Exercício 4", () => {
    test("obterDigito(123) deve retornar 1", () => {
        //Arrange
        const numero = 123;
        const expected = 1;
        //Act
        const resultado = obterDigito(numero);
        //Assert
        expect(resultado).toBe(expected);
    });
})

describe("Testes - Lab 02 - Exercício 4", () => {
    test("obterDigito(69) deve retornar -1", () => {
        //Arrange
        const numero = 69;
        const expected = -1;
        //Act
        const resultado = obterDigito(numero);
        //Assert
        expect(resultado).toBe(expected);
    })
})
