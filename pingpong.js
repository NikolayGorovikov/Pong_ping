"use strict";
window.addEventListener("error", function (message){
    document.getElementById("errorInfo").innerHTML = message.message;
});
document.documentElement.style.height = window.innerHeight+`px`;
document.body.style.height = window.innerHeight+`px`;
document.addEventListener(`DOMContentLoaded`, function(){
    console.log(`loaded`);
    for (let i of [`png-transparent-skull-and-crossbones-human-skull-symbolism-poison-toxicity-skull-cdr-skull-and-crossbones-human-skull-symbolism.png`, `poiso.png`, `png-transparent-joystick-game-controllers-video-game-computer-icons-xbox-360-joystick-white-electronics-text.png`,
    `png-transparent-human-behavior-line-white-line-white-text-cloak.png`, `png-transparent-fire-flame-computer-icons-combustibility-and-flammability-campfire-firefighter-photography-monochrome.png`, `png-transparent-eye-symbol-computer-icons-not-if-i-see-you-first-invisibility-eye.png`,
    `png-transparent-arrow-fast-forward-symbol-computer-icons-arrow-angle-rectangle-triangle.png`, `png-clipart-cross-ankh-ancient-egypt-egyptian-symbol-symbol-miscellaneous-cross.png`, `kisspng-computer-icons-snowflake-portable-network-graphics-39-5b80af87d04038.210824531535160199853.jpg`,
    `kisspng-computer-icons-clip-art-right-size-5b039b4dd872a4.3719566615269630218866.jpg`, `expand-icon-vector-27.jpg`, `11930734_1920.jpg`, `09257fcd181715bf177eb9f018d22315.png`, `635-6357754_heart-black-shape-comments-love-icon-png-transparent.png`, `66-663406_gatling-gun-icon-machine-gun-icon.png`]){
        let elem = document.createElement(`img`);
        elem.src = i;
    }
}, {once: true});
if (document.getElementById(`modes`).getBoundingClientRect().width == 0){
    document.getElementById(`pitch`).style.top = window.innerHeight-window.innerWidth*(3/2)*(16/18)+`px`;
    document.getElementById(`effects`).style.height = (window.innerHeight - window.innerWidth * (3 / 2) * (16 / 18)) - (55 + window.innerWidth * (3 / 40)) - 10 + `px`;
    document.querySelector(`#menu .notice`).style.height = window.innerHeight + `px`;
    if (document.getElementById(`effects`).getBoundingClientRect().height <  window.innerHeight*0.09 ){
        document.getElementById(`effects`).style.height = window.innerHeight*0.14+ `px`;
        document.getElementById(`pitch`).style.top = document.getElementById(`effects`).getBoundingClientRect().bottom + 10 + `px`;
        document.getElementById(`pitch`).style.height = window.innerHeight - (55 + window.innerWidth * 3 / 2 / 20 + window.innerHeight*0.14 + 10)*(10/15) + `px`;
        document.getElementById(`pitch`).style.width = parseFloat(document.getElementById(`pitch`).style.height)/3*2+`px`;
        document.getElementById(`pitch`).style.left = window.innerWidth/2 - parseFloat(document.getElementById(`pitch`).style.width)/2 +`px`;
        document.head.insertAdjacentHTML(`beforeend`, `<style>
            #kickerIn{
        width: calc(${document.getElementById(`pitch`).getBoundingClientRect().width}px / 5);
        height: calc(14 * (${document.getElementById(`pitch`).getBoundingClientRect().width}px / 5) / 80);
        border: calc(${document.getElementById(`pitch`).getBoundingClientRect().width}px / 120) black solid;
        border-radius: calc(${document.getElementById(`pitch`).getBoundingClientRect().width}px / 150);
        bottom: calc(${document.getElementById(`pitch`).getBoundingClientRect().width}px * 3 / 10);
        touch-action: none;
    }
    #ball{
        width: calc(${document.getElementById(`pitch`).getBoundingClientRect().width}px / 20);
        height: calc(${document.getElementById(`pitch`).getBoundingClientRect().width}px / 20);
        border: black calc(${document.getElementById(`pitch`).getBoundingClientRect().width}px / 150) solid;
    }
    #lose{
        height: calc(${document.getElementById(`pitch`).getBoundingClientRect().width}px * 3 / 10 - ${document.getElementById(`pitch`).getBoundingClientRect().width}px / 20);
    }
    .item,.itemClone{
        border-radius: calc((${document.getElementById(`pitch`).getBoundingClientRect().width}px * 3 / 2) / 150);
        width: calc(${document.getElementById(`pitch`).getBoundingClientRect().width}px / 8);
        height: calc(${document.getElementById(`pitch`).getBoundingClientRect().width}px / 20);
    }
    .effect{
        width: calc(${document.getElementById(`pitch`).getBoundingClientRect().width}px / 20);
        height: calc(${document.getElementById(`pitch`).getBoundingClientRect().width}px / 20);
        border: calc(${document.getElementById(`pitch`).getBoundingClientRect().width}px / 300) black solid;
    }
    .leftGun{
        width: calc(${document.getElementById(`pitch`).getBoundingClientRect().width}px / 60);
        height: calc(${document.getElementById(`pitch`).getBoundingClientRect().width}px / 30);
        background-color: black;
        position: absolute;
        left: calc(${document.getElementById(`pitch`).getBoundingClientRect().width}px / 120);
        bottom:  calc(14 * (${document.getElementById(`pitch`).getBoundingClientRect().width}px / 5) / 80 - (${document.getElementById(`pitch`).getBoundingClientRect().width}px / 60));
    }
    .rightGun{
        width: calc(${document.getElementById(`pitch`).getBoundingClientRect().width}px / 60);
        height: calc(${document.getElementById(`pitch`).getBoundingClientRect().width}px / 30);
        background-color: black;
        position: absolute;
        right: calc(${document.getElementById(`pitch`).getBoundingClientRect().width}px / 120);
        bottom:  calc(14 * (${document.getElementById(`pitch`).getBoundingClientRect().width}px / 5) / 80 - (${document.getElementById(`pitch`).getBoundingClientRect().width}px / 60));
    }
    .smallBall{
        width: calc(${document.getElementById(`pitch`).getBoundingClientRect().width}px / 60);
        height: calc(${document.getElementById(`pitch`).getBoundingClientRect().width}px / 60);
    }
        </style>`);
    }
}
if (document.documentElement.clientWidth< 800) document.getElementById(`modes`).style.display = `none`;
console.log(document.getElementById(`modes`).style.display, document.documentElement.clientWidth);
document.addEventListener(`keydown`, function (event){
    if (event.code === `Space` && document.getElementById(`menu`).style.display === `none`) {
        if (document.getElementById(`windowUp`).style.display !== `none`) document.querySelector(`#windowUp .closeBar`).dispatchEvent(new PointerEvent(`pointerdown`));
        document.getElementById(`menuButton`).dispatchEvent(new PointerEvent(`pointerdown`));
    }
    else if (event.code === `Space` && document.getElementById(`menu`).style.display !== `none`){
        document.querySelector(`#menu .closeBar`).dispatchEvent(new PointerEvent(`pointerdown`));
    }
    if (event.ctrlKey && event.code === `KeyX` && document.getElementById(`windowUp`).style.display === `none`){
        if (document.getElementById(`menu`).style.display !== `none`) document.querySelector(`#menu .closeBar`).dispatchEvent(new PointerEvent(`pointerdown`));
        document.querySelector(`#modes`).dispatchEvent(new PointerEvent(`pointerdown`));
    }
    else if (event.ctrlKey && event.code === `KeyX` && document.getElementById(`windowUp`).style.display !== `none`){
        document.querySelector(`#windowUp .closeBar`).dispatchEvent(new PointerEvent(`pointerdown`));
    }

});
document.addEventListener(`keydown`, function(event){if (_info.stop) event.stopImmediatePropagation()});
document.getElementById(`kickerIn`).addEventListener(`pointerdown`, mouseClick);
function keyMove(event){
    if (event.repeat) return;
    if (_info.lastOne === `ArrowRight` && _info.time && event.code === `ArrowRight`) {press(`ArrowRight`, `ArrowLeft`, event, 2*(pitch.getBoundingClientRect().width/400)); _info.lastOne = null;clearTimeout(_info.timeouter);}
    if (_info.lastOne === `ArrowLeft` && _info.time && event.code === `ArrowLeft`) {press(`ArrowLeft`, `ArrowRight`, event, (-2)*(pitch.getBoundingClientRect().width/400)); _info.lastOne = null;clearTimeout(_info.timeouter);}
    if (event.code === `ArrowRight`) {press(`ArrowRight`, `ArrowLeft`, event, pitch.getBoundingClientRect().width/400); _info.lastOne = `ArrowRight`; clearTimeout(_info.timeouter);_info.time=true; _info.timeouter = setTimeout(()=>_info.time=false, 500)}
    else if (event.code === `ArrowLeft`) {press(`ArrowLeft`, `ArrowRight`, event, -(pitch.getBoundingClientRect().width/400)); _info.lastOne = `ArrowLeft`; clearTimeout(_info.timeouter);_info.time=true; _info.timeouter = setTimeout(()=>_info.time=false, 500)}
}
let gameMode = `mouse`;
function press(arrow, secondArrow, event, num){
    clearTimeout(c);
    if (document.getElementById(`kickerIn`).style.backgroundColor === `black`) document.getElementById(`kickerIn`).style.backgroundColor = `white`;
    document.getElementById(`kickerIn`).speed = num;
    if (pressed.has(arrow)) return;
    pressed.add(event.code);
    if (pressed.has(secondArrow)) document.dispatchEvent(new KeyboardEvent(`keyup`, {key: secondArrow, code: secondArrow}));
    _info.interval = setInterval(move.bind(null, num), 6);
}
function move(n){
    let a = {vector:n};
    if (_info.moveModifier)_info.moveModifier(a);
    n =a.vector;
    let left = document.getElementById(`kickerIn`).offsetLeft+n;
    if (left < 0) left = 0;
    if (left > document.getElementById(`pitch`).getBoundingClientRect().width-document.getElementById(`kickerIn`).getBoundingClientRect().width){
        left = document.getElementById(`pitch`).getBoundingClientRect().width-document.getElementById(`kickerIn`).getBoundingClientRect().width;
    }
    if (n>0)document.getElementById(`kickerIn`).style.left = Math.ceil(left)+`px`;
    else document.getElementById(`kickerIn`).style.left = Math.floor(left)+`px`;
}
function keyUp(event){
    if (event.code === `ArrowRight`||event.code===`ArrowLeft`){
        if (pressed.has(event.code)) {
            clearInterval(_info.interval);
            pressed.delete(event.code);
        }
        if (pressed.size === 0) {
            document.getElementById(`kickerIn`).speed = 0;
            clearInterval(c);
            c = setTimeout(()=>document.getElementById(`kickerIn`).style.backgroundColor = `black`, 4000);
        }
    }
}
let c;
function moveMouse(event){
    let a = {vector:event.clientX - this[0]};
    if (_info.moveModifier)_info.moveModifier(a);
    let left = event.target.offsetLeft + a.vector;
    event.target.speed = ((left-this[1])/(Date.now()-this[2]))*3;
    this[0] = event.clientX;
    this[1] = parseFloat(event.target.style.left);
    this[2] = Date.now();
    if (left < 1) left = 0;
    if (left > document.getElementById(`pitch`).getBoundingClientRect().width-document.getElementById(`kickerIn`).getBoundingClientRect().width-1) left = document.getElementById(`pitch`).getBoundingClientRect().width-document.getElementById(`kickerIn`).getBoundingClientRect().width;
    if (_info.stop) return;
    event.target.style.left = left+`px`;
}
function mouseClick(event){
    if (!event.isPrimary) return;
    document.getElementById(`kickerIn`).style.touchAction = `none`;
    document.getElementById(`kickerIn`).style.backgroundColor = `white`;
    event.target.ondragstart = function (event){event.preventDefault()}
    let position = [event.clientX, parseFloat(event.target.style.left), Date.now()];
    document.getElementById(`kickerIn`).setPointerCapture(event.pointerId);
    let f = moveMouse.bind(position);
    document.getElementById(`kickerIn`).addEventListener(`pointermove`,f);
    document.getElementById(`kickerIn`).addEventListener(`pointerup`, (event)=>{if (!event.isPrimary) return;document.getElementById(`kickerIn`).style.backgroundColor = `black`; document.getElementById(`kickerIn`).removeEventListener(`pointermove`,f)});
}
function deleteOwnTimer(id){
    clearInterval(_info.effects.effectMoveTime[id]);
    delete _info.effects.effectMoveTime[id];
}
function removeEffectPoint(effectId){
    deleteOwnTimer(effectId);
    document.getElementById(effectId).remove();
}
function addEffectInterval(effect){
    _info.effects[effect+`Interval`] = setInterval(function (){
        if (_info.effects[effect+`Timer`] <= 0) {
            clearEffectInterval(effect);
            stopEffect(effect);
        }
        else{
            _info.effects[effect+`Timer`]-=10;
            if (isFinite(_info.effects[effect+`Timer`])) document.getElementById(effect+`Holder`).querySelector(`.timeHolder`).innerHTML = `${(_info.effects[effect+`Timer`]/1000).toFixed(1)}??????`;
            else document.getElementById(effect+`Holder`).querySelector(`.timeHolder`).innerHTML = `????????????????????`;
        }
    }, 10);
    if (_info.effects[effect+`Timer`] <= 0) {
        clearEffectInterval(effect);
        stopEffect(effect);
    }
}
function clearEffectInterval(effect){
    clearInterval(_info.effects[effect+`Interval`]);
}
function stopEffect(effect){
    _info.effects[effect+`Interval`] = undefined;
    if (typeof _info.effects[effect+`DoFinish`] === `function`) _info.effects[effect+`DoFinish`]();
    _info.effects[effect+`Timer`] = 0;
    if (document.getElementById(effect+`Holder`)) document.getElementById(effect+`Holder`).remove();
}
function removeEffect(effect){
    clearEffectInterval(effect);
    if (_info.effects[effect+`Timer`] > 0) stopEffect(effect);
}
function removeAllEffects(){
    for (let i of _info.effects.effectTypes) removeEffect(i);
}
function pauseAllEffects(){
    for (let i of _info.effects.effectTypes) clearEffectInterval(i);
}
function pauseEffects(){
    _info.effectsPaused = true;
    pauseAllEffectPoints();
    pauseAllEffects();
}
function removeEffects(){
    _info.effectsPaused = false;
    removeAllEffectPoints();
    removeAllEffects();
    _info.effects.effectAmount = 0;
}
function restoreEffects(){
    _info.effectsPaused = false;
    restoreAllEffectPoints();
    restoreAllEffects();
}
function removeAllEffectPoints(){
    for (let i in _info.effects.effectMoveTime) removeEffectPoint(i);
}
function pauseAllEffectPoints(){
    for (let i in _info.effects.effectMoveTime) clearInterval(_info.effects.effectMoveTime[i]);
}
function restoreAllEffects(){
    for (let i of _info.effects.effectTypes) {
        if (_info.effects[i+`Timer`] > 0) {
            addEffectInterval(i);
        }
    }
}
function restoreAllEffectPoints(){
    for (let i of document.getElementsByClassName(`effect`)){
        _info.effects.effectMoveTime[i.id] = setInterval(moveEffectDown.bind(null, i.id), 6);
    }
}
function effect(type, timeEffect = _info.effects[type+`Time`]){
    let time = _info.effects[type+`Timer`];
    _info.effects[type+`Timer`] += timeEffect;
    if (_info.effects[type+`MaxTime`] < _info.effects[type+`Timer`]) _info.effects[type+`Timer`] -= timeEffect;
    if (time <= 0){
        let descriptor = `<div class="effectInfo" id="${type}Holder"><div><div class="effectImg ${type}"></div><div class="effectText"><h1>${_info.effects[type+`MainName`]}</h1><p class="timeCenter"><span class="forPC">${_info.effects[type+`Description`]}: </span><span class="timeHolder">${(_info.effects[type+`Timer`]/1000).toFixed(1)}??????</span></p><div></div>`;
        document.getElementById(`effects`).insertAdjacentHTML(`beforeend`, descriptor);
        // document.getElementById(`${type}Holder`).scrollIntoView(true);
        // ???????????????? ?????? ?????????? ???? ???????????? ????????????????????????
        if (document.getElementById(`${type}Holder`).querySelector(`.timeHolder`).innerHTML === `Infinity??????`) document.getElementById(`${type}Holder`).querySelector(`.timeHolder`).innerHTML = `????????????????????`;
        if (typeof _info.effects[type+`Do`] === `function`) _info.effects[type+`Do`]();
        addEffectInterval(type);
    }
}
function checkForDesk(effectId, elem, elemTouch){
    if (elemTouch.id === `kickerIn`) {
        deleteOwnTimer(effectId);
        effect(elem.dataset.effectfunc);
        elem.remove();
        return true
    }
    else if (elemTouch.id===`lose`) {
        removeEffectPoint(effectId);
        return true
    }
}
function moveEffectDown(effectId){
    let elem = document.getElementById(`${effectId}`);
    if (checkForDesk(effectId, elem, document.elementFromPoint(elem.getBoundingClientRect().x, elem.getBoundingClientRect().bottom))) return;
    else if (checkForDesk(effectId, elem, document.elementFromPoint(elem.getBoundingClientRect().right, elem.getBoundingClientRect().bottom))) return;
    else{
        elem.style.display = `block`;
        elem.style.top=parseFloat(elem.style.top)+1.5*(pitch.getBoundingClientRect().width/400)+`px`;
    }
}
function beginBoard() {
    let newWidth = parseFloat(document.getElementById(`kickerIn`).style.left) + document.getElementById(`kickerIn`).getBoundingClientRect().width*1.4*(6/7);
    if (newWidth< document.getElementById(`pitch`).getBoundingClientRect().width && parseFloat(document.getElementById(`kickerIn`).style.left)> document.getElementById(`kickerIn`).getBoundingClientRect().width*0.7) {
        document.getElementById(`kickerIn`).style.width = document.getElementById(`kickerIn`).getBoundingClientRect().width*1.4 + `px`;
        document.getElementById(`kickerIn`).style.left = parseFloat(document.getElementById(`kickerIn`).style.left) - parseFloat(document.getElementById(`kickerIn`).style.width)*(1/7)+`px`;
    }
    else if (newWidth> document.getElementById(`pitch`).getBoundingClientRect().width){
        document.getElementById(`kickerIn`).style.width = document.getElementById(`kickerIn`).getBoundingClientRect().width*1.4 + `px`;
        document.getElementById(`kickerIn`).style.left = document.getElementById(`pitch`).getBoundingClientRect().width - parseFloat(document.getElementById(`kickerIn`).style.width) + `px`;
    }
    else{
        document.getElementById(`kickerIn`).style.width = document.getElementById(`kickerIn`).getBoundingClientRect().width*1.4 + `px`;
        document.getElementById(`kickerIn`).style.left = 0;
    }
}
function endBoard(){
    document.getElementById(`kickerIn`).style.width= parseFloat(document.getElementById(`kickerIn`).style.width)*(5/7) + `px`;
    if (parseFloat(document.getElementById(`kickerIn`).style.left)+parseFloat(document.getElementById(`kickerIn`).style.width)+parseFloat(document.getElementById(`kickerIn`).style.width)/(5/7)*(1/7) < document.getElementById(`pitch`).getBoundingClientRect().width){
        document.getElementById(`kickerIn`).style.left = parseFloat(document.getElementById(`kickerIn`).style.left) + parseFloat(document.getElementById(`kickerIn`).style.width)/(5/7)*(1/7)+`px`;
    }
    else{
        document.getElementById(`kickerIn`).style.left = document.getElementById(`pitch`).getBoundingClientRect().width - parseFloat(document.getElementById(`kickerIn`).style.width);
    }
}
class Effect{
    constructor(name, time, funcBegin, funcEnd,mainName, description = `????????????????`,maxTime = Infinity) {
        this[name] = function (top, left, height, width, unknown){
            console.log(left, top);
            let elem = `<div class="effect ${name} noHit" data-effectFunc="${name}" id="effect${this.effectAmount}" style="left:${(parseFloat(left)*2+parseFloat(width))/2-pitch.getBoundingClientRect().width/20/2}px; top: ${(parseFloat(top)*2+parseFloat(height))/2-pitch.getBoundingClientRect().width/20/2}px;"></div>`;
            if (unknown) elem.classList.remove(name);
            this.effectMoveTime[`effect`+this.effectAmount] = setInterval(moveEffectDown.bind(null, `effect`+this.effectAmount), 6);
            ++this.effectAmount;
            return elem;
        };
        this[name+`Time`]=  time;
        this[name+`Timer`]= 0;
        this[name+`Interval`]= undefined;
        this[name+`Do`] = funcBegin;
        this[name+`DoFinish`] = funcEnd;
        this[name+`MaxTime`] = maxTime;
        this[name+`MainName`] = mainName;
        this[name+`Description`] = description;
        console.log(arguments);
        _info.effects.effectTypes.push(name);
    }
}
function ballSpeedBegin(){
    _info.vector[0] = _info.vector[0]*1.4;
    _info.vector[1] = _info.vector[1]*1.4;
    _info.vectorSpeed = _info.vector[1]*_info.vector[1]+_info.vector[0]*_info.vector[0];
    _info.maxLeft = _info.vectorSpeed*(7/8);
    console.log(_info.maxLeft);
}
function ballSpeedEnd(){
    _info.vector[0] = _info.vector[0]*5/7;
    _info.vector[1] = _info.vector[1]*5/7;
    _info.vectorSpeed = _info.vector[1]*_info.vector[1]+_info.vector[0]*_info.vector[0];
    _info.maxLeft = _info.vectorSpeed*(7/8);
}
let pressed = new Set();
let pitch = document.getElementById(`pitch`);
let _info = {time: false, timeouter: false, vector: [(pitch.getBoundingClientRect().height/270)/Math.SQRT2, (pitch.getBoundingClientRect().height/270)/Math.SQRT2], moved: false, effects: {
    effectMoveTime:{}, effectAmount: 0, effectTypes: []}, maxLeft: (pitch.getBoundingClientRect().height/270)*(pitch.getBoundingClientRect().height/270)*7/8, vectorSpeed: (pitch.getBoundingClientRect().height/270)*(pitch.getBoundingClientRect().height/270), onHitItemFunc: new Set(), boomRadix: 32*(pitch.getBoundingClientRect().width/400), data:{},
    moveModifier: undefined, jumpModifier: undefined, kf: 1, intervals:new Set()
};
function freezeDeskBegin(){
    clearInterval(_info.interval);
    _info.stop = true;
}
function freezeDeskEnd(){
    _info.stop = false;
}
function boomRemove(cords){
    let item = document.elementFromPoint(cords[0], cords[1]);
    if (item?.classList?.contains(`item`)) elemTouch(item, true);
    // document.body.insertAdjacentHTML(`beforebegin`, `<div style="z-index: 1000; left: ${cords[0]}px; top: ${cords[1]}px; background-color: red; position: absolute; width: 3px; height: 3px;"></div>`);
}
function sin(a){
    if (a === 0) return 0;
    if (a === 30) return 0.5;
    if (a === 60) return Math.sqrt(3)/2;
    if (a === 90) return 1;
}
function boomSquare(radix, elem, center){
    for (let i = 0; i< 91; i+=30){
        let a = sin(i)*radix;
        let b = sin(90-i)*radix;
        boomRemove([center[0]+a, center[1]+b]);
        boomRemove([center[0]+a, center[1]-b]);
        boomRemove([center[0]-a, center[1]+b]);
        boomRemove([center[0]-a, center[1]-b]);
    }
}
function mainBoom(elem){
    let center = [elem.getBoundingClientRect().width/2+elem.getBoundingClientRect().x, elem.getBoundingClientRect().height/2+elem.getBoundingClientRect().y];
    console.log(elem.getBoundingClientRect().width/2+elem.getBoundingClientRect().x);
    let i = _info.boomRadix/6;
    let j = _info.boomRadix/6;
    let a = setInterval(()=>{
        boomSquare(i, elem, center);
        if (i<=_info.boomRadix) i+=j;
        else {
            clearInterval(a);
            _info.intervals.delete(a);
        }
    }, 50);
    _info.intervals.add(a);
}
function boomBegin(){
    removeEffect(`ramBehaviour`);
    _info.onHitItemFunc.add(mainBoom);
    ball.style.backgroundColor = `black`;
}
function boomEnd(){
    _info.onHitItemFunc.delete(mainBoom);
    ball.style.backgroundColor = `white`;
}
function ramBegin(){
    removeEffect(`boomHit`);
    _info.onHitItemFunc.add(mainRam);
    ball.style.backgroundColor = `red`;
    ball.style.borderColor=`red`;
}
function ramEnd(){
    _info.onHitItemFunc.delete(mainRam);
    ball.style.backgroundColor = `white`;
    ball.style.borderColor=``;
}
function mainRam(){
    _info.vector = [].concat(_info.previousVector);
}
_info.addNewEffect = function (name, time, fBegin, fEnd, mainName, descriprion, maxTime) {
    Object.assign(_info.effects, new Effect(name, time, fBegin, fEnd,mainName, descriprion, maxTime));
}
function hideItemsBegin(){
    document.querySelectorAll(`.item`).forEach((i)=>{i.dataset.specialColor = i.style.backgroundColor; i.style.backgroundColor = `transparent`;});
    _info.visible = `hidden`;
}
function hideItemsEnd(){
    document.querySelectorAll(`.item`).forEach((i)=>{
        if (i.dataset.specialColor) i.style.backgroundColor = i.dataset.specialColor
        else makeColor(i);
    });
    _info.visible = `visible`;
}
function biggerBallBegin(){
    console.log(ball.style.width,ball.style.height);
    ball.style.width = ball.getBoundingClientRect().width*1.4+`px`;
    ball.style.height = ball.getBoundingClientRect().height*1.4+`px`;
    console.log(ball.style.width,ball.style.height);
    ball.style.left = parseFloat(ball.style.left) - (1/7)*parseFloat(ball.style.width)+`px`;
    ball.style.top = parseFloat(ball.style.top) - (1/7)*parseFloat(ball.style.height)+`px`;
    if (parseFloat(ball.getBoundingClientRect().top < pitch.getBoundingClientRect().top)) ball.style.top = `0px`;
    if (parseFloat(ball.getBoundingClientRect().left < pitch.getBoundingClientRect().left)) ball.style.left = `0px`;
    if (parseFloat(ball.getBoundingClientRect().right > pitch.getBoundingClientRect().right)) ball.style.left = pitch.getBoundingClientRect().width-ball.getBoundingClientRect().width+`px`;
}
function biggerBallEnd(){
    ball.style.left = parseFloat(ball.style.left) + (1/7)*parseFloat(ball.style.width)+`px`;
    ball.style.top = parseFloat(ball.style.top) + (1/7)*parseFloat(ball.style.height)+`px`;
    console.log(ball.style.width,ball.style.height);
    ball.style.width = parseFloat(ball.style.width)/1.4+`px`;
    ball.style.height = parseFloat(ball.style.height)/1.4+`px`;
    console.log(ball.style.width,ball.style.height);
    if (parseFloat(ball.getBoundingClientRect().top < pitch.getBoundingClientRect().top)) ball.style.top = `0px`;
    if (parseFloat(ball.getBoundingClientRect().left < pitch.getBoundingClientRect().left)) ball.style.left = `0px`;
    if (parseFloat(ball.getBoundingClientRect().right > pitch.getBoundingClientRect().right)) ball.style.left = pitch.getBoundingClientRect().width-ball.getBoundingClientRect().width+`px`;
}
function skipPoison(){
    for (let i of document.querySelectorAll(`[data-poisoned]`)) {
        i.style.background = i.dataset.specialColor;
        i.removeAttribute(`data-poisoned`);
    }
}
function randomItems(){
    let avaliableItems = new Set(document.querySelectorAll(`.item`));
    if (avaliableItems.size>5){
        for (let i = 0;i<5; i++) {
            let elem = Array.from(avaliableItems)[randomInteger(0, avaliableItems.size-1)]
            elem.dataset.poisoned = true;
            avaliableItems.delete(elem);
        }
    }
    else{
        for (let i of avaliableItems) i.dataset.poisoned = true;
    }
    for (let i of document.querySelectorAll(`[data-poisoned]`)) {
        i.dataset.specialColor = getComputedStyle(i).background;
        i.style.backgroundColor = `#358634`;
        i.style.backgroundImage = `url("poiso.png")`;
        i.style.backgroundPosition = `center center`;
        i.style.backgroundSize = `auto 90%`;
        i.style.backgroundRepeat=`no-repeat`;
    }
    document.addEventListener(`lose`, skipPoison);
}
function removePoisonedItems(){
    document.removeEventListener(`lose`, skipPoison);
    for (let i of document.querySelectorAll(`[data-poisoned]`)) elemTouch(i, true);
}
let regen = ()=>++_info.hearts;
function brokenBegin(){
    _info.moveModifier = function(a){
        a.vector = -a.vector;
    }
}
function brokenEnd(){
    _info.moveModifier = undefined;
}
function brokenJumpBegin(){
    _info.jumpModifier = function (elem) {
        if (elem.id === `kickerIn`) _info.vector[0] = -_info.vector[0];
    }
}
function brokenJumpEnd(){
    _info.jumpModifier = undefined;
}
function gunAdd() {
    if (_info.effectsPaused) return;
    if (_info.data.i%2-1) {
        let elem = `<div class="smallBall noHit" style="left: ${parseFloat(document.getElementById(`kickerIn`).style.left)+parseFloat(getComputedStyle(document.querySelector(`.leftGun`)).left) + pitch.getBoundingClientRect().width/120}px; top: ${parseFloat(getComputedStyle(document.getElementById(`kickerIn`)).top)-pitch.getBoundingClientRect().width/20}px;"></div>`;
        document.getElementById(`pitch`).insertAdjacentHTML(`beforeend`,elem);
    }
    else{
        let elem = `<div class="smallBall noHit" style="left: ${parseFloat(document.getElementById(`kickerIn`).style.left)+parseFloat(getComputedStyle(document.querySelector(`.rightGun`)).left)+pitch.getBoundingClientRect().width/120}px; top: ${parseFloat(getComputedStyle(document.getElementById(`kickerIn`)).top)-20}px;"></div>`;
        document.getElementById(`pitch`).insertAdjacentHTML(`beforeend`,elem);
    }
    _info.data.i++;
}
function deskGunBegin(){
    _info.data.gunStart = true;
    document.getElementById(`kickerIn`).insertAdjacentHTML(`afterbegin`, `<div class="leftGun noHit"></div><div class="rightGun noHit"></div>`);
    _info.data.i = 0;
    _info.data.gunInterval = setInterval(gunAdd, 150);
    _info.data.gunInterval2 = setInterval(moveAllGun, 16);
}
function moveAllGun(){
    if (!document.querySelectorAll(`.smallBall`).length && !_info.data.gunStart){
        clearInterval(_info.data.gunInterval2);
        return;
    }
    for (let i of document.querySelectorAll(`.smallBall`)){
        (function (elem){
            if (parseFloat(elem.style.top)<0) {elem.remove(); return;}
            let item = document.elementFromPoint(elem.getBoundingClientRect().right, elem.getBoundingClientRect().y)
            if (item.classList.contains(`item`)) {elemTouch(item, true);elem.remove();return}
            item = document.elementFromPoint(elem.getBoundingClientRect().x, elem.getBoundingClientRect().y)
            if (item.classList.contains(`item`)) {elemTouch(item, true);elem.remove();return}
            elem.style.top = parseFloat(elem.style.top)-3*1.6*(pitch.getBoundingClientRect().width/400)+`px`;
        })(i);
    }
}
let deskGunEnd = function () {
    _info.data.gunStart = false;
    clearInterval(_info.data.gunInterval);
    document.getElementById(`kickerIn`).innerHTML = ``;
}
document.addEventListener(`lose`, function (){
    if (!_info.data.gunStart) return;
    for (let i of document.querySelectorAll(`.smallBall`)) i.remove();
});
document.addEventListener(`reset`, function (){
    if (!_info.data.gunStart) return;
    for (let i of document.querySelectorAll(`.smallBall`)) i.remove();
});
document.addEventListener(`pause`,function (){
    console.log(`pause??`, !_info.data.gunStart);
    if (!_info.data.gunStart) return;
    console.log(`stopped??`);
    clearInterval(_info.data.gunInterval);
    clearInterval(_info.data.gunInterval2);
});
document.addEventListener(`resetGame`, function () {
    if (!_info.data.gunStart) return;
    _info.data.gunInterval = setInterval(gunAdd, 200);
    _info.data.gunInterval2 = setInterval(moveAllGun, 16);
})
// _info.addNewEffect(`brokenJump`, 8000, brokenJumpBegin, brokenJumpEnd);
_info.addNewEffect(`deskGun`, 6000, deskGunBegin, deskGunEnd, `??????????-??????????????`);
_info.addNewEffect(`brokenGame`, 8000, brokenBegin, brokenEnd, `?????????????????? ????????`);
_info.addNewEffect(`poison`, 5000, randomItems, removePoisonedItems, `???????????????? ??????`, `?????????? ???????????? ??????????`, 5000);
_info.addNewEffect(`noDead`, 10000, ()=>document.addEventListener(`lose`, regen), ()=>document.removeEventListener(`lose`, regen), `??????????????????????`);
_info.addNewEffect(`biggerBall`, 10000, biggerBallBegin, biggerBallEnd, `?????????????? ??????`);
_info.addNewEffect(`extraLife`, 0, ()=>{if (_info.hearts<3) document.getElementById(`hearts`).querySelector(`span`).innerHTML = ++_info.hearts;}, null, `??????. ??????????`);
_info.addNewEffect(`hideItems`, 5000,hideItemsBegin,hideItemsEnd, `?????????????????? ??????????`);
_info.addNewEffect(`ramBehaviour`, 5000, ramBegin, ramEnd, `???????????????? ??????`);
_info.addNewEffect(`boomHit`, 10000, boomBegin, boomEnd, `??????-??????????`);
_info.addNewEffect(`doubleScore`,8000, ()=>{for (let i of document.querySelectorAll(`.item`)) i.dataset.score*=2; _info.kf = 2}, ()=>{for (let i of document.querySelectorAll(`.item`)) i.dataset.score/=2; _info.kf = 1}, `?????????????? ????????`);
_info.addNewEffect(`freezeDesk`, 2000, freezeDeskBegin, freezeDeskEnd, `?????????????????????? ??????????`);
_info.addNewEffect(`ballInvisibility`, 3000, ()=>ball.style.visibility = `hidden`, ()=>ball.style.visibility = `visible`, `?????????????????? ??????`);
_info.addNewEffect(`ballExtraSpeed`, 8000, ballSpeedBegin, ballSpeedEnd, `?????????????? ??????`, );
_info.addNewEffect(`biggerDesk`, 10000, beginBoard, endBoard, `?????????????? ??????????`, );
let ball = document.getElementById(`ball`);
_info.hearts = 3;
_info.pitches = [];
for (let i of _info.effects.effectTypes){
    let mainName = _info.effects[i+`MainName`];
    _info.pitches.unshift(new Function(`mainName`,
        "    _info.hearts = 3;\n" +
        "    _info.levelName = `${mainName}`;\n" +
        "    for (let i= 0; i<8; i++){\n" +
        "        for (let j = 0; j<10; j++) document.getElementById(`pitch`).insertAdjacentHTML(`afterbegin`,`<div class=\"item\" data-score=\"100\" style=\"left: calc(${i} * (2 / 3) * ${pitch.getBoundingClientRect().height}px / 8); top: calc(${j} * ${pitch.getBoundingClientRect().height}px / 30); width: ${pitch.getBoundingClientRect().width/8}px; height:${pitch.getBoundingClientRect().width/20}px; \"></div>`);\n" +
        "    }\n" +
        "    for (let i of document.querySelectorAll(`.item`)) if (randomInteger(0,1)===randomInteger(0,1)) i.dataset.effecttype = this;"
    ).bind(i, mainName));
}
_info.actualPitch = _info.pitches[0];
function removeAll(){
    document.getElementById(`score`).innerHTML = `0`;
    let a =document.querySelectorAll(`.item`);
    for (let i of a) {i.remove();}
    console.log(document.querySelectorAll(`.itemClone`));
    for (let i of document.querySelectorAll(`.itemClone`)) i.remove();
}
_info.num = 0;
function makeColor(elem){
    elem.style.backgroundColor = `#`+String((randomInteger(100000, 13677215)).toString(16)).padEnd(6, `0`);
}
function giveColors(elements){
    for (let i of elements) makeColor(i);
}
let func2 = (event)=>{
    if (_info.moved) return;
    if (event.repeat && gameMode === `arrow` || (event.code === `KeyX` && event.ctrlKey) || event.code === `Space` || event.ctrlKey) {
        document.addEventListener(`keydown`, func2, {once: true});
        return;
    }
    _info.moved = true;
    _info.lose=false ;
    a = setInterval(()=>{
        ballMove(_info.vector); checkTouch([ball.getBoundingClientRect().x, ball.getBoundingClientRect().y], _info.vector)
    }, 6);
    if (_info.infiniteMode) infiniteTimeout = setInterval(addRandom, infiniteTime);
};
function reset(i){
    document.dispatchEvent(new Event(`reset`));
    _info.lose = true;
    _info.moved = false;
    _info.stop = false;
    _info.infiniteTime = 0;
    _info.infinityEffects.clear();
    _info.actualDifficulty = 0;
    clearInterval(a);
    for (let i of _info.intervals) clearInterval(i);
    _info.intervals.clear();
    document.getElementById(`hearts`).querySelector(`span`).innerHTML = 3;
    _info.hearts = 3;
    ball.style.display = `block`;
    ball.style.left = `calc(((2 / 3) * ${pitch.getBoundingClientRect().height}px - ${ball.getBoundingClientRect().width}px) / 2)`;
    ball.style.bottom= document.getElementById(`kickerIn`).getBoundingClientRect().height + parseFloat(getComputedStyle(document.getElementById(`kickerIn`)).bottom)+`px`;
    document.getElementById(`kickerIn`).style.left = pitch.getBoundingClientRect().width/2 - document.getElementById(`kickerIn`).getBoundingClientRect().width/2+`px`;
    if (i) removeAll();
    removeEffects();
    _info.vectorSpeed= (pitch.getBoundingClientRect().height/270)*(pitch.getBoundingClientRect().height/270);
    _info.vector = [Math.sqrt(_info.vectorSpeed)/Math.SQRT2, Math.sqrt(_info.vectorSpeed)/Math.SQRT2];
    _info.previousVector = [].concat(_info.vector);
    _info.maxLeft = _info.vectorSpeed*7/8;
    _info.actualPitch();
    document.getElementById(`levelName`).innerText = _info.levelName;
    giveColors(document.querySelectorAll(`.item`));
    if (gameMode === `arrow`) {
        document.removeEventListener(`keydown`, func2, {once:true});
        document.addEventListener(`keydown`, func2, {once:true});
    }
    if(gameMode === `mouse`) {
        document.getElementById(`kickerIn`).removeEventListener(`pointerdown`, func2, {once:true});
        document.getElementById(`kickerIn`).addEventListener(`pointerdown`, func2, {once:true});
    }
    document.getElementById(`score`).innerHTML=`0`;
    _info.stop= false;
    dispatches();
}
function dispatches(){
    document.getElementById(`kickerIn`).dispatchEvent(new PointerEvent(`pointerup`, {isPrimary: true}));
    document.dispatchEvent(new KeyboardEvent(`keyup`, {key: `ArrowLeft`, code: `ArrowLeft`}));
    document.dispatchEvent(new KeyboardEvent(`keyup`, {key: `ArrowRight`, code: `ArrowRight`}));
}
function touch(elem){
    if (!elem || _info.lose) return;
    if (elem.id === `lose`) {
        clearInterval(infiniteTimeout);
        _info.moved=false;
        _info.stop = true;
        _info.vector = [Math.sqrt(_info.vectorSpeed/2), -Math.sqrt(_info.vectorSpeed/2)];
        --_info.hearts;
        document.dispatchEvent(new Event(`lose`));
        document.getElementById(`hearts`).querySelector(`span`).innerHTML = _info.hearts;
        ball.style.display = `block`;
        dispatches();
        if (_info.hearts === 0){
            if (Number(document.getElementById(`record`).innerHTML) < Number(document.getElementById(`score`).innerHTML) && _info.infiniteMode) document.getElementById(`record`).innerHTML = document.getElementById(`score`).innerHTML;
            reset(true);
            return;
        }
        removeEffects();
        for (let i of _info.infinityEffects) effect(i, Infinity);
        console.log(_info.infinityEffects);
        ball.style.left = `calc(((2 / 3) * ${pitch.getBoundingClientRect().height}px - ${ball.getBoundingClientRect().width}px) / 2)`;
        ball.style.bottom= document.getElementById(`kickerIn`).getBoundingClientRect().height + parseFloat(getComputedStyle(document.getElementById(`kickerIn`)).bottom)+`px`;
        document.getElementById(`kickerIn`).style.left = `calc(((2 / 3) * ${pitch.getBoundingClientRect().height}px) / 2 - ${document.getElementById(`kickerIn`).getBoundingClientRect().width}px / 2)`;
        clearInterval(a);
        _info.stop=false;
        if (gameMode === `arrow`) document.addEventListener(`keydown`, func2, {once:true});
        if (gameMode === `mouse`) document.getElementById(`kickerIn`).addEventListener(`pointerdown`, func2,{once:true});
    }
    else if (elem.classList.contains(`item`)) {
        elemTouch(elem);
    }
    if (_info.jumpModifier) _info.jumpModifier(elem);
}
function elemTouch(elem, preventEffects){
    if (!_info.moved) return;
    document.getElementById(`score`).innerHTML = Number(document.getElementById(`score`).innerHTML)+Number(elem.dataset.score);
    console.log(Number(document.getElementById(`record`).innerHTML), Number(document.getElementById(`score`).innerHTML));
    if (Number(document.getElementById(`record`).innerHTML) < Number(document.getElementById(`score`).innerHTML) && _info.infiniteMode) document.getElementById(`record`).innerHTML = document.getElementById(`score`).innerHTML;
    if (_info.infiniteMode){
        freePlaceSet.add(Number((parseFloat(elem.style.left)/(pitch.getBoundingClientRect().width/8)).toFixed(0))+8*(parseFloat(elem.style.top)/(pitch.getBoundingClientRect().width/20)).toFixed(0));

    }
    if (elem.matches(`[data-effecttype]`)){
        if (_info.unknownEffect) var unknown = true;
        document.getElementById(`pitch`).insertAdjacentHTML(`beforeend`, _info.effects[elem.dataset.effecttype](elem.offsetTop, elem.offsetLeft, elem.getBoundingClientRect().height, elem.getBoundingClientRect().width, unknown));
    }
    if (_info.onHitItemFunc.size && !preventEffects){
        for (let j of _info.onHitItemFunc){
            j(elem);
        }
    }
    elem.classList.remove(`item`);
    elem.classList.add(`itemClone`, `noHit`);
    setTimeout(()=>{elem.style.transform = `scale(0)`; setTimeout(()=>elem.remove(), 400)}, 0);
    if (!document.querySelector(`.item`) && !_info.infiniteMode) {
        _info.actualPitch = _info.pitches[++_info.num];
        if (_info.num === _info.pitches.length) {
            _info.actualPitch = _info.pitches[0];
            _info.num = 0;
        }
        reset(true);
    }
}
function ballMove(vector){
    document.getElementById(`ball`).style.left = ball.getBoundingClientRect().left-pitch.getBoundingClientRect().left+vector[0]+`px`;
    document.getElementById(`ball`).style.bottom = parseFloat(getComputedStyle(ball).bottom)+vector[1]+`px`;
}
let gameModeFunc = {
    arrowClear: [{function: keyMove, listener: document, special: {}, event: `keydown`}, {function: keyUp, listener: document, special: {}, event: `keyup`}, {function: func2, listener: document, special: {once: true}, event: `keydown`}],
    arrowAdd: [{function: keyMove, listener: document, special: {}, event: `keydown`}, {function: keyUp, listener: document, special: {}, event: `keyup`}, {function: func2, listener: document, special: {once: true}, event: `keydown`}],
    mouseClear:[{function: mouseClick, listener:document.getElementById(`kickerIn`), special: {}, event:`pointerdown`}, {function: func2, listener: document.getElementById(`kickerIn`), special: {once: true}, event: `pointerdown`},],
    mouseAdd: [{function: mouseClick, listener:document.getElementById(`kickerIn`), special: {}, event:`pointerdown`}, {function: func2, listener: document.getElementById(`kickerIn`), special: {once: true}, event: `pointerdown`}]
}
function pauseGame(){
    console.log(`pauses`);
    clearInterval(n);
    clearTimeout(g);
    clearTimeout(r);
    clearInterval(infiniteTimeout);
    _info.stop = true;
    document.dispatchEvent(new Event(`pause`));
    document.getElementById(`kickerIn`).dispatchEvent(new PointerEvent(`pointerup`, {isPrimary:true}));
    document.getElementById(`timer`).style.display = `none`;
    clearInterval(a);
    pauseEffects();
}
document.getElementById(`modes`).addEventListener(`pointerdown`, function (){
    pauseGame();
    document.getElementById(`windowUp`).style.display = ``;
});
document.querySelector(`#windowUp .closeBar`).addEventListener(`pointerdown`, function (){
    document.getElementById(`windowUp`).style.display = `none`;
    _info.stop = false;
    let value;
    if (document.querySelector(`form`).firstElementChild.checked) value = document.querySelector(`form`).firstElementChild.value;
    else if (document.querySelector(`form`).lastElementChild.checked) value = document.querySelector(`form`).lastElementChild.value;
    if (value !== gameMode){
        for (let i of gameModeFunc[gameMode+`Clear`]){
            i.listener.removeEventListener(i.event, i.function, i.special);
        }
        for (let i of gameModeFunc[value+`Add`]){
            i.listener.addEventListener(i.event, i.function, i.special);
        }
        gameMode = value;
    }
    console.log(_info.moved);
    if (_info.moved){
        resetGame();
    }
    else{
        _info.stop = false;
    }
});
function randomInteger(min, max) {
    let rand = (min - 0.5 + Math.random() * (max - min + 1));
    return Math.round(rand);
}
function checkTouch(position, vector){
    let width = ball.getBoundingClientRect().width;
    document.getElementById(`ball`).style.display = `none`;
    try{
        if (vector[1]>0){
            let elem = document.elementFromPoint(position[0]+width/2, position[1])
            if (elem !== pitch && !elem?.classList?.contains(`noHit`)) {_info.previousVector = [].concat(_info.vector); _info.vector[1]=-_info.vector[1]; touch(elem)}
        }
        else{
            let elem = document.elementFromPoint(position[0]+width/2, position[1]+width);
            if (elem !== pitch && !elem.classList.contains(`noHit`)) {
                _info.previousVector = [].concat(_info.vector);
                if (elem.speed && (_info.vector[0]-elem.speed)*(_info.vector[0]-elem.speed) <= _info.maxLeft){
                    _info.vector[0]=_info.vector[0]-elem.speed;
                    if (gameMode === `arrows` && elem.speed!== 0 && _info.vector[0]>0) _info.vector[0]+=Math.random()/4;
                    else if (gameMode === `arrows` && elem.speed!== 0 && _info.vector[0]<0) _info.vector[0]+=Math.random()/4;
                    if (_info.vector[1]>0){
                        _info.vector[1]=-Math.sqrt(_info.vectorSpeed- _info.vector[0]*_info.vector[0]);
                    }
                    else{
                        _info.vector[1]=Math.sqrt(_info.vectorSpeed- _info.vector[0]*_info.vector[0]);
                    }
                }
                else if(elem.speed && (_info.vector[0]-elem.speed)*(_info.vector[0]-elem.speed) > _info.maxLeft){
                    if (elem.speed >0) _info.vector[0] = -Math.sqrt(_info.maxLeft);
                    else _info.vector[0] = Math.sqrt(_info.maxLeft);
                    if (_info.vector[1]>0){
                        _info.vector[1]=-Math.sqrt(_info.vectorSpeed- _info.vector[0]*_info.vector[0]);
                    }
                    else{
                        _info.vector[1]=Math.sqrt(_info.vectorSpeed- _info.vector[0]*_info.vector[0]);
                    }
                }

                else{
                    _info.vector[1]=-_info.vector[1];
                }
                touch(elem);
            }
        }
        if (vector[0]>0){
            let elem = document.elementFromPoint(position[0]+width, position[1]+width/2)
            if (elem !== pitch && !elem?.classList?.contains(`noHit`)) {_info.previousVector = [].concat(_info.vector);_info.vector[0]=-_info.vector[0]; touch(elem)}
        }
        else{
            let elem = document.elementFromPoint(position[0], position[1]+width/2)
            if (elem !== pitch && !elem?.classList?.contains(`noHit`)) {_info.previousVector = [].concat(_info.vector);_info.vector[0]=-_info.vector[0]; touch(elem)}
        }
        if (vector[1] > 0 && vector[0] > 0){
            let elem = document.elementFromPoint(position[0]+width/2+width/2/Math.SQRT2, position[1] + width/2 - width/2/Math.SQRT2);
            if (elem !== pitch && !elem?.classList?.contains(`noHit`)) {_info.previousVector = [].concat(_info.vector); vector[1]=-vector[1]; vector[0]=-vector[0]; touch(elem);}
        }
        else if (vector[1] > 0 && vector[0] < 0){
            let elem = document.elementFromPoint(position[0]+width/2-width/2/Math.SQRT2, position[1] + width/2 - width/2/Math.SQRT2);
            if (elem !== pitch && !elem?.classList?.contains(`noHit`)) {_info.previousVector = [].concat(_info.vector); vector[1]=-vector[1]; vector[0]=-vector[0]; touch(elem);}
        }
        else if (vector[1] < 0 && vector[0] > 0){
            let elem = document.elementFromPoint(position[0]+width/2+width/2/Math.SQRT2, position[1] + width/2 + width/2/Math.SQRT2);
            if (elem !== pitch && !elem?.classList?.contains(`noHit`)) {_info.previousVector = [].concat(_info.vector); vector[1]=-vector[1]; vector[0]=-vector[0]; touch(elem);}
        }
        else if (vector[1] < 0 && vector[0] < 0){
            let elem = document.elementFromPoint(position[0]+width/2-width/2/Math.SQRT2, position[1] + width/2 + width/2/Math.SQRT2)
            if (elem !== pitch && !elem?.classList?.contains(`noHit`)) {_info.previousVector = [].concat(_info.vector); vector[1]=-vector[1]; vector[0]=-vector[0]; touch(elem);}
        }
    }
    catch (error){
        console.log(n);
        throw error;
    }
    if (_info.lose) return;
    document.getElementById(`ball`).style.display = `block`;
}
let a;
giveColors(document.querySelectorAll(`.item`));
function MakeLevel(number){
    let elem = document.createElement(`div`);
    elem.innerHTML = number;
    elem.className = `level`;
    return elem;
}
let n, g, r;
function resetGame(){
    let i = 3;
    document.getElementById(`timer`).innerHTML = ``;
    document.getElementById(`timer`).style.display = `block`;
    _info.stop = false;
    n = setInterval(()=>{
        document.getElementById(`timer`).innerHTML = `${i--}`;
        console.log(i);
        if (i === 0) {
            clearInterval(n);
            r = setTimeout(()=>{
                a = setInterval(()=>{
                    ballMove(_info.vector);
                    checkTouch([ball.getBoundingClientRect().x, ball.getBoundingClientRect().y], _info.vector)
                }, 6);
                if (_info.infiniteMode) infiniteTimeout=setInterval(addRandom, infiniteTime);
                restoreEffects();
                document.dispatchEvent(new Event(`resetGame`));
            }, 2000)
        }
    }, 1000);
    g = setTimeout(()=>{
        document.getElementById(`timer`).style.display = `none`;
        document.getElementById(`timer`).innerHTML=``;
    }, 4000);
}
for (let i = 0; i < _info.pitches.length; i++) {
    document.getElementById(`levels`).append(new MakeLevel(i + 1));
}
document.querySelector(`#menu .closeBar`).addEventListener(`pointerdown`, function (){
    document.getElementById(`menu`).style.display = `none`;
    if (_info.moved){
        resetGame();
    }
    else{
        _info.stop = false;
    }
});
document.getElementById(`menuButton`).addEventListener(`pointerdown`, function () {
    pauseGame();
    document.getElementById(`menu`).style.display = `flex`;
});
document.getElementById(`levels`).addEventListener(`pointerdown`, function (event) {
    let element = event.target;
    if (!element.classList.contains(`level`)) return;
    infiniteGame();
    document.dispatchEvent(new Event(`lose`));
    document.getElementById(`menu`).style.display = `none`;
    let number = Number(element.innerHTML)-1;
    _info.actualPitch = _info.pitches[Number(element.innerHTML)-1];
    _info.num = Number(element.innerHTML)-1;
    reset(true);
});
let infiniteTimeout, infiniteTime = 2000, freePlaceSet = new Set();
function addRandom(){
    if (!freePlaceSet.size) return;
    let item = Array.from(freePlaceSet)[randomInteger(0, freePlaceSet.size-1)];
    let cords = [(item%8)*pitch.getBoundingClientRect().width/8, Math.trunc(item/8)*pitch.getBoundingClientRect().width/20];
    freePlaceSet.delete(item);
    _info.difficulties[_info.actualDifficulty](cords);
    _info.infiniteTime+=infiniteTime;
    if (_info.infiniteTime > 25000 && _info.difficulties.length-1>_info.actualDifficulty) {
        _info.actualDifficulty++;
        clearInterval(infiniteTimeout);
        if (infiniteTime < 400) infiniteTime-=0;
        else if (infiniteTime <= 500) infiniteTime-=50;
        else if (infiniteTime <= 700) infiniteTime-=100;
        else if (infiniteTime <= 1000) infiniteTime-=150;
        else infiniteTime-=250;
        _info.infiniteTime = 0;
        infiniteTimeout = setInterval(addRandom, infiniteTime);
    }
}
function infiniteGame(i){
    if (i){
        freePlaceSet.clear();
        _info.actualDifficulty = 0;
        for (let i = 0; i<144; i++) freePlaceSet.add(i);
        _info.infiniteMode = true;
        _info.actualPitch = function (){
            _info.levelName = `?????????????????????? ????????`;
            _info.hearts = 3;
            infiniteTime = 2000;
            freePlaceSet.clear();
            for (let i = 0; i<144; i++) freePlaceSet.add(i);for (let i = 0; i<10; i++) {addRandom();_info.infiniteTime = 0;}
        }
        reset(true);
    }
    else{
        clearInterval(infiniteTimeout);
        _info.infiniteMode = false;
        _info.infiniteTime = 0;
        infiniteTime = 2000;
    }
}
_info.infinityEffects = new Set();
_info.difficulties = [
    function (cords){
        document.getElementById(`pitch`).insertAdjacentHTML(`afterbegin`,`<div class="item" data-score="${100*_info.kf}" style="left: ${cords[0]}px; top: ${cords[1]}px;"></div>`);
        if (_info.visible === `visible` || !_info.visible)makeColor(document.querySelector(`.item:first-of-type`));
        else document.querySelector(`.item:first-of-type`).style.backgroundColor = `transparent`;
        if (randomInteger(1,10) === randomInteger(1,10)) document.querySelector(`.item:first-of-type`).dataset.effecttype = _info.effects.effectTypes[randomInteger(0, _info.effects.effectTypes.length-1)];
    },
    function (cords){
        document.getElementById(`pitch`).insertAdjacentHTML(`afterbegin`,`<div class="item" data-score="${100*_info.kf}" style="left: ${cords[0]}px; top: ${cords[1]}px;"></div>`);
        if (_info.visible === `visible` || !_info.visible)makeColor(document.querySelector(`.item:first-of-type`));
        else document.querySelector(`.item:first-of-type`).style.backgroundColor = `transparent`;
        if (randomInteger(1,9) === randomInteger(1,9)) document.querySelector(`.item:first-of-type`).dataset.effecttype = _info.effects.effectTypes[randomInteger(0, _info.effects.effectTypes.length-1)];
        effect(`ballExtraSpeed`, Infinity);
        if (_info.infiniteTime === 0)_info.infinityEffects.add(`ballExtraSpeed`);
    },
    function (cords){
        document.getElementById(`pitch`).insertAdjacentHTML(`afterbegin`,`<div class="item" data-score="${100*_info.kf}" style="left: ${cords[0]}px; top: ${cords[1]}px;"></div>`);
        if (_info.visible === `visible` || !_info.visible)makeColor(document.querySelector(`.item:first-of-type`));
        else document.querySelector(`.item:first-of-type`).style.backgroundColor = `transparent`;
        if (randomInteger(1,8) === randomInteger(1,8)) document.querySelector(`.item:first-of-type`).dataset.effecttype = _info.effects.effectTypes[randomInteger(0, _info.effects.effectTypes.length-1)];
        if (_info.infiniteTime === 0)effect(`doubleScore`, Infinity);
        _info.infinityEffects.add(`doubleScore`);
    },
    function (cords){
        document.getElementById(`pitch`).insertAdjacentHTML(`afterbegin`,`<div class="item" data-score="${100*_info.kf}" style="left: ${cords[0]}px; top: ${cords[1]}px;"></div>`);
        if (_info.visible === `visible` || !_info.visible)makeColor(document.querySelector(`.item:first-of-type`));
        else document.querySelector(`.item:first-of-type`).style.backgroundColor = `transparent`;
        if (randomInteger(1,7) === randomInteger(1,7)) document.querySelector(`.item:first-of-type`).dataset.effecttype = _info.effects.effectTypes[randomInteger(0, _info.effects.effectTypes.length-1)];
        if (_info.infiniteTime === 0)effect(`biggerDesk`, Infinity);
        _info.infinityEffects.add(`biggerDesk`);
    },
    function (cords){
        document.getElementById(`pitch`).insertAdjacentHTML(`afterbegin`,`<div class="item" data-score="${100*_info.kf}" style="left: ${cords[0]}px; top: ${cords[1]}px;"></div>`);
        if (_info.visible === `visible` || !_info.visible)makeColor(document.querySelector(`.item:first-of-type`));
        else document.querySelector(`.item:first-of-type`).style.backgroundColor = `transparent`;
        if (randomInteger(1,6) === randomInteger(1,6)) document.querySelector(`.item:first-of-type`).dataset.effecttype = _info.effects.effectTypes[randomInteger(0, _info.effects.effectTypes.length-1)];
        if (_info.infiniteTime === 0)effect(`biggerBall`, Infinity);
        _info.infinityEffects.add(`biggerBall`);
        effect(`extraLife`, 0);
    },
    function (cords){
        document.getElementById(`pitch`).insertAdjacentHTML(`afterbegin`,`<div class="item" data-score="${100*_info.kf}" style="left: ${cords[0]}px; top: ${cords[1]}px;"></div>`);
        if (_info.visible === `visible` || !_info.visible)makeColor(document.querySelector(`.item:first-of-type`));
        else document.querySelector(`.item:first-of-type`).style.backgroundColor = `transparent`;
        if (randomInteger(1,6) === randomInteger(1,6)) document.querySelector(`.item:first-of-type`).dataset.effecttype = _info.effects.effectTypes[randomInteger(0, _info.effects.effectTypes.length-1)];
        if (_info.infiniteTime === 0)effect(`boomHit`, Infinity);
        _info.infinityEffects.add(`boomHit`);
    },
    function (cords){
        document.getElementById(`pitch`).insertAdjacentHTML(`afterbegin`,`<div class="item" data-score="${200*_info.kf}" style="left: ${cords[0]}px; top: ${cords[1]}px;"></div>`);
        if (_info.visible === `visible` || !_info.visible)makeColor(document.querySelector(`.item:first-of-type`));
        else document.querySelector(`.item:first-of-type`).style.backgroundColor = `transparent`;
        if (randomInteger(1,5) === randomInteger(1,5)) document.querySelector(`.item:first-of-type`).dataset.effecttype = _info.effects.effectTypes[randomInteger(0, _info.effects.effectTypes.length-1)];
    },
    function (cords){
        document.getElementById(`pitch`).insertAdjacentHTML(`afterbegin`,`<div class="item" data-score="${250*_info.kf}" style="left: ${cords[0]}px; top: ${cords[1]}px;"></div>`);
        if (_info.visible === `visible` || !_info.visible)makeColor(document.querySelector(`.item:first-of-type`));
        else document.querySelector(`.item:first-of-type`).style.backgroundColor = `transparent`;
        if (randomInteger(1,4) === randomInteger(1,4)) document.querySelector(`.item:first-of-type`).dataset.effecttype = _info.effects.effectTypes[randomInteger(0, _info.effects.effectTypes.length-1)];
        if (_info.infiniteTime === 0) effect(`hideItems`, Infinity);
        _info.infinityEffects.add(`hideItems`);
    },
    function (cords){
        document.getElementById(`pitch`).insertAdjacentHTML(`afterbegin`,`<div class="item" data-score="${300*_info.kf}" style="left: ${cords[0]}px; top: ${cords[1]}px;"></div>`);
        if (_info.visible === `visible` || !_info.visible)makeColor(document.querySelector(`.item:first-of-type`));
        else document.querySelector(`.item:first-of-type`).style.backgroundColor = `transparent`;
        if (randomInteger(1,4) === randomInteger(1,4)) document.querySelector(`.item:first-of-type`).dataset.effecttype = _info.effects.effectTypes[randomInteger(0, _info.effects.effectTypes.length-1)];
        if (_info.infiniteTime === 0){
            removeEffect(`hideItems`);
            _info.infinityEffects.delete(`hideItems`);
            effect(`extraLife`, 0);
        }
    },
    function (cords){
        document.getElementById(`pitch`).insertAdjacentHTML(`afterbegin`,`<div class="item" data-score="${300*_info.kf}" style="left: ${cords[0]}px; top: ${cords[1]}px;"></div>`);
        if (_info.visible === `visible` || !_info.visible)makeColor(document.querySelector(`.item:first-of-type`));
        else document.querySelector(`.item:first-of-type`).style.backgroundColor = `transparent`;
        if (randomInteger(1,4) === randomInteger(1,4)) document.querySelector(`.item:first-of-type`).dataset.effecttype = _info.effects.effectTypes[randomInteger(0, _info.effects.effectTypes.length-1)];
        if (_info.infiniteTime === 0)effect(`brokenGame`, Infinity);
        _info.infinityEffects.add(`brokenGame`);
    },
    function (cords){
        document.getElementById(`pitch`).insertAdjacentHTML(`afterbegin`,`<div class="item" data-score="${300*_info.kf}" style="left: ${cords[0]}px; top: ${cords[1]}px;"></div>`);
        if (_info.visible === `visible` || !_info.visible)makeColor(document.querySelector(`.item:first-of-type`));
        else document.querySelector(`.item:first-of-type`).style.backgroundColor = `transparent`;
        if (randomInteger(1,4) === randomInteger(1,4)) document.querySelector(`.item:first-of-type`).dataset.effecttype = _info.effects.effectTypes[randomInteger(0, _info.effects.effectTypes.length-1)];
        if (_info.infiniteTime === 0) {
            removeEffect(`brokenGame`);
            _info.infinityEffects.delete(`brokenGame`);
            effect(`extraLife`, 0);
        }
    },
    function (cords){
        document.getElementById(`pitch`).insertAdjacentHTML(`afterbegin`,`<div class="item" data-score="${300*_info.kf}" style="left: ${cords[0]}px; top: ${cords[1]}px;"></div>`);
        if (_info.visible === `visible` || !_info.visible)makeColor(document.querySelector(`.item:first-of-type`));
        else document.querySelector(`.item:first-of-type`).style.backgroundColor = `transparent`;
        if (randomInteger(1,3) === randomInteger(1,3)) document.querySelector(`.item:first-of-type`).dataset.effecttype = _info.effects.effectTypes[randomInteger(0, _info.effects.effectTypes.length-1)];
    },
    function (cords){
        document.getElementById(`pitch`).insertAdjacentHTML(`afterbegin`,`<div class="item" data-score="${300*_info.kf}" style="left: ${cords[0]}px; top: ${cords[1]}px;"></div>`);
        if (_info.visible === `visible` || !_info.visible)makeColor(document.querySelector(`.item:first-of-type`));
        else document.querySelector(`.item:first-of-type`).style.backgroundColor = `transparent`;
        if (randomInteger(1,4) === randomInteger(1,4)) document.querySelector(`.item:first-of-type`).dataset.effecttype = _info.effects.effectTypes[randomInteger(0, _info.effects.effectTypes.length-1)];
        pauseGame();
        _info.infinityEffects.clear();
        _info.infinityEffects.add(`ballExtraSpeed`);
        document.getElementById(`timer`).style.display = `block`;
        document.getElementById(`timer`).style.width = `90%`;
        document.getElementById(`timer`).style.fontSize = `calc(100vw * 3 / 2 / 16)`;
        document.addEventListener(`pointerdown`, preventAll, true);
        setTimeout(()=>{
            document.getElementById(`timer`).innerHTML = ``;
            setTimeout(()=>{
                document.getElementById(`timer`).innerHTML = ``;
                setTimeout(()=>{
                        document.getElementById(`timer`).innerHTML = ``;
                        setTimeout(()=>{
                            document.getElementById(`timer`).style.width = ``;
                            document.getElementById(`timer`).style.fontSize = ``;
                            resetGame();
                            document.addEventListener(`resetGame`, ()=>{ removeEffects();effect(`ballExtraSpeed`, Infinity);}, {once: true});
                            _info.actualDifficulty++;
                            document.removeEventListener(`pointerdown`, preventAll, true);
                            _info.vectorSpeed = _info.vectorSpeed*2;
                            _info.vector = [Math.sqrt(_info.vectorSpeed)/Math.SQRT2, Math.sqrt(_info.vectorSpeed)/Math.SQRT2];
                            _info.previousVector = [].concat(_info.vector);
                            _info.maxLeft = _info.vectorSpeed*7/8;
                        }, talk(document.getElementById(`timer`), `????, ?????????? ?????? ?????? ?????????????????? ???????? ??????????????, ?? ???????????????????? ???????????????? ????????`))
                    }, talk(document.getElementById(`timer`), `???? ?? ???????? ?????????? ??????????????????????.`)
                )
            }, talk(document.getElementById(`timer`), `???? ?????????? ???????????? ?????????? ??????????????????`))
        }, talk(document.getElementById(`timer`), `??????????????, ?????????? ???? ??????????`));
    },
    function (cords){
        document.getElementById(`pitch`).insertAdjacentHTML(`afterbegin`,`<div class="item" data-score="${1000*_info.kf}" style="left: ${cords[0]}px; top: ${cords[1]}px;"></div>`);
        if (_info.visible === `visible` || !_info.visible)makeColor(document.querySelector(`.item:first-of-type`));
        else document.querySelector(`.item:first-of-type`).style.backgroundColor = `transparent`;
        if (randomInteger(1,3) === randomInteger(1,3)) document.querySelector(`.item:first-of-type`).dataset.effecttype = _info.effects.effectTypes[randomInteger(0, _info.effects.effectTypes.length-1)];
    },
];
function preventAll(event){
    event.preventDefault();
    event.stopImmediatePropagation();
}
function talk(elem, frase){
    let i = 0;
    let a = setInterval(()=>{
        elem.innerHTML+=frase[i];
        i++;
        if (frase.length-1 < i) clearInterval(a);
    }, 50);
    return frase.length*50+1500;
}
document.getElementById(`infiniteGame`).addEventListener(`pointerdown`, function(){
    document.getElementById(`menu`).style.display = `none`;
    document.dispatchEvent(new Event(`lose`));
    infiniteGame(true);
});
reset(true);
_info.lose = false;
_info.stop = true;