// function staircase(n) {
//     let hash = '#';
//     for (var i = 1; i < n; i++) {
//         let value = n - i;
//         let spaces = ' '.repeat(value);
//         let hashes = hash.repeat(n);
//         let fullstring = spaces + hashes;

//         fullstring = fullstring.substring(0, n);
//         console.log(fullstring);
//     }
// }

// staircase(7);

function staircase(n) {
    for(let i = 1; i <=n; i++) {
        let str ="";
        for(let j =0; j <n; j++) {
            if(j<n-i) str+=" ";
            else str+='#';
        }
        console.log(str)
    }
}

staircase(6)