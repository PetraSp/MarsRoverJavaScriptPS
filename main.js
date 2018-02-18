// ask user to select the file
function trigger() {
    var input = document.getElementById('input');
    var selectedFile = input.files[0];
    var reader = new FileReader();

    reader.onload = function(progressEvent){
        var lines = this.result.split('\n');
        
        for (var line = 0; line < lines.length; line ++) {
            if (line === 0) {
                initializePlateau(lines[line].trim());
            }
            else if (line % 2 !== 0){
                initializeMarsRover(lines[line].trim());
            }
            else {
                MarsRover.prototype.moveRover(lines[line].trim());
            }
        }
    }

    reader.readAsText(selectedFile);
}

var plateau;
var marsRover;

function Plateau(xMax, yMax) {
    try {
       if (xMax < 0 || yMax < 0) {
           throw "Plateau dimensions are negative";
       }

        this.xMax = Number (xMax);
        this.yMax = Number (yMax);
    }
    catch (err) {
        "Error: " + err;
    }
}

function initializePlateau(dimensions) {
    try {
        const dimensionsData = dimensions.split(' ');
        // construct a Plateau object and set dimension x and y
        plateau = new Plateau(dimensionsData[0], dimensionsData[1]);
    }
    catch (err) {
    }
}

function initializeMarsRover (dimensions) {
    const dimensionsData = dimensions.split(' ');
    marsRover = new MarsRover(dimensionsData[0], dimensionsData[1], dimensionsData[2]);
}


// functions to move rover 
//lookup hash
var makeLeftTurn = {
    N: "W",
    E: "N",
    S: "E",
    W: "S"
}

var makeRightTurn = {
    N: "E",
    E: "S",
    S: "W",
    W: "N"
}


function moveForward(roverDirection) {
    try {
        if (roverDirection === "N" && marsRover.yCoords ++ > plateau.yMax) {
            throw "rover outside of plateau max Y axis dimension";
        }

        if (roverDirection === "E" && marsRover.xCoords ++ > plateau.xMax) {
            throw "rover outside of plateau max X axis dimension";
        }

        if (roverDirection === "S" && marsRover.yCoords -- < 0) {
            throw "rover outside of plateau min Y axis dimension";
        }

        if (roverDirection === "W" && marsRover.xCoords -- < 0) {
            throw "rover outside of plateau min X axis dimension";
        }
    }

    catch(err) {
        "Error: " + err;
    }
}

function MarsRover(xCoords, yCoords, direction) {
    try {
        if (xCoords < 0 || xCoords > plateau.xMax || yCoords < 0 || yCoords > plateau.yMax) {
            throw "The mars rover is initialized outside of the plateau boundary"
        } else if (!(direction in makeRightTurn)) {
            throw "The direction instruction is incorrect"
        } else {
            var tbody = document.getElementsByTagName('tbody')[0];

            if (tbody) {
                var tr = tbody.insertRow(tbody.rows.length);
                var td = tr.insertCell(-1);
                td.innerHTML = '<td>' + xCoords +' '+yCoords + ' ' + direction +'</td>';
            }
        }

        this.xCoords = xCoords;
        this.yCoords = yCoords;
        this.direction = direction;
    }
    catch(err) {
        "Error: " + err;
    }
}


MarsRover.prototype.moveRover = function(instructions) {
    var instructionsData = instructions.split('');

    for (i = 0; i < instructionsData.length; i ++) {
        if (instructionsData[i] === "L") {
            marsRover.direction = makeLeftTurn[marsRover.direction];
        }

        if (instructionsData[i] === "R") {
            marsRover.direction = makeRightTurn[marsRover.direction];
        }

        if (instructionsData[i] === "M") {
            moveForward(marsRover.direction);
        }
    }

    var tbody = document.getElementsByTagName('tbody')[1];

    if (tbody) {
        var tr = tbody.insertRow(tbody.rows.length);
        var td = tr.insertCell(-1);
        td.innerHTML = '<td>'+ marsRover.xCoords +' '+ marsRover.yCoords + ' '+ marsRover.direction +'<td>';
    }
}