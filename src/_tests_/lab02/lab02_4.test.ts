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
describe("Testes - Lab 02 - Exercício 4", () => {
    test("obterDigito(1234) deve retornar -1", () => {
        //Arrange
        const numero = 1234;
        const expected = -1;
        //Act
        const resultado = obterDigito(numero);
        //Assert
        expect(resultado).toBe(expected);
    })
})
describe("Testes - Lab 02 - Exercício 4", () => {
    test("obterDigito(0) deve retornar -1", () => {
        //Arrange
        const numero = 0;
        const expected = -1;
        //Act
        const resultado = obterDigito(numero);
        //Assert
        expect(resultado).toBe(expected);
    })
})
describe("Testes - Lab 02 - Exercício 4", () => {
    test("obterDigito(100) deve retornar 1", () => {
        //Arrange
        const numero = 100;
        const expected = 1;
        //Act
        const resultado = obterDigito(numero);
        //Assert
        expect(resultado).toBe(expected);
    })
})
describe("Testes - Lab 02 - Exercício 4", () => {
    test("obterDigito(999) deve retornar 9", () => {
        //Arrange
        const numero = 999;
        const expected = 9;
        //Act
        const resultado = obterDigito(numero);
        //Assert
        expect(resultado).toBe(expected);
    })
})

//123