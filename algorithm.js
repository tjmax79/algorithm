function analyzeSentence(sentence) {
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
    let inWord = false;

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        if (char === '.') {
            break;
        }
        
        length++;
        
        if ('aeiouAEIOU'.includes(char)) {
            vowelCount++;
        }
        
        if (char === ' ') {
            if (inWord) {
                wordCount++;
                inWord = false;
            }
        } else {
            inWord = true;
        }
    }
    
    // Final check to count the last word
    if (inWord) {
        wordCount++;
    }
    
    return {
        length: length,
        wordCount: wordCount,
        vowelCount: vowelCount
    };
}

// Example usage:
const sentence = "This is an example sentence.";
const result = analyzeSentence(sentence);
console.log("Length:", result.length);
console.log("Number of words:", result.wordCount);
console.log("Number of vowels:", result.vowelCount);
