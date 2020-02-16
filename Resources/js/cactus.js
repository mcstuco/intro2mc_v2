// play sound
let hurtSound = document.getElementById('hurt');
hurtSound.volume = 0.5;
let hurtSound2 = document.getElementById('hurt2');
let difficulty = 'peaceful';
let regenRate = 1000;
let health = 10;

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
  difficultyDisplay.innerHTML = difficulty;
}

function hurt() {
  hurtSound2.play();
  hurtSound.play();
  health--;
  display(health);
  if (health == 0) {
    setTimeout(function deathMessage() {
      alert('You were pricked to death');
      health = 20;
      display(health);
    }, 100);

  }
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
  let difficultyDisplay = document.getElementById('current-difficulty');
  difficultyDisplay.innerHTML = difficulty;

  display(health);
}
