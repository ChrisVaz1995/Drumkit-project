let buttons = document.querySelectorAll('button'); 

const handleDrumClick = (e) => {
    let innerHTML = e.target.innerHTML
}


for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
        sound(e.target.classList.value)
    })
}




document.addEventListener("keypress", function(e) {
    sound(e.key);
    animation(e.key);
}) 

function sound(key) {
    switch (key) {
        case "w": 
        let sound1 = new Audio("music/sounds_sound-1.mp3");
        sound1.play();
        break;

        case "a": 
        let sound2 = new Audio("music/sounds_sound-2.mp3");
        sound2.play();
        break;

        case "s": 
        let sound3 = new Audio("music/sounds_sound-3.mp3");
        sound3.play();
        break;

        case "d": 
        let sound4 = new Audio("music/sounds_sound-4.mp3");
        sound4.play();
        break;

        case "g": 
        let sound5 = new Audio("music/sounds_sound-5.mp3");
        sound5.play();
        break;

        case "f": 
        let sound6 = new Audio("music/sounds_sound-6.mp3");
        sound6.play();
        break;
        
    }
}

function animation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("animation");
    
    setTimeout(function() {
      activeButton.classList.remove("animation");
    }, 100);
  }