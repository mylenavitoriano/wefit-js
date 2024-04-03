const rows = document.querySelectorAll('.row');

/* ------- Manipulação Menu ------- */
const menu = rows[0].querySelector('.btn-group-vertical');
menu.classList.replace('btn-group-vertical', 'btn-group');
menu.style.gap = '.25rem';

for (const child of menu.children) {
    child.style.borderRadius = '.25rem';
}


/* ------- Manipulação Header ------- */
const header = rows[1].querySelector(".jumbotron");
header.style.background = '#6B757E';
header.style.color = '#FFF';
header.style.textAlign  = 'end';

const buttonHeader = header.querySelector('a');
buttonHeader.classList.replace('btn-primary', 'btn-success');


/* ------- Manipulação Cards ------- */
const cards = (rows[2]).querySelectorAll('.card');
cards[1].querySelector('a').classList.replace('btn-primary', 'btn-success');


/* ------- Manipulação Lista ------- */
const list = rows[3].querySelector('.list-group');
list.append(addListItem('Quarto item'), addListItem('Quinto item'));

const children = list.querySelectorAll('.list-group-item');
    
children.forEach((child, index) => {
    child.classList.remove('active');
    
    if (index === 3) {
        child.classList.add('active');
    }
});

function addListItem(content) {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = content;
    return li;
}