var rz = document.querySelector(':root')
var rsz = getComputedStyle(r);
var propertyz = rsz.getPropertyValue('--toppos'); 
var siz ;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function pxadder(varvalue){
    varvalue = String(varvalue);
    varvalue = varvalue.concat("px");
    return varvalue
}
function pxremover(varvalue){
    varvalue = varvalue.replace('px', '');
    varvalue = Number(varvalue);
    return varvalue
}
propertyz = pxremover(propertyz)
positionz = getRandomArbitrary(300, 900);

var obstacle = document.getElementById('obstacle');
var carNumber = getRandomArbitrary(0,5)
var obstaclesSrc = ["../Static/ob1.png","../Static/ob2.png","../Static/ob3.png","../Static/ob5.png","../Static/ob6.png",] 
obstacle.src = obstaclesSrc[parseInt(carNumber)];

var siz = setInterval(() => {
    propertyz += 3
    rz.style.setProperty('--toppos', pxadder(propertyz));
    if (propertyz >= 700){
        rz.style.setProperty('--toppos', "-150px");
        positionz = getRandomArbitrary(300, 900);
        obstacle.style.left = pxadder(positionz);
        propertyz = -150;
        carNumber = getRandomArbitrary(0,5)
        obstacle.src = obstaclesSrc[parseInt(carNumber)];
    }
    if(pxremover(rsz.getPropertyValue('--toppos')) > 291 && pxremover(rsz.getPropertyValue('--toppos')) < 633 && positionz+81 > property && positionz < property+86 ){
        alert('Game Over !!! Click Ok 3 times');
        window.location.href = 'index.html';
    }

}, 1);

