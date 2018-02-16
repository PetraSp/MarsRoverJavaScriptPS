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

const prevPositionX = rover.position[0];
const prevPositionY = rover.position[Y];
const prevDirection = rover.direction;


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
