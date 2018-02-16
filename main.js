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