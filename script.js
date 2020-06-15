var i = 0;
var txt = "Let My Dataset Change Your Mindset.";
var speed = 60;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("code").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
