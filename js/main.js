
let bfrInputs;

let bfrRadious;

let bfrBtnType = document.getElementsByClassName('btnType');

let taReview = document.getElementById('taReview');
let border1 = document.getElementById('border1');

//variables para los rangos del radio -----------------------------
let allRadious = document.getElementById('allRadious');

let radiousLT = document.getElementById('radiousLT');
let radiousRT = document.getElementById('radiousRT');
let radiousLB = document.getElementById('radiousLB');
let radiousRB = document.getElementById('radiousRB');

let inputLT = document.getElementById('inputLT');
let inputRT = document.getElementById('inputRT');
let inputLB = document.getElementById('inputLB');
let inputRB = document.getElementById('inputRB');

//variable para el grueso del bprde
let widthBorder = document.getElementById('widthBorder');

//variables para el color del borde
let borderColor = document.getElementById('borderColor');
let alphaBorder = document.getElementById('alphaBorder');



allRadious.oninput = function (e){
    if(!allRadious.checked){

        taReview.style.borderRadius = radiousLT.value + 'px 0px 0px 0px'
        inputRT.value = 0;
        inputLB.value = 0;
        inputRB.value = 0;
    }

};

//Rangos de radio ------------------------------------------------------------
radiousLT.oninput = function () {
    inputLT.value = radiousLT.value;


    if(allRadious.checked){
        taReview.style.borderRadius = radiousLT.value + 'px';
        inputRT.value = radiousLT.value;
        inputLB.value = radiousLT.value;
        inputRB.value = radiousLT.value;
    }
    else
        taReview.style.borderTopLeftRadius = radiousLT.value + 'px';

};

radiousRT.oninput = function () {
    inputRT.value = radiousRT.value;
    taReview.style.borderTopRightRadius = radiousRT.value + 'px';
};

radiousLB.oninput = function () {
    inputLB.value = radiousLB.value;
    taReview.style.borderBottomLeftRadius = radiousLB.value + 'px';
};

radiousRB.oninput = function () {
    bfrInputs = document.getElementById('inputRB');
    bfrInputs.value = radiousRB.value;
    taReview.style.borderBottomRightRadius = radiousRB.value + 'px';
};
//fin rangos de radio  ----------------------------------------------------


//Grueso del borde ---------------------------------------------------------
widthBorder.oninput = function (e){
    widthBInput.innerHTML = widthBorder.value;
    taReview.style.borderWidth = widthBorder.value + 'px';
};

border1.onclick = function (e){
    taReview.style.borderWidth = '1px';
    widthBorder.value = 1;
};
//fin grueso del borde -----------------------------------------------------


//botones tipos de borde ---------------------------------------------------
solidBorder.onclick = function(e){
    taReview.style.borderStyle = 'solid';
    document.querySelector(".selected").classList.remove('selected');
    solidBorder.classList.add('selected');
};

dottedBorder.onclick = function(e){
    taReview.style.borderStyle = 'dotted';
    document.querySelector(".selected").classList.remove('selected');
    dottedBorder.classList.add('selected');
};

dashedBorder.onclick = function(e){
    taReview.style.borderStyle = 'dashed';
    document.querySelector(".selected").classList.remove('selected');
    dashedBorder.classList.add('selected');
};

doubleBorder.onclick = function(e){
    taReview.style.borderStyle = 'double';
    document.querySelector(".selected").classList.remove('selected');
    doubleBorder.classList.add('selected');
};

grooveBorder.onclick = function(e){
    taReview.style.borderStyle = 'groove';
    document.querySelector(".selected").classList.remove('selected');
    grooveBorder.classList.add('selected');
};

ridgeBorder.onclick = function(e){
    taReview.style.borderStyle = 'ridge';
    document.querySelector(".selected").classList.remove('selected');
    ridgeBorder.classList.add('selected');
};

insetBorder.onclick = function(e){
    taReview.style.borderStyle = 'inset';
    document.querySelector(".selected").classList.remove('selected');
    insetBorder.classList.add('selected');
};

outsetBorder.onclick = function(e){
    taReview.style.borderStyle = 'outset';
    document.querySelector(".selected").classList.remove('selected');
    outsetBorder.classList.add('selected');
};

hiddenBorder.onclick = function(e){
    taReview.style.borderStyle = 'hidden';
    document.querySelector(".selected").classList.remove('selected');
    hiddenBorder.classList.add('selected');
};

noneBorder.onclick = function(e){
    taReview.style.borderStyle = 'none';
    document.querySelector(".selected").classList.remove('selected');
    noneBorder.classList.add('selected');
};
//fin botones tipo de borde------------------------------------------------------


//color y transparencia----------------------------------------------------------
borderColor.oninput = function (e) {
    taReview.style.borderColor = borderColor.value;
};

alphaBorder.oninput = function(e){
    alphaInput.innerHTML = alphaBorder.value/100;
    var r=parseInt(borderColor.value.substring(1,3), 16);
    var g=parseInt(borderColor.value.substring(3,5), 16);
    var b=parseInt(borderColor.value.substring(5,7), 16);
    taReview.style.borderColor = "rgb("+r+", "+g+", "+b+", "+alphaBorder.value/100+")"
};

border2.onclick = function (e){
    alphaBorder.value=100;
    taReview.style.borderColor=borderColor.value;
};
//fin de color y transparencia---------------------------------------------------


//partes del borde---------------------------------------------------------------
allBorder.onclick = function(e){
    taReview.style.borderWidth = widthBorder.value + 'px';
    document.querySelector(".selected").classList.remove('selected');
    allBorder.classList.add('selected');
};

topBorder.onclick = function(e){
    taReview.style.borderWidth = widthBorder.value + 'px 0px 0px 0px';
    document.querySelector(".selected").classList.remove('selected');
    topBorder.classList.add('selected');

};

rightBorder.onclick = function (e) {
    taReview.style.borderWidth = '0px ' + widthBorder.value + 'px  0px 0px';
    document.querySelector(".selected").classList.remove('selected');
    rightBorder.classList.add('selected');
};

bottomBorder.onclick = function (e) {
    taReview.style.borderWidth = '0px 0px ' + widthBorder.value + 'px 0px';
    document.querySelector(".selected").classList.remove('selected');
    bottomBorder.classList.add('selected');
};

leftBorder.onclick = function (e) {
    taReview.style.borderWidth = '0px 0px 0px ' + widthBorder.value + 'px';
    document.querySelector(".selected").classList.remove('selected');
    leftBorder.classList.add('selected');
};

