function vowelAndConsonants(s) {
    for (var i = 0; i < s.length; i++) {
        let current_char = s[i];
        if ('aeiou'.includes(current_char)) {
            console.log(current_char);
        }
    }
    for (var j = 0; j < s.length; j++) {
        let current_char = s[j];
        if (!'aeiou'.includes(current_char)) {
            console.log(current_char)
        }
    }
}

vowelAndConsonants('javascript');