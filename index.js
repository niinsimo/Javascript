document.getElementById("hello").innerHTML = "Hello, world!";
//funktioon myMove 
function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    //viie millisekundi tagant kordab frame funtsiooni
    var id = setInterval(frame, 5);
    
    function frame(){
        /*kui ristkülik on jõudnud 540 asendisse ehk canvase lõppu (canvas on 600px lai ja riskülik ise 60 ehk siis kui on jõudnud 540 juurde)
        siis viiakse algsesse positsiooni tagasi*/
        if (pos == 540) {
            clearInterval(id);
        }
        /*kui pole veel lõppu jõudnud lisatakse positsioonile 1 pixel juurde*/ 
        else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}