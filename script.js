var i = 0;
var txt = "Give me bamboo I'll return you magic.";
var speed = 60;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("code").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
