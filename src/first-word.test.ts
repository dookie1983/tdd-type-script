import { FirstWord } from "./first-word";

describe('FirstWord', () => {
    let fistWord: FirstWord;
    beforeEach(() => {
        fistWord = new FirstWord();
    });

    describe('GetWord', () => {
        test('should return empty string when input empty', () => {
            const result = fistWord.getWord('');

            expect(result).toEqual('')
        });

        test('should return word "Hello" when input word "Hello', () => {
            const result = fistWord.getWord('Hello');

            expect(result).toEqual('Hello');
        });

        test('should return word "Hello" when input word "hello', () => {
            const result = fistWord.getWord('hello');

            expect(result).toEqual('Hello');
        });

        test('should return word "Lion" when input word "Lion Narak"', () => {
            const result = fistWord.getWord('Lion Narak');

            expect(result).toEqual('Lion');
        });
    });
});