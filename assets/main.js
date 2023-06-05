// bring all of your dom parameters
const author = document.querySelector('#author');
const title = document.querySelector('#title');
const isbn = document.querySelector('#isbn');
const amount = document.querySelector('#amount');
const msg = document.querySelector('#msg');
const tbody = document.querySelector('#tbody');
const btn = document.querySelector('#add');

// function to handle other functions
loadAllEvent();

function loadAllEvent() {
    btn.addEventListener('click',addBook);
    tbody.addEventListener('click',delBook);
}

function addBook(e){
    if (author.value==="" || title.value==="" || isbn.value==="" || amount.value==="") {

        msg.innerHTML ='Please enter a valid input';
        msg.classList.add('error');

        setTimeout(function(){
            msg.innerHTML = '';
            msg.classList.remove('error');
        },1000)
    } else {
        // create a tr
        const tr = document.createElement('tr');

        tr.innerHTML =
            `<td>${author.value}</td>
            <td>${title.value}</td>
            <td>UPT-${isbn.value}</td>
            <td>${amount.value}</td>
            <td><button class='btn btn-danger'>Delete</button></td>`    

            
        tbody.appendChild(tr);

        author.value = ''
        title.value = ''
        isbn.value = ''
        amount.value = ''
    }

    e.preventDefault();
}

// delete
function delBook(e){
    if(e.target.classList.contains('btn-danger')){
        e.target.parentElement.parentElement.remove()
    }
}





