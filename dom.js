
// querySelector

var secondItem = document.querySelector
('.list-group-item:nth-child(2)');

secondItem.style.background = 'green';

var thirdItem = document.querySelector
('.list-group-item:nth-child(3)');

thirdItem.style.display = 'none';

// QUERY SELECTOR ALL

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}


var secondItem = document.querySelector
('li:nth-child(2)');

secondItem.style.color = 'green';


