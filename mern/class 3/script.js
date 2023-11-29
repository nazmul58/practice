// function myFunction() {
//     let text;
//     if (document.getElementById("id1").validity.rangeOverflow) {
//       text = "Value too large";
//     } else {
//       text = "Input OK";
//     } 
//     document.getElementById("demo").innerHTML = text;
//   }

function myFunction() {
    let text;
    const validObj = document.getElementById('id1');

    if (validObj.validity.rangeOverflow) {
        text = "value large";
    } else {
        text = "input okay"
    }
    document.getElementById('demo').innerHTML = text;
}