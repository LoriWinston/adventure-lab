
// build a simple JS user out of the weird formdata object
function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        character: formData.get('character'),
        coolpoints: 500,
        hearts: 50,
        completed: {}
    };

    return user;
}

export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    character: formData.get('character'),
    coolpoints: 500,
    hearts: 50,
    completed: {}
});

export default makeUser;