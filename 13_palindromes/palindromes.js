const palindromes = function (str) {
    
    const aplphanumericals = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    const cleanedString = str.
                        toLowerCase().
                        split('').
                        filter(char => aplphanumericals.includes(char)).
                        join('');

    const reversedStr = cleanedString.split('').reverse().join('');

    return reversedStr === cleanedString;
};

// Do not edit below this line
module.exports = palindromes;
