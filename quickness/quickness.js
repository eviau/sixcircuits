document.getElementById('story').value = '';
document.getElementById('story').readOnly = true;

var txt = '';
var timerrr = 30;

var intervalID = 0;

function chrono() {
    timerrr -= 1;

    document.getElementById('timer').innerHTML = timerrr;

    if (timerrr == 0) {
        document.getElementById('story').readOnly = true;
        clearInterval(intervalID);}

}

function startwriting() {
    document.getElementById('timer').innerHTML = timerrr;
    document.getElementById("go").disabled = true;
    document.getElementById('story').readOnly = false;
    intervalID = window.setInterval(chrono, 1000);
}
