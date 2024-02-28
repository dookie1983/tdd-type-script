export class FirstWord {
    // getWord(sentence: string) {
    //     const word = sentence.split(' ').shift();
    //     return word!.charAt(0).toUpperCase() + word!.slice(1);
    // }

    // getWord(sentence: string): string {
    //     const trimmedSentence = sentence.trim();

    //     if (trimmedSentence === '') {
    //         return ''; // or handle empty string as needed
    //     }

    //     // Extract the first word and capitalize its first letter
    //     return `${trimmedSentence.charAt(0).toUpperCase()}${trimmedSentence.slice(1).split(' ')[0]}`;
    // }

    // getWord(sentence: string): string {
    //     const trimmedSentence = sentence.trim();
    //     const [firstWord] = trimmedSentence.split(' ');

    //     return firstWord ? `${firstWord.charAt(0).toUpperCase()}${firstWord.slice(1)}` : '';
    // }

    getWord(sentence: string): string {
        const [firstWord] = sentence.trim().split(' ');

        return (firstWord && firstWord.charAt(0).toUpperCase() + firstWord.slice(1)) || '';
    }
}