// play sound
let hurtSound = document.getElementById('hurt');
hurtSound.volume = 0.5;
let hurtSound2 = document.getElementById('hurt2');
let difficulty = 'peaceful';
let regenRate = 1000;
let health = 20;
let audioOn = true;
let playerName = 'player';

var regenTimer = setInterval(function increaseHealth() {
  if (health < 20) {
    health++;
    display(health);
  }
}, regenRate);

function display(n) {
  for (var i = 1; i <= 10; i++) {
    let heart = document.getElementById(i.toString());

    if (i * 2 <= n) {
      heart.src = './Resources/img/hearts/full_heart.png';
    }
    else {
      if (i * 2 - 1 == n) {
        heart.src = './Resources/img/hearts/half_heart.png';
      }
      else {
        heart.src = './Resources/img/hearts/empty_heart.png';
      }
    }
  }
}

function changeDfficulty() {
  let difficultyDisplay = document.getElementById('current-difficulty');
  let button = document.getElementById('difficulty-button');

  if (difficulty == 'peaceful') {
    difficulty = 'easy';
    regenRate = 4000;
    regen(regenRate);
  }
  else if (difficulty == 'easy') {
    difficulty = 'normal';
    regenRate = 10000;
    regen(regenRate);
  }
  else if (difficulty == 'normal') {
    difficulty = 'hard';
    regenRate = 30000;
    regen(regenRate);
  }
  else if (difficulty == 'hard') {
    difficulty = 'peaceful';
    regenRate = 1000;
    regen(regenRate);
  }
  button.src = './Resources/img/buttons/' + difficulty + '_selected.png';
  difficultyDisplay.innerHTML = difficulty;
}

function selectDifficultyButton() {
  let button = document.getElementById('difficulty-button');
  button.src = './Resources/img/buttons/' + difficulty + '_selected.png';
}

function deselectDifficultyButton() {
  let button = document.getElementById('difficulty-button');
  button.src = './Resources/img/buttons/' + difficulty + '.png';
}

function audioControl() {
  audioOn = !audioOn;
  let button = document.getElementById('audio-button');
  let fileName = audioOn ? 'audio_on' : 'audio_off';
  button.src = './Resources/img/buttons/' + fileName + '_selected.png';
}

function selectAudioButton() {
  let button = document.getElementById('audio-button');
  let fileName = audioOn ? 'audio_on' : 'audio_off';
  button.src = './Resources/img/buttons/' + fileName + '_selected.png';
}

function deselectAudioButton() {
  let button = document.getElementById('audio-button');
  let fileName = audioOn ? 'audio_on' : 'audio_off';
  button.src = './Resources/img/buttons/' + fileName + '.png';
}

function selectButton(name) {
  let button = document.getElementById(name + '-button');
  button.src = './Resources/img/buttons/' + name + '_selected.png';
}

function deselectButton(name) {
  let button = document.getElementById(name + '-button');
  button.src = './Resources/img/buttons/' + name + '.png';
}

function hurt() {
  if (audioOn == true) {
    hurtSound2.cloneNode(true).play();
    if (health != 1) {
      hurtSound.cloneNode(true).play();
    }
  }
  health--;
  display(health);
  if (health == 0) {
    clearInterval(regenTimer);
    setTimeout(function death() {
      let gameScreen = document.getElementById('game-screen');
      let deathScreen = document.getElementById('death-screen');
      let deathMessage = document.getElementById('message');
      gameScreen.style.display = 'none';
      deathScreen.style.display = 'block';
      deathMessage.innerHTML = 'You were pricked to death';
    }, 50);
  }
}

function respawn() {
  let gameScreen = document.getElementById('game-screen');
  let deathScreen = document.getElementById('death-screen');
  gameScreen.style.display = 'block';
  deathScreen.style.display = 'none';
  health = 20;
  display(health);
  regen(regenRate);
}

function regen(inteval) {
  clearInterval(regenTimer);
  regenTimer = setInterval(function increaseHealth() {
    if (health < 20) {
      health++;
      display(health);
    }
  }, inteval);
}

function main() {
  let deathScreen = document.getElementById('death-screen');
  deathScreen.style.display = 'none';
  display(health);
}
