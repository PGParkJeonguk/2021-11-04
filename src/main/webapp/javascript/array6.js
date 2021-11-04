const data = [{
        "id": 1,
        "first_name": "Ilario",
        "last_name": "Ballham",
        "email": "iballham0@yolasite.com",
        "gender": "M",
        "salary": 11565
    },
    {
        "id": 2,
        "first_name": "Lyon",
        "last_name": "Pavyer",
        "email": "lpavyer1@rediff.com",
        "gender": "M",
        "salary": 3096
    },
    {
        "id": 3,
        "first_name": "Claire",
        "last_name": "Olexa",
        "email": "colexa2@oracle.com",
        "gender": "M",
        "salary": 8735
    },
    {
        "id": 4,
        "first_name": "Suzanna",
        "last_name": "Milburn",
        "email": "smilburn3@netvibes.com",
        "gender": "F",
        "salary": 12700
    },
    {
        "id": 5,
        "first_name": "Meir",
        "last_name": "Errichi",
        "email": "merrichi4@qq.com",
        "gender": "M",
        "salary": 6004
    },
    {
        "id": 6,
        "first_name": "Pier",
        "last_name": "Buckby",
        "email": "pbuckby5@arstechnica.com",
        "gender": "F",
        "salary": 3489
    },
    {
        "id": 7,
        "first_name": "Rhodie",
        "last_name": "Lagadu",
        "email": "rlagadu6@mtv.com",
        "gender": "F",
        "salary": 18697
    },
    {
        "id": 8,
        "first_name": "Kynthia",
        "last_name": "Uren",
        "email": "kuren7@microsoft.com",
        "gender": "F",
        "salary": 12319
    },
    {
        "id": 9,
        "first_name": "Ulysses",
        "last_name": "Sieghard",
        "email": "usieghard8@si.edu",
        "gender": "M",
        "salary": 8684
    },
    {
        "id": 10,
        "first_name": "Alexandros",
        "last_name": "Brient",
        "email": "abrient9@cdbaby.com",
        "gender": "M",
        "salary": 4094
    },
    {
        "id": 11,
        "first_name": "Barn",
        "last_name": "Hutley",
        "email": "bhutleya@hao123.com",
        "gender": "M",
        "salary": 18121
    },
    {
        "id": 12,
        "first_name": "Gan",
        "last_name": "Chapiro",
        "email": "gchapirob@upenn.edu",
        "gender": "M",
        "salary": 4512
    },
    {
        "id": 13,
        "first_name": "Kort",
        "last_name": "Cullinane",
        "email": "kcullinanec@usatoday.com",
        "gender": "M",
        "salary": 7751
    },
    {
        "id": 14,
        "first_name": "Katharine",
        "last_name": "Sweetmore",
        "email": "ksweetmored@nymag.com",
        "gender": "F",
        "salary": 9506
    },
    {
        "id": 15,
        "first_name": "Ardelia",
        "last_name": "Scopes",
        "email": "ascopese@usa.gov",
        "gender": "F",
        "salary": 4154
    }
]

console.log(data);

document.write('<select onchange="findVal()"><option value = "M">남자</option><option value = "F">여자</option></select><br>')
document.write('이메일 : <input onkeyup = "findVal()" type = "text"><br>')
document.write('급여 : <input type = "number" id = "salay"><br>')
document.write('<button onclick="findVal()">찾기</button>');
document.write('<div id="showContant"></div>')

function findVal() {
    // 조회한 결과 있으면 화면에서 지우고 재출력
    let contents = document.querySelector('#showContant>table')
    if (contents) {
        contents.remove();
    }

    const findGen = document.querySelector('select>option:checked').value;
    const findEmail = document.querySelector('input').value;
    const findsalaly = document.querySelector('#salay').value;

    // let check = data.some(function (val, idx){
    //     return val.email.indexOf(findEmail)  == -1; //"" == -1 조회조건에 값이 없으면 check condition
    // })
    // if(!check){
    //     window.alert('check codition')
    //     return;
    // }

    if (findEmail == null || findEmail == "") {
        window.alert('check codition');
        return
    }

    let filterData = data.filter(function (val, ind) {
        return (val.gender == findGen && ((val.email).indexOf(findEmail) != -1) && (val.salary>=findsalaly))
    })
    console.log(filterData);

    let reduceData = data.reduce(function(acc, obj, ind){
        if(obj.gender === findGen && obj.email.indexOf(obj.findEmail) != -1&& (obj.salary).val){
            acc.push(obj);
        }
        return acc;
    })

    //헤더.
    const titles = ['id', 'first_name', 'last_name', 'email', 'gender', 'salary'];
    let table = document.createElement('table');
    table.setAttribute('border', '1');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById('showContant').appendChild(table);

    let tr, td;
    // 타이틀 보여주기.
    tr = document.createElement('tr')
    for (let title of titles) {
        td = document.createElement('th');
        td.innerHTML = title;
        tr.appendChild(td);
    }
    thead.appendChild(tr);

    // 데이터 보여주기
    for (let row of filterData) {
        tr = document.createElement('tr');
        for (let field of titles) {
            td = document.createElement('td');
            td.innerHTML = row[field];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}