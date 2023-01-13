function jsFunc1() {
    var pTag = document.querySelector("#p1");
    pTag.innerHTML = "jsFunc1() 함수 실행 완료";
}

var jsFunc2 = function () {
    document.querySelector("#p2").innerHTML = "jsFunc2() 함수 실행 완료";
}

function resultJsFunc4() {
    jsFunc4(23,5,10);
}
function jsFunc4(value, value2, value3) {
    document.querySelector("#p4").innerHTML
    = value + value2 + value3 + "<br>";
}

function resultJsFunc5() {
    var result = jsFunc5();
    document.querySelector("#p5").innerHTML = result;
}
function jsFunc5() {
    return Math.floor(Math.random()*100) ;
}

function calculatePlus(num1, num2, operator) {
    var result = 0;
    switch(operator) {
        case '+' : result = num1+num2; break;
    }
    return result;
}

function callFuncTenTimes(otherFunc) {
    for(var i=0;i<10;i++) {
        otherFunc(i);
    }
}

function calleeFunc(num) {
    var pTag = document.querySelector("#p6");
    pTag.innerHTML += (num+1) + "번째 함수 호출 완료 <br>";
}
callFuncTenTimes(calleeFunc);

function jsReturnFunc() {
    var nameTag = document.querySelector("#name");
    var pTag = document.querySelector("#p7");
    //
    return function() {
        pTag.innerHTML = nameTag.value;
    }();
}
