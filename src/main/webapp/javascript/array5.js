// array5.js
// 요소(태그)생성: document.createElement('element')
//  상위요소 > 하위요소 : 상위요소.appendChild(하위요소)

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

//표형식(table)으로 생성
document.write('<div id="show"></div>')
document.write('<button onclick="createContent()">생성</button>')
// <ul><li>아이디, 이름, 점수</li><li>아이디,이름,점수</li>...</ul>

function createContent() {
    let tableTag, tbodyTag, trTag, tdTag;
    tableTag = document.createElement("table");
    tbodyTag = document.createElement("tbody");
    trTag = document.createElement('tr');
    tdTag = document.createElement('td');

    for (let user of users) { 
        
        tableTag = document.createElement("table");
        tableTag.setAttribute('border',1)
        trTag = document.createElement('tr');
        trTag.setAttribute('border',1)

        tdTag = document.createElement('td');
        tdTag.innerHTML = user.id;
        tdTag.setAttribute('border',1)
        trTag.appendChild(tdTag);

        tdTag = document.createElement('td');
        tdTag.innerHTML = user.name;
        tdTag.setAttribute('border',1)
        trTag.appendChild(tdTag);

        tdTag = document.createElement('td');
        tdTag.innerHTML = user.point;
        tdTag.setAttribute('border',1)
        trTag.appendChild(tdTag);

        tbodyTag.appendChild(trTag);
        tableTag.appendChild(tbodyTag);
    }
    document.getElementById("show").appendChild(tableTag);
    console.log(tableTag);
}