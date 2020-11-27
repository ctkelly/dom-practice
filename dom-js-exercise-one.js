const container = document.querySelector('#container');

const paragraph = document.createElement('p');
paragraph.textContent = `Hey I'm red!`;
paragraph.style.color = 'red';

container.appendChild(paragraph);

const heading = document.createElement('h3');
heading.textContent = `I'm a blue h3!`;
heading.style.color = 'blue';

container.appendChild(heading);

