import { totalMinutos } from "../../lab01/lab07";

describe("Testes - Lab07", () => {
    test("totalMinutos(16, 20) deve retornar 980", () => {

        //Arrange
        const horas = 16;
        const minutos = 20;
        const expected = 980;

        //Act
        const result = totalMinutos(horas, minutos);

        //Assert
        expect(result).toBe(expected);
    });
});