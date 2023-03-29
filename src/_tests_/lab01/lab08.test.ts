import { velocidadeRelampago } from "../../lab01/lab08";

describe("velocidadeRelampago", () => {
    test("velocidadeRelampago deve retornar 34", () => {
        //Arrange
        const distancia = 340;
        const tempo = 10;
        const expected = 34;

        //Act
        let result = velocidadeRelampago(distancia, tempo);

        //Assert
        expect(result).toBe(expected);
    });
}); 