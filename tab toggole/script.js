let tabcontent = document.getElementsByClassName('tabcontent');
let tablink = document.getElementsByClassName('tablinks');


function openCity(evt, cityName, color) {
    var i;

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    for (i = 0; i < tablink.length; i++) {
        tablink[i].style.backgroundColor = "";

    }

    document.getElementById(cityName).style.display = 'block';
    // console.log(evt.currentTarget)
    evt.style.backgroundColor = color;


}
document.getElementById('defaultOpen').onmouseover();
