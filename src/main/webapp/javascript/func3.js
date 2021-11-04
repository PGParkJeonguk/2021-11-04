//func3.js

function multiply(num) {
    //3단.
    document.write(`<table border="1"><tbody>`);
    for (let i = 1; i <= 9; i++) {
        document.write('<tr>')
        document.write(`<td>${num}</td>`)
        document.write(`<td>*</td>`)
        document.write(`<td>${i}</td>`)
        document.write(`<td>=</td>`)
        document.write(`<td> ${num * i}</td>`)
        document.write('<tr>')
    }

    document.write('<table border="1"><tbody>');
    for (let i = 1; i <= 9; i++) {
        document.write('<tr><td>' + num + '</td><td>' + '*' + '</td><td>' + i + '</td><td>' + '=' + '</td><td>' + (num * i) + '</td></tr>')
    }
    document.write('</tbody></table>');
}
multiply(4);

function multiplyWithReturn(num) {
    let str = '';
    str = '<table border = "1" color = red>'
    document.write(str)
    for (let i = 1; i <= 9; i++) {
        document.write('<tr><td>' + num + '</td><td>' + '*' + '</td><td>' + i + '</td><td>' + '=' + '</td><td>' + (num * i) + '</td></tr>')
    }
    str += '</table>';
    return str; //<table><tr>.....</tr></table>
}
let result = multiplyWithReturn(8);
document.write(result);
