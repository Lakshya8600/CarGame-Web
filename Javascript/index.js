var leftSide = document.getElementById('side1')
var RightSide = document.getElementById('side2')
var mainCar = document.getElementById('mainCar')
var r = document.querySelector(':root')
var rs = getComputedStyle(r);
var property = rs.getPropertyValue('--pos'); 

function pxremover(varvalue){
    varvalue = varvalue.replace('px', '');
    varvalue = Number(varvalue);
    return varvalue
}
function pxadder(varvalue){
    varvalue = String(varvalue);
    varvalue = varvalue.concat("px");
    return varvalue
}

property = pxremover(property);


var si ;
leftSide.addEventListener('mouseover', function movement(){
    si = setInterval(() => {
        property -= 2
        r.style.setProperty('--pos', pxadder(property));
    }, 1);
});
leftSide.addEventListener('mouseout', function movement(){
    clearInterval(si);
});

RightSide.addEventListener('mouseover', function movement2(){
    si = setInterval(() => {
        property += 2
        r.style.setProperty('--pos', pxadder(property));
    }, 1);
});
RightSide.addEventListener('mouseout', function movement2(){
    clearInterval(si);
});
