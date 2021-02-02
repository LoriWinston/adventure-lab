import questData from '../data.js';
const ul = document.querySelector('ul');

const user = JSON.parse(localStorage.getItem('USER'));

// - Before anything, if all quests are completed, redirect to results page
let completedAllQuests = true;

for (let quest of questData) {
    // if this quest is NOT in the completed object
    if (!user.completed[quest.id]) {
        completedAllQuests = false;
    }
}

// - If the user has <= 0 HP, redirect them to the results page
if (user.hp <= 0 || completedAllQuests) {
    window.location = '../results';
}
// - Otherwise, grab quest data
// - Loop through it
for (let quest of questData) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    // - Generate a title for each quest
    a.textContent = quest.title;
    a.href = `../quest/?id=${quest.id}`;
    // - If the quest has been completed, cross it out
    // - If the quest has NOT been completed it should be a link to the correct quest
    li.append(a);
    ul.append(li);
}

/*import { getUser } from '../data/api.js';
import quests from '../data/quest-data.js';
import loadProfile from '../common/load-profile.js';
import createQuestLink from './create-quest-link.js';
import createCompletedQuest from './create-completed-quest.js';
import hasCompletedAllQuests from './has-completed-all-quests.js';
import isDead from '../common/is-dead.js';

loadProfile(); // i predict we'll load the header on every page but the home page

// go grab the user from localStorage
const user = getUser();

// if they're dead, or if they've completed all the quests
if (isDead(user) || hasCompletedAllQuests(quests, user)) {
    // send them to the results page
    window.location = '../results';
}
// getting some quest element from DOM
const nav = document.getElementById('quests');

for (let i = 0; i < quests.length; i++) {
    // for every quest
    const quest = quests[i];
    let questDisplay = null;
    // if the user has completed it
    if (user.completed[quest.id]) {
        // make a completed quest display (with a checkmark)
        questDisplay = createCompletedQuest(quest);
    }
    else {
        // otherwiese, make a link to the quest
        questDisplay = createQuestLink(quest);
    }
    nav.appendChild(questDisplay); // add the quest display to the nav */