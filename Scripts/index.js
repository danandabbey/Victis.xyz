function get(e){
    return document.getElementById(e)
};

//turns on dark mode

function darkMode(){
    const body = document.querySelector("body");
    body.removeAttribute("id");
    body.classList.add("darkMode");
    let btn = document.querySelectorAll("button")
    btn.forEach(function(button){
        button.classList.add("darkMode");
    });
};

//creates the canvas element

function newElement(type,loc,i){

    const parentLoc = get(loc)
    element = document.createElement(type);
    element.id=i
    parentLoc.appendChild(element);
}

function makeCanvas(){
    newElement("canvas","main","canvas");
    get("canvas").setAttribute(`width`,`1600px`)
    get("canvas").setAttribute(`height`,`800px`)
};

//creates animations

function draw(){
    canvas = get("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = ("#fff");
    ctx.font = "100px lato"
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText("Hello", canvas.width/2, canvas.height/2);
}

//listens

window,addEventListener("DOMContentLoaded", function(e){
    makeCanvas();
});

let title = get("title");
title.addEventListener("click",function(){
    main();
});

function main(){
    darkMode();
    draw();
};
