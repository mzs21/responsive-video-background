"use strict";
var playAudio = document.querySelector('#play');
var buttonElement = document.querySelector('button');
var enableAudio = function () {
    playAudio.autoplay = true;
    playAudio.load();
};
var disableAudio = function () {
    playAudio.autoplay = false;
    playAudio.load();
};
buttonElement.addEventListener('click', function () {
    if (buttonElement.innerText === "Turn on Audio") {
        buttonElement.innerText = "Turn off Audio";
        enableAudio();
    }
    else {
        buttonElement.innerText = "Turn on Audio";
        disableAudio();
    }
});
