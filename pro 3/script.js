var nameValue = document.getElementById('nameValue'), id = document.getElementById('id'),
    dep = document.getElementById('dep'),
    gpa = document.getElementById('gpa'),
    addBtn = document.getElementById('addbtn');


//select all input element
var input = document.querySelectorAll('input');

//select table
var tableData = document.getElementById('tableData');


//input fill up check and showing message
addBtn.addEventListener('click', (e) => {
   
    e.preventDefault();
    for (let i = 0; i < input.length; i++) {
        if (input[i].value == '') {
            alert('Please Fill Up All Input Filde');
            break;
        } else if(input[i].value != ''){
            var tr = document.createElement('tr');
            tableData.appendChild(tr);
            var td1 = document.createElement('td');
            tr.appendChild(td1);
            td1.innerHTML = nameValue.value;
            var td2 = document.createElement('td');
            tr.appendChild(td2);
            td2.innerHTML = id.value;
            var td3 = document.createElement('td');
            tr.appendChild(td3);
            td3.innerHTML = dep.value;
            var td4 = document.createElement('td');
            tr.appendChild(td4);
            td4.innerHTML = gpa.value;
            if (input[0]) {
                break;
            }
        }
        
    }

});



//add element and fill data in table


// var td = document.createElement('td');
// tableData.appendChild(tr);
// tr.appendChild(td);
// td.innerHTML = nameValue.value;