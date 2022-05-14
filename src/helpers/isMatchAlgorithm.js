export function isMatchAlgorithm(pattern, word) {
    if (pattern.length > 0 && word.length > 0) {
        let j = 0; // how many extra characters the * 
        let s = 0; // keeps track of how many * are for empty characters
        for (let i = 0; i < pattern.length; i++) {
            // if not a * or !, exact letter better match
            if (pattern[i] !== '*' && pattern[i] !== '!') {
               
                if (word[i+j-s] !== pattern[i]) return false // if it characters do not match, return false
            }
            if(pattern[i] === '*'){ 
              if(pattern[i+1] == word[i+j-s]) s++; // next letter in the pattern matches current letter in the word, * must be 0 chars
                 // add 1 to index to not count/check current index twice
                while(word[i+j+1] === word[i]) j++; 
            }
            //if current letter are the same, return false otherwise, any letter is okay 
            if(pattern[i] === "!" && (word[i+j] === word[i+j+1])) return false
        }
        return true
    } return false
}