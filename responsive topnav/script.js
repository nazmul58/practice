

let x = document.getElementById('myTopnav');

// x.addEventListener('click',{

// })

x.addEventListener('click', function () {
  if (x.className == 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = "topnav";
  }
})