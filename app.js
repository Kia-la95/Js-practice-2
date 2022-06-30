
let count = 0;

//select value and button
/**  for querySelector ==> if the parameter starts with (.) it is refering to a class, but if it starts with (#) it is 
reffering to an id*/

const value = document.querySelector('#value'); //select the value id
const btns = document.querySelectorAll('.btn'); //select all button classes

btns.forEach(function (item) {

    item.addEventListener('click', function (event) {

        const btnSyle = event.currentTarget.classList; // we can get all the classes of the button
        if (btnSyle.contains('decrease')) {
            count--;
        }
        else if (btnSyle.contains('increase')) {
            count++;
        }
        else if (btnSyle.contains('reset')) {
            count = 0;
        }

        if (count > 0) {
            value.style.color = 'green';
        }
        else if (count < 0) {
            value.style.color = 'red';
        }
        else {
            value.style.color = '#222';
        }

        value.textContent = count;
    })

})