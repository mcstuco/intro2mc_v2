// dropdown menu controller
let open = false;
function drp_handler() {
  let image = document.getElementById('drp_menu');
  let menu = document.getElementById('header');
  if (open == true) {
    image.src = './Resources/img/chest_closed.png';
    header.style.transition = '0.15s ease-out';
    menu.style.height = '74px';
    open = false;
    setTimeout(function stop_animation() {
      header.style.transition = 'none';
    }, 150);
  }
  else {
    image.src = './Resources/img/chest_open.png';
    header.style.transition = '0.15s ease-out';
    menu.style.height = '205px';
    open = true;
    setTimeout(function stop_animation() {
      header.style.transition = 'none';
    }, 150);

  }
}

const width = window.matchMedia('(min-width: 800px)');
function drp_collaspe(width) {
  let image = document.getElementById('drp_menu');
  let menu = document.getElementById('header');
  if (width.matches) { // if width >= 800px
    image.src = './Resources/img/chest_closed.png';
    menu.style.height = '74px';
    open = false;
  }
}

width.addListener(drp_collaspe);
drp_collaspe(width);
