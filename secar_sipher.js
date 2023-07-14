const secar = (word, num) =>{
    let str = "";
    for(let i = 0; i < word.length; i++){
        let ch = word[i].charCodeAt(0);
            for(let j = 0; j < num; j++){
                if(ch == 123){
                    ch = 97;
                    ch++;
                }
                else ch++;
            }
            str+=String.fromCharCode(ch)
    }
    return str;
}

let word = "Hellz";
let num = 4;
word = word.toLowerCase();

console.log(secar(word, num));