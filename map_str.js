const Map = (str, m = "") =>{
    let arr = [];
    str = str.split(" ")
    for(let i = 0; i < str.length; i++) arr.push(m);
    return arr;
}
let str = "Xasan cjenk nvirknvre vniren";
console.log(Map(str, "Hello"));