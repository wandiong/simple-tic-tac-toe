var XO = "";
function generateTable() {
    document.getElementById("game").innerHTML = "";
    var tr = "";
    for (var i = 0; i < 3; i++) {
        tr += "<tr>";
        for (var j = 0; j < 3; j++) {
            var mix = +i + '-' + j;
            tr += "<td><button id='" + mix + "' text='' class='btn btn-success' onclick='getX(event);'></button></td>";
        }
        tr += "</tr>"
    }
    document.getElementById("game").innerHTML = tr;
}
function getX(e) {
    var elem = document.getElementById(e.target.id);
    if (elem.innerText == "") {
        elem.innerText = XO == "X" ? "O" : "X";
        XO = XO == "X" ? "O" : "X";
        chooseWinner(XO);
    }
}
function chooseWinner(currVal) {
    var win = false;
    var draw = false;
    if (
        document.getElementById("0-0").innerText == currVal &&
        document.getElementById("0-1").innerText == currVal &&
        document.getElementById("0-2").innerText == currVal) {
        win = true;
    } else if (
        document.getElementById("1-0").innerText == currVal &&
        document.getElementById("1-1").innerText == currVal &&
        document.getElementById("1-2").innerText == currVal) {
        win = true;
    } else if (
        document.getElementById("2-0").innerText == currVal &&
        document.getElementById("2-1").innerText == currVal &&
        document.getElementById("2-2").innerText == currVal) {
        win = true;
    } else if (
        document.getElementById("0-0").innerText == currVal &&
        document.getElementById("1-0").innerText == currVal &&
        document.getElementById("2-0").innerText == currVal) {
        win = true;
    } else if (
        document.getElementById("0-1").innerText == currVal &&
        document.getElementById("1-1").innerText == currVal &&
        document.getElementById("2-1").innerText == currVal) {
        win = true;
    } else if (
        document.getElementById("0-2").innerText == currVal &&
        document.getElementById("1-2").innerText == currVal &&
        document.getElementById("2-2").innerText == currVal) {
        win = true;
    } else if (
        document.getElementById("1-0").innerText == currVal &&
        document.getElementById("1-1").innerText == currVal &&
        document.getElementById("1-2").innerText == currVal) {
        win = true;
    } else if (
        document.getElementById("2-0").innerText == currVal &&
        document.getElementById("1-1").innerText == currVal &&
        document.getElementById("0-2").innerText == currVal) {
        win = true;
    } else if (
        document.getElementById("0-0").innerText == currVal &&
        document.getElementById("1-1").innerText == currVal &&
        document.getElementById("2-2").innerText == currVal) {
        win = true;
    } else if (
        document.getElementById("0-0").innerText != "" &&
        document.getElementById("0-1").innerText != "" &&
        document.getElementById("0-2").innerText != "" &&
        document.getElementById("1-0").innerText != "" &&
        document.getElementById("1-1").innerText != "" &&
        document.getElementById("1-2").innerText != "" &&
        document.getElementById("2-0").innerText != "" &&
        document.getElementById("2-1").innerText != "" &&
        document.getElementById("2-2").innerText != ""
    ) {
        draw = true;
    }
    if (win == true) {
        alert("The winner is : Player " + (currVal == "X" ? "1" : "2"));
        location.reload();
    }
    if (draw == true) {
        alert("Draw!");
        location.reload();
    }
}