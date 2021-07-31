//gogogogog
var list = [
    { citation: 'Impose ta chance, serre ton bonheur et va vers ton risque. A te regarder, ils s’habitueront.', author: 'René Char', color: 'green' },
    { citation: 'Chacun de nous est responsable de tout devant tous.', author: 'Fiodor Dostoievski', color: 'blue' },
];


    var x = document.getElementsByClassName("example");
x[0].innerHTML = list[0].citation;
var x = document.getElementsByClassName("example1");
x[0].innerHTML = list[0].author;
var y = document.getElementsByClassName("color");
y[0].style.backgroundColor = list[0].color;
var y = document.getElementsByClassName("color");
y[0].style.color = list[0].color;

var s = document.getElementsByClassName("button");
s[0].style.background = list[0].color;

document.body.style.backgroundColor = list[0].color;

var a = 0;


function myFunction() {
    if (a < list.length-1) { a = a + 1 }
    else {a=0}
    var x = document.getElementsByClassName("example");
    x[0].innerHTML = list[a].citation;
    var z = document.getElementsByClassName("example1");
    z[0].innerHTML = list[a].author;
    var y = document.getElementsByClassName("color");
    y[0].style.color = list[a].color;
    document.body.style.backgroundColor = list[a].color;
    document.body.style.Color = list[a].color;

    var s = document.getElementsByClassName("button");
    s[0].style.background = list[a].color;

}








