var objects = {}

var current_obj = ''

var ieme = 1;

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
