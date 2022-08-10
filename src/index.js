console.log('hello world');



// fetch('https://api.github.com/users/kod570')
fetch('/data/profile.json')
.then((response) => response.json())
.then((profil) => {

    console.log(profil);

    let imageContainer = document.querySelector('.profile-image')
    let imagetext = document.querySelector('.profile-text')

    imageContainer.src = profil.avatar_url;
    // imagetext.textContent = profil.login;


    imagetext.insertAdjacentHTML('beforeend', `<b>${profil.login} er mit <i>navn</i></b>`)


    console.log('test', imageContainer.src, imageContainer.id);

});

function open() {
 console.log('open');
}

const openme = () => {
 console.log('Open me');
}


open();
openme();