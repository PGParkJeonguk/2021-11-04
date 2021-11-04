//array3.js(Array.map , Array.filter)

function User(id, name, point) {
    this.name = name
    this.id = id;
    this.point = point;
}
const users = [new User('user1', '사용자1', 90),
    new User('user2', '사용자2', 110),
    new User('user3', '사용자3', 200),
    new User('user4', '사용자4', 30)
];
console.log(users)

const newUsers = users.map(function (val, ind, ary) {
    let newObj = {}
    newObj.uid = val.id;
    newObj.uname = val.name;
    newObj.uscore = val.point;
    newObj.idx = ind;

    return newObj;
})

console.log(newUsers)

const filterUsers = newUsers.filter(function (val, ind) {
    return val.idx; //이 값이 참이면 반환한다.
}); //return 되는값이 참이면 반환 거짓이는 반환안함.
console.clear();
console.log(filterUsers)

// let resultAry=[];
// let sum = filterUsers.reduce(function(prevObj,curObj){
//     console.log(prevObj, curObj);
//     resultAry.push(curObj.uname);
//     return resultAry;
// }, resultAry );
// console.log(sum);

let sum2 = filterUsers.reduce(function (initVal, obj, ind, ary) {
    if (ind != 0) {
        console.log(initVal[ind - 1].uid, initVal[ind - 1].uname, initVal[ind - 1].uscore)
    }
    console.log(initVal, obj, ind);
    initVal.push(obj)
    return initVal;
}, []); // 참조값이 .. a = 3 a = {}
console.log(sum2);

//Arrow function

let sum3 = function sum3(num1, num2){ 
    return num1 + num2;
}

sum3 = (num1, num2) => num1 + num2;

let trueOrFalse = [45,4,9,16,25].some(function(val, ind, ary){
    return val > 10;
});

console.log(trueOrFalse)

const fruits = ["Apple", "라면", "Apple" , "Mango"];
console.log(fruits.find(function(val, ind, ary){
    return val == "라면";   //배열안에존재하는 데이터를 갖고올때 유용.
}))

console.log(Array.from("ABCDE"))
console.log('ABCD'.split(""));

console.log(fruits.keys());
for(let x of fruits.keys()){
    console.log(x)
} 

let user1 = new User('user1', '사용자1' , 90)
console.log(user1)
    // for(let x of user1.keys){
    //     console.log(x)
    // }
