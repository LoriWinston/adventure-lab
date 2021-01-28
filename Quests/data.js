const capybaras = {
    id: 'capybaras',
    title: 'A Pile of Baby Capybaras',
    map: {

    },
    image: 'capybaras.jpg',
    description: `You mosey along until you come upon a pile of baby capybaras. They are quite fluffy and are not currently being petted. What do you do?
    `,
    choices: [{
        id: 'pet-them',
        description: 'Pet the baby capybaras',
        result: `The baby capybaras enjoy the pets and curl up for a nice nap.
        `,
        coolpoints: 10,
        hearts: 50,
    }, {
        id: 'pet-them-a-whole-lot',
        description: 'Pet the baby capybaras like A BUNCH'
        result: `The baby capybaras really appreciate the extra pets. They climb on your lap and everyone has a nice, refreshing nap.
        `,
        coolpoints: 7000,
        hearts: 300,
    }, {
        id: 'no-pet',
        description: 'Continue on your way without petting the capybaras',
        result: `Get out of here! FOR SHAME
        `,
        coolpoints: -9000,
        hearts: 0,
    }]
};

const nextGen = {
    id: 'next-gen',
    title: 'Jean-Luc Picard and Data hanging out in 10 Forward',
    map: {

    },
    image: 'picarddata.jpg',
    description: `You journey on, minding your own business until you come upon a cool-looking space bar. Turns out it's 10 Forward from Next Generation era Star Trek, imagine your luck! Inside you find Jean-Luc Picard and Data looking pretty bored. What do you do?
    `,
    choices: [{
        id: 'play-poker',
        description: 'Play some space poker with Picard and Data',
        result: `You pull out a deck of cards and play a very fun and heated game of poker. Picard now owes you 300 Energy Credits.
        `,
        coolpoints: 400,
        hearts: 10,
    }, {
        id:'dance',
        description: 'Dance for them',
        result: `Without wasting a moment you bust out a lively space jig to the utter delight of everyone. A single tear roles down Picard's cheek and he leads a slow-clap until everyone is cheering and screaming your name.
        `,
        coolpoints: 5000,
        hearts: 50,
        }, {
        id: 'stare-at-the-floor',
        description: 'You stare at the floor and shuffle your feet a bit until they eventually start staring at a space bird and forget you are there.',
        result: `The biggest loss you sustain is the missed opportunity for friendship (space friendship, especially)
            `,
        coolpoints: -35,
        hearts: 0,
        }]
};

    const bmo = {
        id: 'bmo',
        title: 'Bmo from Adventure Time'
        map: {
        },
        image: 'bmo.jpg',
        description: `You walk (or fly, either way) until you come across BMO from Adventure Time. They are trying to write a song but not having much luck. What do you do?
        `,
        choices = [{
            id: 'ukelele',
            description: 'Bust out a ukelele and get to work',
            result: `You grab your ukelele and start to jam. Your creative energy is so powerful that together you create THEE BEST SONG ever
            `,
            coolpoints: 9000,
            hearts: 500,
        }, {
            id: 'disappoint',
            description: 'Mumble something about being busy and turn to leave',
            result: `You discover it is possible to break the heart of a robot. Wow.
            `,
            coolpoints: -5000,
            hearts: 0,
        }, {
            id: 'distraction',
            description: 'Point to a nearby diversion in an attempt to distract from your lack of musical prowess',
            result: `Though successfully distracted, an opportunity to bond with a robot is lost. Kinda a bummer, really
            `,
            coolpoints: 0,
            hearts: 0,
        }]
    };

    const quests = [
        capybaras,
        nextGen,
        bmo,
    ];

    export default quests;

