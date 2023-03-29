import { distancia } from "../../lab01/lab09";

describe("distancia", () => {
    test("distancia(1.0833, 10.4544) = 11.3", () => {
        //Arrange 
        const tempo = 1.0833;
        const velocidade = 10.4544;
        const expected = 11.325251519999998;
        //Act
        const result = distancia(tempo, velocidade);
        //Assert
        expect(result).toBe(expected);
    });
});