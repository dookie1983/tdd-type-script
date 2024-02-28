import { Multiply } from "./multiply";

describe('Multiply', () => {
    let multiply: Multiply;
    beforeEach(() => {
        multiply = new Multiply();
    });

    describe('calculate multiply', () => {
        test('should create instance of class Multiply', () => {
            expect(multiply).toBeInstanceOf(Multiply)
        });

        test('should return integer value when call func calculateMultiply', () => {
            multiply.numberOne = 1;
            multiply.numberTwo = 1;
            const result = multiply.calculateMultiply();

            expect(result).toEqual(1)
        });

        test('should return multiply value when call func calculateMultiply with 2 int', () => {
            multiply.numberOne = 6;
            multiply.numberTwo = 2;
            const result = multiply.calculateMultiply()

            expect(result).toEqual(12)
        });
    });
});