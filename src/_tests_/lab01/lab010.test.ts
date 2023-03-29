import { expression } from "../../lab01/lab010";
describe("Testes da função expression", () => {
    test("expression 2 = -1", () => {
        //Arrange
        const x = 2;
        const expected = -1;
        //Act
        const resultado = expression(x);
        //Assert
        expect(resultado).toBe(expected);
    });
})
