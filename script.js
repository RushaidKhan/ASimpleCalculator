function add(){
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
    var answer = parseInt(value1) + parseInt(value2);
    document.getElementById("answer").innerHTML = answer;
    document.getElementById("answer").style.color = "red";
}
function subtract(){
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
    var answer = parseInt(value1) - parseInt(value2);
    document.getElementById("answer").innerHTML = answer;
    document.getElementById("answer").style.color = "blue";
}
function multiply(){
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
    var answer = parseInt(value1) * parseInt(value2);
    document.getElementById("answer").innerHTML = answer;
    document.getElementById("answer").style.color = "green";
}
function divide(){
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
    var answer = parseInt(value1) / parseInt(value2);
    document.getElementById("answer").innerHTML = answer;
    document.getElementById("answer").style.color = "purple";
}
