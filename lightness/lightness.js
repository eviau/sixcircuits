var objects = {}

var suggestions_obj = ["an apple seed","the tear of joy of a fairy","the space between thoughts"];
var suggestions_weight = ["a pencil, at most","2 or 3 grain of salt","my two cents"];

var current_obj = ''

var ieme = 1;

var ieme_obj = 0;
var ieme_w = 0;

document.getElementById('nameobj').value = '';
document.getElementById('wobj').value = '';


function saveobj() {
    current_obj = document.getElementById("nameobj").value;
    weightobj = document.getElementById("wobj").value;

    console.log(current_obj);
    objects[ieme] = { name: current_obj, weight: weightobj };
    console.log(objects[ieme]);
    console.log(ieme);
    displayobjects();
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
    divi.innerHTML = ieme + ": " + objects[ieme].name + ", " + objects[ieme].weight;
    objectstable.appendChild(divi);
}

dragElement(document.getElementById("mydivheader"))

function dragElement(elem){

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
