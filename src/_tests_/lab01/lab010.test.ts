import { expression } from "../../lab010";
describe("Testes da função expression", () => {
    test("expression 2 = 3", () => {
        //Arrange
        const x = 2;
        //Act
        const resultado = expression(x);
        //Assert
        expect(resultado).toBe(3);
    });
})
