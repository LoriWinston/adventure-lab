import { getUser } from '../data/api.js';
import isDead from './is-dead.js';

function loadProfile() {
    /* reference needed DOM elements */
    const name = document.getElementById('name');
    const character = document.getElementById('character');
    const coolpoints = document.getElementById('coolpoints');
    const hearts = document.getElementById('hearts');

    /* initialize: load and parse json with user from local storage */
    const user = getUser();

    // if there's no user
    if (!user) {
        // no user? go back to sign up:
        window.location = './';
    }

    // copy data from object to DOM properties:
    name.textContent = user.name;
    //avatar.src = '../assets/avatars/' + user.race + '.png';
    hearts.textContent = user.hearts;

    // if they're dead, say so in the header
    if (isDead(user)) {
        coolpoints.textContent = 'OH NOES, YOU DIED!!!';
    }
    else {
        // otherwise show the user hp
        coolpoints.textContent = user.coolpoints;
    }

}

export default loadProfile;