function changeVideoHeight(method) {
  let COL_COUNT_DEFAULT = 2;
  let root = document.documentElement;
  let videos = document.getElementById("videos");
  let count = videos.childElementCount;
  let rowCount = getComputedStyle(document.documentElement).getPropertyValue('--videos-number-per-row');
  let showAllButton = document.getElementById('video-show-all-button');
  let showLessButton = document.getElementById('video-show-less-button');
  let width = window.innerWidth;

  videos.style.transition = '0.15s ease-out';
  setTimeout(function stop_animation() {
    videos.style.transition = 'none';
  }, 150);

  if (method == 'all') {
    if (width > 800) {
      root.style.setProperty('--videos-number-per-col', Math.ceil(count / rowCount));
    }
    else {
      root.style.setProperty('--videos-number-per-col', count);
    }
    showAllButton.style.display = 'none';
    showLessButton.style.display = 'block';
  }
  else if (method == 'less') {
    if (width > 800) {
      root.style.setProperty('--videos-number-per-col', COL_COUNT_DEFAULT);
    }
    else {
      let height = 4 * 230;
      root.style.setProperty('--videos-number-per-col', COL_COUNT_DEFAULT);
    }
    showLessButton.style.display = 'none';
    showAllButton.style.display = 'block';
  }
}

function randomTexts() {
  let randomNum = Math.floor(Math.random() * 10);
  let heart = document.getElementById('heart');
  let developerText = document.getElementById('is-text');

  switch (randomNum) {
    case 1:
      heart.src = './Resources/img/hearts/empty_heart.svg';
      break;
    case 2:
      heart.src = './Resources/img/hearts/half_heart.svg';
      break;
    case 3:
      heart.src = './Resources/img/hearts/hardcore_heart.svg';
      break;
    case 4:
      heart.src = './Resources/img/hearts/poisoned_heart.svg';
      break;
    case 5:
      heart.src = './Resources/img/hearts/withered_heart.svg';
      break;
    default:
      heart.src = './Resources/img/hearts/heart.svg';
  }

  randomNum = Math.floor(Math.random() * 10);
  switch (randomNum) {
    case 1:
      developerText.innerHTML = 'is (probably)';
      break;
    case 2:
      developerText.innerHTML = 'must be';
      break;
    case 3:
      developerText.innerHTML = 'should be';
      break;
    case 4:
      developerText.innerHTML = 'could be';
      break;
    case 5:
      developerText.innerHTML = 'is definitely';
      break;
    case 6:
      developerText.innerHTML = 'is always';
      break;
    default:
      developerText.innerHTML = 'is';
  }
}

function search(url){
    var userInput = document.getElementById("keyword").value;
    window.open(url + userInput);
}

function unfinishedFeature() {
  alert("This feature is still under development :)");
}

function main() {
  randomTexts();

  let videos = document.getElementById("videos");
  let count = videos.childElementCount;
  let showAllButton = document.getElementById('video-show-all-button');
  let rowCount = getComputedStyle(document.documentElement).getPropertyValue('--videos-number-per-row');
  let colCount = getComputedStyle(document.documentElement).getPropertyValue('--videos-number-per-col');

  if (count <= rowCount * colCount) {
    showAllButton.style.display = 'none';
  }
}
