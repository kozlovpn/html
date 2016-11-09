/**
 * Created by pavel on 10/12/16.
 */
var calcTemp = function () {
    var tempF = document.getElementById("degrees").value;
    var tempC = fahrenheitToCelsius(tempF);
    var result = "По Фаренгейту: " + tempF + "; По Цельсию: " + tempC;
    var resultDiv = document.getElementById("result");
    if (tempC <= 0) {
        resultDiv.innerHTML = result + "; Твердое состояние";
    } else if (tempC > 0 && tempC < 100) {
        resultDiv.innerHTML = result + "; Жидкое состояние";
    } else {
        resultDiv.innerHTML = result + "; Газообразное состояние";
    }
};

var getTempRange = function () {
    var tempTableBody = document.getElementById("tempTableBody");
    var tr;
    var tdF;
    var tdC;
    for (var i = -50; i <= 50; i+=5) {
        tr = document.createElement("tr");
        tdF = document.createElement("td");
        tdC = document.createElement("td");
        tdF.innerHTML = i;
        tdC.innerHTML = fahrenheitToCelsius(i);
        tdF.setAttribute("align", "center");
        tdC.setAttribute("align", "center");
        tr.appendChild(tdF);
        tr.appendChild(tdC);
        tr.setAttribute("id", "row" + i);
        tempTableBody.appendChild(tr);
    }
};

var fahrenheitToCelsius = function (tempF) {
    return Math.round(5/9 * (tempF - 32));
};

var createMultiplicationTable = function () {
    var table;
    var td;
    for (var i = 1; i <= 10; i++) {
        td = document.getElementById("number" + i);
        table = document.createElement("table");
        table.setAttribute("align", "center");
        for (var j = 1; j <= 10; j++) {
            var tr = document.createElement("tr");
            tr.innerHTML = i + " * " + j + " = " + i * j;
            table.appendChild(tr);
        }
        td.appendChild(table);
    }
};

var getMaxNumberByModule = function () {
    var array = document.getElementById("array").value.split(",");
    var maxNumber = Math.abs(parseInt(array[0]));
    for (var i = 0; i < array.length; i++) {
        var nextValue = Math.abs(parseInt(array[i + 1]));
        if (nextValue > maxNumber) {
            maxNumber = nextValue;
        }
    }
    document.getElementById("resultOfMaxNumber").innerHTML = "Наибольшее число по модулю: " + maxNumber;
};

var symbolsReplacing = function () {
    var text = document.getElementById("string").value;
    var toReplace = document.getElementById("toReplace").value;
    var symbol = document.getElementById("replacingSymbol").value;
    document.getElementById("resultOfString").innerHTML = text.replace(toReplace, symbol);
};