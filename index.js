const drumMap = {
    w: { sound: 'sounds/crash.mp3', image: 'images/kick.png' },
    a: { sound: 'sounds/kick-bass.mp3', image: 'images/kick.png' },
    s: { sound: 'sounds/snare.mp3', image: 'images/snare.png' },
    d: { sound: 'sounds/tom-1.mp3', image: 'images/tom1.png' },
    j: { sound: 'sounds/tom-2.mp3', image: 'images/tom2.png' },
    k: { sound: 'sounds/tom-3.mp3', image: 'images/tom3.png' },
    l: { sound: 'sounds/tom-4.mp3', image: 'images/tom4.png' }
};

document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', function () {
        const key = this.innerHTML;
        playSound(key);
        changeImage(this, key);
        buttonAnimation(key);
    });
});

document.addEventListener('keydown', function (event) {
    const key = event.key.toLowerCase();
    const button = document.querySelector(`.${key}`);
    if (button) {
        playSound(key);
        changeImage(button, key);
        buttonAnimation(key);
    }
});

function playSound(key) {
    const drum = drumMap[key];
    if (drum) {
        const audio = new Audio(drum.sound);
        audio.play();
    }
}

function changeImage(button, key) {
    const drum = drumMap[key];
    if (drum) {
        button.style.backgroundImage = `url('${drum.image}')`;
    }
}

function buttonAnimation(currentKey) {
    const activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add('pressed');
    setTimeout(() => {
        activeButton.classList.remove('pressed');
    }, 100);
}
