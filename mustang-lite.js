
var index = document.getElementById("info about index");

var button = document.getElementById("button");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

button.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://mustang-index.azurewebsites.net/index.json');
    ourRequest.onload = function() {
        var theInfo = JSON.parse(ourRequest.responseText);
        index.insertAdjacentHTML('beforeend', theInfo);
    };
    ourRequest.send();
});

button2.addEventListener("click",function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://mustang-index.azurewebsites.net/index.json');
    ourRequest.onload = function() {
        var theInfo = JSON.parse(ourRequest.responseText);
        index.insertAdjacentHTML('beforeend', theInfo);
    };
    ourRequest.send();
});

button3.addEventListener("click",function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://mustang-index.azurewebsites.net/index.json');
    ourRequest.onload = function() {
        var theInfo = JSON.parse(ourRequest.responseText);
        console.log(theInfo);
    };
    ourRequest.send();
});
