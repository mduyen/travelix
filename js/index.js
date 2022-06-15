// const myslider = document.querySelectorAll(".myslider");
// // dot = document.querySelectorAll(".dot"); 
// let count = 1; 

// sliders(count);

// function sliders(n) { 
//     if (n > myslider.length) {
//         count = 1;
//     }
//     // if (n < 1) {
//     //     count = myslider.length;
//     // }
//     for (let i = 0; i < myslider.length; i++) {
//         myslider[i].style.display = "none";
//     }
//     // for (let i = 0; i < dot.length; i++) {
//     //     dot[i].classList.remove("active");
//     // }
//     myslider[count - 1].style.display = "block";
//     dot[count - 1].classList.add("active");
// }
// //set thời gian chuyển ảnh
// let timer = setInterval(function () {
//     count++;
//     sliders(count);
    
// }, 7000);

// function move(n){
//     count += n;
//     sliders(count);
//     resetTimer();
// }

// function resetTimer(){
//     clearInterval(timer);
//     timer = setInterval(function () {
//         count++;
//         sliders(count);
//     }, 6000);
// }

// function moveslide(n){
//     count = n;
//     sliders(count);
//     resetTimer();
// }
// // canvas
// var canvas = document.getElementById('myCanvas');
// var context = canvas.getContext('2d');
// context.fillStyle = 'rgba(4, 129, 154, 0.533)';
// context.fillRect(0, 10, 1260, 5);


const myslider = document.querySelectorAll(".myslider");
let count = 1;

function sliders(n){
    if (n > myslider.length){
        count = 1;
    }
    for (let i = 0; i < myslider.length; i++){
        myslider[i].style.display = "none";
    }
    myslider[count - 1].style.display = "block";
}
// img move time
let time = setInterval(function(){
    count ++;
    sliders(count);
},7000);

function resetTimer(){
    clearInterval(time);
    timer = setInterval (function (){
        count++;
        sliders(count);
    },6000);
}

function move(n){
    count += n;
    sliders(count);
    resetTimer();
}

function moveslide(n){
    count = n;
    sliders(count);
    resetTimer();
}

//font active
// function font_active(){
//     const home = document.querySelector(".home")
//     home.classList.add('home_active')
// } 


//nav_menu
let nav_menu = document.getElementById("nav_menu");
let header__nav = document.querySelector(".header__nav-icon")
nav_menu.onclick = function ()
{
    header__nav.classList.toggle('active')
}

index = 0;
function name()
{   
    if (index == 0){
        document.getElementById("name").style=`display: block; font-size: 10px`;
        index++;
    }
    else {
        document.getElementById("name").style=`display: none;`;
        index = 0;
    }
}
// canvas
// var c = document.getElementById("canvas");
// var mycanvas = c.getContext("2d");
// var grd = mycanvas.createLinearGradient(0,0,200,0);
// grd.addColorStop(0,"rgba(250, 176, 27, 1)");
// grd.addColorStop(1,"rgba(175, 121, 208, 1)");
// grd.addColorStop(2,"rgba(4, 129, 155, 1)")
// mycanvas.fillStyle = grd;
// mycanvas.fillRect(1, 10, 150, 80);
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
c.innerWidth;
// Create gradient
var grd = ctx.createLinearGradient(20,-20,1500,0);
grd.addColorStop(0,"rgba(250, 176, 27, 1)");
grd.addColorStop(0.5,"rgba(175, 121, 208, 1)");
grd.addColorStop(1,"rgba(4, 129, 155, 1)");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,0,1258,4);