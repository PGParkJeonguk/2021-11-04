// func1.js
console.log('func1.js')

sum(10 , 20);   //호이스팅.

function sum(num1, num2){
    let result = num1 + num2;
    console.log(result);
}


let multi = function(n1 , n2){
    let result = n1 * n2;
    return result;
}

let val = multi(2,5);
console.log(val);
// =>호이스팅은 반드시 선언한 다음에 값을 넣어주어야 한다.
