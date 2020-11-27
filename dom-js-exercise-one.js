const container = document.querySelector('#container');

const paragraph = document.createElement('p');
paragraph.textContent = `Hey I'm red!`;
paragraph.style.color = 'red';

container.appendChild(paragraph);

const headingThree = document.createElement('h3');
headingThree.textContent = `I'm a blue h3!`;
headingThree.style.color = 'blue';

container.appendChild(headingThree);

const div = document.createElement('div');
div.style.backgroundColor = 'pink';
div.style.border = 'solid';
div.style.borderColor = 'black';
div.style.height = '30px';

/* const headingOne = document.createElement('h1');
headingOne.textContent = `I'm in a div`;

div.appendChild(headingOne); */

container.appendChild(div);


