document.getElementById('input').onchange = function() {
    var selectedFile = this.files[0];

    var reader = new FileReader();
    reader.onload = function(progressEvent){
        console.log(this.result);
    }

    var lines = this.result.split('\n');
    
}