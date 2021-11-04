// array1.js
const persons = [];

function addFnc() {
    let addBtn = document.getElementById('add')
    let val = addBtn.value;
    console.log(addBtn);

    persons.push(val); //배열의 요소를 추가

    console.log(persons);

}

function remFnc() {
    // persons.pop();
    let findVal = document.getElementById('add').value
    let cnt = -1;
    for (let i = 0; i < persons.length; i++) {
        if (persons[i] === findVal) {
            cnt = i;
            break;
        }
    }
    if (cnt >= 0) {
        persons.splice(cnt, 1);
    }

    console.log(persons);
}

document.write('<input type="text" id="add" value="hong">');
document.write('<button onclick="addFnc()">추가</button>');
document.write('<button onclick="remFnc()">삭제</button>');


const ary = ['hong', 'hwang'];
console.log(ary[0])
ary[0] = 'hong1';
ary[1] = 'hwang1';
ary[2] = 'park';
// ary[ary.length] = 'kim';
// ary[4] = 'choi'
// ary[ary.length] = 'lee';
ary.push('choi'); //제일 마지막 위치에 추가
// ary.pop(); // 제일 마지막 위치 삭제.
// ary.splice(3, 0, 'new kim'); // splice : index, size, replace =>(X , 0 )이 상황은 추가이다.
// ary.unshift('first');
// ary.shift();
// ary.push('new1');

// delete ary[3];




// for (let i = 0; i < ary.length; i++) {
//     console.log(ary[i]);
// }
console.log('---------------------')
for (let val of ary) {
    console.log(val);
}

const newAry = ary.slice(0,2);      //  slice(include,exclude)
console.log(newAry);

const mergeAry = ary.concat(newAry)
console.log(mergeAry);

mergeAry.sort();
console.log(mergeAry)
mergeAry.reverse();
console.log(mergeAry)

const numbers = [2,10,100,24,4]
numbers.sort(function(f,l){
    // if(f<l){
    //     return -1;
    // }else{
    //     return 1;
    // }
    return f -l;
})
console.log(numbers)

const s1 ={
    name: 'hwang',
    score: 70
}

const s2 ={
    name: 'park',
    score: 80
}

const s3 ={
    name: 'choi',
    score: 90
}

const student = [s1, s2, s3];
student.sort(function(f,l){
    if(f.name < l.name){
        return -1
    }else{
        return 1
    }
})

console.log(student);