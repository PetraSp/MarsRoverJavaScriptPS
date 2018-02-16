// ask user to select the file
document.getElementById('input').onchange = function() {
    var selectedFile = this.files[0];
    
    var reader = new FileReader();
    reader.onload = function(progressEvent){
        console.log(this.result);

        var lines = this.result.split('\n');
        for (var line = 0; line < lines.length; line ++) {
            if (line === 0) {
                initializePlateau(lines[line].trim());
            }
            // create td with initial position
            else if (line % 2 === 0){
                initializeMarsRover(lines[line].trim());
            }
            else {
            //create td with final position
                marsRover.moveRover(lines[line].trim());
            }
        }
    }
    reader.readAsText(input);
}

const plateau;
const marsRover;

const prevPositionX = marsRover.position[0];
const prevPositionY = marsRover.position[Y];
const prevDirection = marsRover.direction;

//make sure x and y are between 0 and 5

function checkPosition () {
    if (marsRover.position[0 > 5]) {
        marsRover.position[0] = 0;
    }
    if (marsRover.position[0] < 0) {
        marsRover.position[0] = 5;
    }
    if (marsRover.position[1] > 5) {
        marsRover.position[1] = 0;
    }
    if (marsRover.position[1] < 0) {
        marsRover.position[1] = 5;
    }
}


function Plateau(xMax, yMax) {
    try {
        this.xMax = xMax;
        this.yMax = yMax;
    }
    catch (err) {
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


function MarsRover(xCoords, yCoords, direction) {

    try {
        if (xCoords < 0 || xCoords > plateau.xMax || yCoords < 0 || yCoords > plateau.yMax) {
            throw "The mars rover is initialized outside of the plateau boundary"
        }

        if (!(direction in ))
    }
}