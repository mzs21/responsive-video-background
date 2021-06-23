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
