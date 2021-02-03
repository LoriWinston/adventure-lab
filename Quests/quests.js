import { findById } from '../utils.js';
import quests from '../Data/data.js';

// const quest = findById(quests, questId);


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
console.log(questId);
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

/* import loadProfile from '../common/load-profile.js';
import { getUser, saveUser } from '../data/api.js';
import quests from '../data/quest-data.js';
import createChoice from './create-choice.js';
import findById from '../common/find-by-id.js';
import scoreQuest from './score-quest.js';

loadProfile(); // gets user from local storage and adds it to the header

// go grab the query parameter from the URL
const searchParams = new URLSearchParams(window.location.search);
// go get the quest id from the URL
const questId = searchParams.get('id');
// go use old faithful to find our quest
const quest = findById(quests, questId);

// if there's no such quest 
if (!quest) {
    window.location = '../map';
}

const title = document.getElementById('title');
const image = document.getElementById('image');
const audio = document.getElementById('audio');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

// use the quest that we found to populate the dom
title.textContent = quest.title;
image.src = '../assets/quests/' + quest.image;
audio.src = '../assets/quests/' + quest.audio;
description.textContent = quest.description;

// for each of the quest's choices
for (let index = 0; index < quest.choices.length; index++) {
    const choice = quest.choices[index];
    // go make a choice dom element
    const choiceDOM = createChoice(choice);
    // and append that choice
    choices.appendChild(choiceDOM);
}

choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // get user choice
    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    // use old faitful to find the choice
    const choice = findById(quest.choices, choiceId); // go find the choice based on the id

    // get user out of local storage
    const user = getUser();
    // generate a score and manipulate user state
    scoreQuest(choice, quest.id, user);
    // save user
    saveUser(user);

    // update UI
    audio.src = '../assets/quests/' + quest.action;
    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;
    // reload profile for new stats
    loadProfile();

}); */