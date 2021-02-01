import { findById } from '../utils.js';
import { quests } from '../Data/data.js';

const quest = findById(quests, questId);


const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const title = document.getElementById('title');
const description = document.getElementById('description');
const form = document.getElementById('form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');
const backToMap = document.querySelector('#back-to-map');

const params = new URLSearchParams(window.location.search);
const questId = params.get('id');

const quest = findById(quests, questId);

h1.textContent = quest.title;
p.textContent = quest.description;
img.src = `../assets/${quest.image}`; 

for (let choice of quest.choices) {
    const radio = document.createElement('input');
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;
    
    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    label.append(span, radio);

    form.append(label);    
}

const button = document.createElement('button');

button.textContent = 'Submit';

form.appendChild(button);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const selectionId = formData.get('choices');
    const choice = findById(quest.choices, selectionId);
    const user = JSON.parse(localStorage.getItem('USER'));

    user.coolpoints += choice.coolpoints;
    user.hearts += choice.hearts;
  
    resultsSpan.textContent = choice.result;
    user.completed[questId] = true;


    localStorage.setItem('USER', JSON.stringify(user));
});

backToMap.addEventListener('click', () => {
    window.location = '../map';
}); 

