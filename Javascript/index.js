var leftSide = document.getElementById('leftSideArea')
var RightSide = document.getElementById('rightSideArea')
var mainCar = document.getElementById('mainCar')
var r = document.querySelector(':root')
var rs = getComputedStyle(r);
var property = rs.getPropertyValue('--pos'); 
var si ;

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

leftSide.addEventListener('mouseover', function movement(){
    
    si = setInterval(() => {
        if(property < 310){
            return 0;
        }
        property -= 2
        r.style.setProperty('--pos', pxadder(property));
    }, 1);
});
leftSide.addEventListener('mouseout', function movement(){
    clearInterval(si);
});

RightSide.addEventListener('mouseover', function movement2(){
    si = setInterval(() => {
        if(property > 950){
            return 0;
        }
        property += 2
        r.style.setProperty('--pos', pxadder(property));
    }, 1);
});
RightSide.addEventListener('mouseout', function movement2(){
    clearInterval(si);
});
