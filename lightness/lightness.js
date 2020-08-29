// draggable functions from https://codepen.io/crouchingtigerhiddenadam/details/qKXgap

let selected = null;

var objects = {}

var suggestions_obj = ["an apple seed","the tear of joy of a fairy","the space between thoughts"];
var suggestions_weight = ["a pencil, at most","2 or 3 grain of salt","my two cents"];

var current_obj = ''

var ieme = 1;

var ieme_obj = 0;
var ieme_w = 0;

document.getElementById('nameobj').value = '';
document.getElementById('wobj').value = '';


function isBefore(el1, el2) {
    let cur
    if (el2.parentNode === el1.parentNode) {
      for (cur = el1.previousSibling; cur; cur = cur.previousSibling) {
        if (cur === el2) return true
      }
    }
    return false;
  }

function saveobj() {
    current_obj = document.getElementById("nameobj").value;
    weightobj = document.getElementById("wobj").value;

    console.log(current_obj);
    objects[ieme] = { name: current_obj, weight: weightobj };
    console.log(objects[ieme]);
    console.log(ieme);
    displayobjects();
    displaylist();
    ieme++;


}


function nextobj() {
    document.getElementById('nameobj').value = '';
    document.getElementById('wobj').value = '';

}


function displayobjects() {
    var objectstable = document.getElementById("objtable");

    var divi = document.createElement("div");
    console.log(objects);
    divi.style.padding = "5px";
    divi.innerHTML = ieme + ": " + objects[ieme].name + "; " + objects[ieme].weight;
    objectstable.appendChild(divi);
}

function suggestobj(){
    document.getElementById('nameobj').value = suggestions_obj[ieme_obj];
    ieme_obj += 1;
    ieme_obj = ieme_obj % suggestions_obj.length;

}

function suggestw(){
    document.getElementById('wobj').value = suggestions_weight[ieme_w];
    ieme_w += 1;
    ieme_w = ieme_w % suggestions_weight.length;

}

function displaylist(){
    var objectstable = document.getElementById("mydivheader");


    var divi = document.createElement("li");
    divi.draggable= "true";
    divi.addEventListener("dragend", ondragend);
    divi.addEventListener("dragover",ondragover);
    divi.addEventListener("dragstart",ondragstart);

    console.log(objects);
    divi.innerHTML = ieme + ": " + objects[ieme].name + "; " + objects[ieme].weight;
    objectstable.appendChild(divi);
}

var list = document.getElementById("mydivheader");

function ondragover(event){
    if (isBefore(selected, event.target)){
        event.target.parentNode.insertBefore(selected,event.target);
    } else{
        event.target.parentNode.insertBefore(selected,event.target.nextSibling)
    }
}

function ondragend(event){
    selected= null;
}

function ondragstart(event){
    event.dataTransfer.effectallowed = 'move';
    event.dataTransfer.setData('text/plain', null);
    selected = event.target;
}