import { AcceptablePassword } from "./kata-tdd/acceptable-password";

describe('Acceptable Password', () => {
    let acceptablePassword:AcceptablePassword;
    beforeEach(() => {
        acceptablePassword = new AcceptablePassword();
    });

    test('should init class Acceptable password', () => {
        expect(acceptablePassword).toBeInstanceOf(AcceptablePassword);
    });

    test('should return true when the password length should be bigger than 6', () => {
        const result = acceptablePassword.validatePassword("muchlonger5");

        expect(result).toBeTruthy();
    });

    test('should return false when the password length should be less than 6', () => {
        const result = acceptablePassword.validatePassword("ger5");

        expect(result).toBeFalsy();
    });
});


// red -> green -> refactor