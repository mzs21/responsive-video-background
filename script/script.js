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
var movieName = document.querySelector('.movie-name');
movieName.addEventListener('animationstart', function () {
    movieName.innerText = "Your Name";
});
var directorName = document.querySelector('.director-name');
directorName.addEventListener('animationstart', function () {
    directorName.innerText = "- Directed by Makoto Shinkai";
});
var paraElements = document.querySelector('.description');
var paraElementOne = document.createElement("p");
var paraElementTwo = document.createElement("p");
var paraElementThree = document.createElement("p");
var paraElementFour = document.createElement("p");
var anchorElement = document.createElement("a");
anchorElement.innerText = "here";
anchorElement.setAttribute("href", "https://en.wikipedia.org/wiki/Your_Name");
anchorElement.setAttribute("target", "_blank");
anchorElement.className = "description";
paraElements.appendChild(paraElementOne);
paraElements.appendChild(paraElementTwo);
paraElements.appendChild(paraElementThree);
paraElements.appendChild(paraElementFour);
paraElementOne.addEventListener('animationstart', function () {
    paraElementOne.innerText = "Your Name is a 2016 Japanese animated";
});
paraElementTwo.addEventListener('animationstart', function () {
    paraElementTwo.innerText = "romantic fantasy film produced by";
});
paraElementThree.addEventListener('animationstart', function () {
    paraElementThree.innerText = "CoMix Wave Films & released by Toho.";
});
paraElementFour.addEventListener('animationstart', function () {
    paraElementFour.innerText = "For more info click ";
    paraElementFour.appendChild(anchorElement);
});
