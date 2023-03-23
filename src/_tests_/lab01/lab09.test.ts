import { distancia } from "../../lab09";
describe("distancia", () => {
    test("distancia deve retornar 500", () => {
        //Arrange
        const velocidade = 5;
        const distanciaTotal = 100;
        const expected = 500;
        //Act
        let result = distancia(velocidade, distanciaTotal);
        //Assert
        expect(result).toBe(expected);
    });
}); 