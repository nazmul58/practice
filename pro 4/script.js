//Global variable
let div = null;



window.addEventListener('load', function () {
    main();
})



function main() {

    var btn = document.getElementById('btnClick');
    var rgb = document.getElementById('rgbColor');
    var root = document.getElementById('root');
    const copyColor = document.getElementById('copyColor');



    btn.addEventListener('click', function () {
        const bgColor = rgbCol()
        root.style.background = bgColor;
        var rgbColor = document.getElementById('rgbColor');
        rgbColor.setAttribute('value', bgColor);

    })

    copyColor.addEventListener('click', function () {
        window.navigator.clipboard.writeText(rgb.value);
        if (div != null) {
            div.remove();
            div = null;
        }


        copiedTostMessage(`${rgb.value} copied`);
    });
}

function rgbCol() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);

    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

//tost message
function copiedTostMessage(mesg) {
    div = document.createElement('div');
    div.innerHTML = mesg;
    div.className = 'tost-message tost-message-slide-in';

    div.addEventListener('click', function () {
        div.classList.remove('tost-message-slide-in');
        div.classList.add('tost-message-slide-out');

        div.addEventListener('animationend', function () {
            this.remove();
            div = null;
        })
    });

    document.body.appendChild(div);
}
/**
 * 
 * @param {string} color 
 */
function isVsliidHex(color){
    if(color.length != 7) return false;
    if(color[0]!='#') return false;
}