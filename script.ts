let playAudio = document.querySelector('#play') as HTMLAudioElement;

let buttonElement = document.querySelector('button') as HTMLButtonElement;

let enableAudio = () =>
{
    playAudio.autoplay = true;
    playAudio.load();
}

let disableAudio = () =>
{
    playAudio.autoplay = false;
    playAudio.load();
}

buttonElement.addEventListener('click', () => 
{
    if(buttonElement.innerText === "Turn on Audio")
    {
        buttonElement.innerText = "Turn off Audio";
        enableAudio();
    }
    else
    {
        buttonElement.innerText = "Turn on Audio";
        disableAudio();
    }
})

let movieName = document.querySelector('.movie-name') as HTMLParagraphElement;

movieName.addEventListener('animationstart', () =>
{
    movieName.innerText = "Your Name";
});

let directorName = document.querySelector('.director-name') as HTMLParagraphElement;

directorName.addEventListener('animationstart', () =>
{
    directorName.innerText = "- Directed by Makoto Shinkai";
});


let paraElements = document.querySelector('.description') as HTMLParagraphElement;

let paraElementOne = document.createElement("p");
let paraElementTwo = document.createElement("p");
let paraElementThree = document.createElement("p");
let paraElementFour = document.createElement("p");

let anchorElement = document.createElement("a");

anchorElement.innerText = "here"; 
anchorElement.setAttribute("href", "https://en.wikipedia.org/wiki/Your_Name");
anchorElement.setAttribute("target", "_blank");
anchorElement.className = "description";

paraElements.appendChild(paraElementOne);
paraElements.appendChild(paraElementTwo);
paraElements.appendChild(paraElementThree);
paraElements.appendChild(paraElementFour);

paraElementOne.addEventListener('animationstart', () =>
{
    paraElementOne.innerText = "Your Name is a 2016 Japanese animated";
});

paraElementTwo.addEventListener('animationstart', () =>
{
    paraElementTwo.innerText = "romantic fantasy film produced by";
});

paraElementThree.addEventListener('animationstart', () =>
{
    paraElementThree.innerText = "CoMix Wave Films & released by Toho.";
});

paraElementFour.addEventListener('animationstart', () =>
{
    paraElementFour.innerText = "For more info click ";

    paraElementFour.appendChild(anchorElement);
});

