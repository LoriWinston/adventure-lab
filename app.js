const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    console.log(formData);
    const user = {
        name: formData.get('name'),
        character: formData.get('character'),
        coolpoints: 500,
        hearts: 50,
        completed: {},  
    };
   
    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);

    window.location = './map/';
});
