// array2.js
const numbers = [ 3,34,28,12,5];

let sum = 0;
numbers.forEach(function(val,ind,ary){ //배열의 각각 요소에 대해서 기능을 실행하겠다.
    // if(val > 10){
    //     sum += val;
    // }
    // document.write(`<h1>${val}</h1>`)
    
}) 

console.log(`합계: ${sum}`);

document.write('<button onclick="createList()">생성</button>')
document.write('<div id = "show"></div>')

function createList(){
    let furits=['Apple','Banana','Cherry'];
    let ulTag, liTag;   //변수선언.

    ulTag = document.createElement('ul'); //<ul></ul>
    
    for(let furit of furits){
    liTag = document.createElement('li');   //<li></li>
    liTag.innerHTML = furit;   //<li>Apple</li>
    liTag.id = furit.toLowerCase();
    ulTag.appendChild(liTag);   //<ul><li>Apple</li></ul>
    }

    // liTag = document.createElement('li')
    // liTag.innerHTML = 'Banana'
    // liTag.id = 'banana'
    // ulTag.appendChild(liTag);

    // liTag = document.createElement('li')
    // liTag.innerHTML = 'Cherry'
    // liTag.id = 'cherry'
    // ulTag.appendChild(liTag);

    document.getElementById("show").appendChild(ulTag);
    console.log(ulTag); 
}
    


function User(id, name , point){
    this.name = name
    this.id =id;
    this.point = point;
}
const users = [new User('user1', '사용자1' , 90),
new User('user2', '사용자2' , 110),
new User('user3', '사용자3' , 200),
new User('user4', '사용자4' , 30)
];
console.log(users)

function showList(){
    let str = '<h1>회원리스트</h1>';
    str += '<table border="1">';
    str += '<tbody>';
    users.forEach(callbackFnc)
    str += '</table>';
    str += '</tbody>';
    function callbackFnc(val,ind,ary){
        str += '<tr><td>'+val.id+'</td><td>'+val.name+'</td><td>'+val.point+'</td>';
        
    }
    document.write(str);
}


