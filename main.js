const settingsButton = document.querySelector('#settings-button');
const helpButton = document.querySelector('#help-button');
const criarPinButton = document.querySelector('#criar-pin-button');

const criarPinPopUp = document.querySelector('.criar-pin-popup');
const settingsPopUp = document.querySelector('#settings-popup');
const helpPopUp = document.querySelector('.help-popup');

// Verifica se o popUp está na tela no momento do clique.
// Caso esteja, então ele é removido, caso contrário é exibido, 
// simulando assim um controle de abre-fecha em um único botão.
helpButton.addEventListener('click', function() {
    const helpPopUpDisplayStatus = getComputedStyle(helpPopUp).getPropertyValue('display');
    const criarPinPopUpDisplayStatus = getComputedStyle(criarPinPopUp).getPropertyValue('display');

    if (helpPopUpDisplayStatus === 'none') {
        helpPopUp.style.display = 'flex';
        criarPinPopUp.style.display = 'none';
    } else {
        helpPopUp.style.display = 'none';
    }
})

criarPinButton.addEventListener('click', function() {
    const criarPinPopUpDisplayStatus = getComputedStyle(criarPinPopUp).getPropertyValue('display');
    const helpPopUpDisplayStatus = getComputedStyle(helpPopUp).getPropertyValue('display');

    if (criarPinPopUpDisplayStatus === 'none') {
        criarPinPopUp.style.display = 'flex';
        helpPopUp.style.display = 'none';
    } else {
        criarPinPopUp.style.display = 'none';
    }
})

settingsButton.addEventListener('click', function() {
    const settingsPopUpDisplayStatus = getComputedStyle(settingsPopUp).getPropertyValue('display');

    if (settingsPopUpDisplayStatus === 'none') {
        settingsPopUp.style.display = 'flex';
    } else {
        settingsPopUp.style.display = 'none';
    }
})

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const logoImg = document.querySelector('.logo-img');

// Simula o efeito de pressionar e segurar um botão.
logoImg.addEventListener('mousedown', function() {
    logoImg.style.width = '22px';
    logoImg.style.height = '90%';
    logoImg.style.backgroundColor = 'rgb(225, 225, 225)';
})

logoImg.addEventListener('mouseup', function() {
    logoImg.style.width = '25px';
    logoImg.style.height = '95%';
    logoImg.style.backgroundColor = 'initial';
})

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const saveNotifier = document.querySelector('.save-notifier');
const appNotifier = document.querySelector('.app-notifier')
const fade = document.querySelector('.fade');

// Ativa a transição do CSS para criar o efeito de animação.
function popUpSaveNotifier() {
    saveNotifier.style.bottom = '30px';
}

// Ativa a transição do CSS para criar o efeito de animação.
function popDownSaveNotifier() {
    saveNotifier.style.bottom = '-100px';
}

function savePin(saveButton) {
    const interactionButtons = saveButton.nextElementSibling;
    const editButton = interactionButtons.firstElementChild; 

    saveButton.style.backgroundColor = 'black';
    saveButton.innerHTML = 'Salvando... ';

    // Simula o tempo de salvamento do pin e chama a notificação
    // de save.
    setTimeout(function() {
        saveButton.innerHTML = 'Salvo';

        popUpSaveNotifier();

        interactionButtons.style.right = '-35px';
        editButton.className = 'edit-button show'
        
        setTimeout(popDownSaveNotifier, 3000);
    }, 1000)
}

function popUpAppNotifier() {
    if (window.innerWidth <= 500) {
        appNotifier.style.display = 'flex';
        fade.style.display = 'initial';
    } 
}

function popDownAppNotifier() {
    appNotifier.style.display = 'none';
    fade.style.display = 'none';
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const header = document.getElementsByTagName('header')[0];

// Adiciona o efeito de sobreposição do header no momento
// do scroll.
document.addEventListener('scroll', function() {
    if (window.scrollY >= 23) {
        header.style.boxShadow = '0px -6px 16px 0px rgba(0, 0, 0, 0.4)';
    } else {
        header.style.boxShadow = 'none';
    }
})
