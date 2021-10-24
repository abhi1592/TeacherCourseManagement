
var student = [];

function register() {

    var course = document.getElementById("course").value;
    var teacher = document.getElementById("teacher").value;
    var hours = document.getElementById("hours").value;


    student.push({
        "course": course,
        "teacher": teacher,
        "hours": hours
    });
    cancel();
    list();
}

function cancel() {

    document.getElementById("course").value = "";
    document.getElementById("teacher").value = "";
    document.getElementById("hours").value = "";
    document.getElementById("course").focus();

    document.getElementById("btnRegister").style.display = "inline-block";
   
    document.getElementById("btnConfirm").style.display = "none";
    document.getElementById("btnEdit").style.display = "none";
    document.getElementById("btnRemove").style.display = "none";
    document.getElementById("btnCancel").style.display = "none";

}

function list() {
    var table = document.getElementById("table");

    table.innerHTML = "";

    for (var I = 0; I < student.length; I++)
    {
        var row = table.insertRow(-1);

        var column1 = row.insertCell(0);
        var column2 = row.insertCell(1);
        var column3 = row.insertCell(2);
        var column4 = row.insertCell(3);
        var column5 = row.insertCell(4);

        column1.innerHTML = I + 1;
        column2.innerHTML = student[I].course;
        column3.innerHTML = student[I].teacher;
        column4.innerHTML = student[I].hours;
        column5.innerHTML = "<button onclick='select(" + I + ")'>Select</button>";

    }

}


function select(row) {
    document.getElementById("id").value = row;
    document.getElementById("course").value = student[row].course;
    document.getElementById("teacher").value = student[row].teacher;
    document.getElementById("hours").value = student[row].hours;

    document.getElementById("btnRegister").style.display = "none";
    document.getElementById("btnEdit").style.display = "inline-block";
    document.getElementById("btnRemove").style.display = "inline-block";
    document.getElementById("btnCancel").style.display = "inline-block";
    document.getElementById("btnConfirm").style.display = "inline-block";

}


function remove() {

    var id = document.getElementById("id").value;
    student.splice(id, 1);
    cancel();
    list();
}


function edit() {

    var id = document.getElementById("id").value;
    var course = document.getElementById("course").value;
    var teacher = document.getElementById("teacher").value;
    var hours = document.getElementById("hours").value;


    student[id] = {
        "course": course,
        "teacher": teacher,
        "hours": hours
    };
    cancel();
    list();
}

function ClearAll() {
    document.getElementById("course").value = "";
    document.getElementById("teacher").value = "";
    document.getElementById("hours").value = "";
}

function SetCookies() {
    document.cookie = "course=" + '' + document.getElementById("course").value + "|teacher=" + document.getElementById("teacher").value + "|hours=" + document.getElementById("hours").value ;
}

function GetCookies() {
    var array = document.cookie.split('|');
    for (var I = 0; I < array.length; I++) {
        var det = array[I].split('=');
        document.getElementById(det[0]).innerHTML = det[1];
        console.log(det);
    }
}