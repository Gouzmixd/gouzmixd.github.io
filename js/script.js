let msg = "Cock and ball torture (CBT) is a sexual activity involving the application of pain or constriction to the male genitals. This may involve directly painful activities, such as genital piercing, wax play, genital spanking, squeezing, ball-busting, genital flogging, urethral play, tickle torture, erotic electrostimulation, kneeing or kicking. The recipient of such activities may receive direct physical pleasure via masochism, or emotional pleasure through erotic humiliation, or knowledge that the play is pleasing to a sadistic dominant. Many of these practices carry significant health risks.";

function prout() {
    document.getElementById("fart").style.animation="spin2 1s linear infinite";
    setTimeout(() => document.getElementById("fart").style = '', 1000)
    var audio = new Audio("./assets/fart.mp3");
    audio.play();
}

function cbt() {
    alert(msg);

    var audio = new Audio("./assets/slippin.mp3");
    audio.play();

    document.getElementById("cbt").style.animation="slideIn 1.5s linear infinite";
    setTimeout(() => document.getElementById("cbt").style = 'display:none', 1000)  


}

function ifarted() {
    let fart = document.getElementById("ifarted");
    if(window.getComputedStyle(fart).display == "none") {
        fart.style.display = "block";
    } else {
        fart.style.display= "none";
    }
}