console.log(func(6)(6)(7)(100)());

function func(a){
    return function (b){
        if(b){
          return func(a+b)
        }
        return a;
    }
}