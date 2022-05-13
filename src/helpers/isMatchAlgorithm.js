export function isMatchAlgorithm(pattern, word) {
    if (pattern.length > 0 && word.length > 0) {
        let j = 0;
        for (let i = 0; i < pattern.length; i++) {
            
            //if at the end of the string and not false yet, return true
            // if(word.length == i + j){ return true }

            // if not a * or !, exact letter better match
            if (pattern[i] !== '*' && pattern[i] !== '!') {  
                if (word[i+j] != pattern[i]) return false // if it characters do not match, return false
            }
            if(pattern[i] == '*'){ 
            // add 1 to index to not count/check current index twice
                while(word[i+j+1] == word[i]) j++; 
            }
            //if current letter are the same, return false otherwise, any letter is okay 
            if(pattern[i] == "!" && (word[i+j] == word[i+j+1])) return false
        }
        return true
    } return false
}