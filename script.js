function encryptText(text) {
    const encryptionKeys = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return text.replace(/[eioua]/g, match => encryptionKeys[match]);
}

function decryptText(text) {
    const decryptionKeys = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    return text.replace(/enter|imes|ai|ober|ufat/g, match => decryptionKeys[match]);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

function showResult() {
    document.querySelector('.ilu').classList.add('hidden');
    document.querySelector('.texto').classList.add('hidden');
    document.querySelector('.btn-copiar').classList.remove('hidden');
}

document.querySelector('.btn-encriptar').addEventListener('click', () => {
    const inputText = document.querySelector('.text-area').value;
    const encryptedText = encryptText(inputText);
    document.querySelector('.mensaje').value = encryptedText;
    showResult();
});

document.querySelector('.btn-desencriptar').addEventListener('click', () => {
    const inputText = document.querySelector('.text-area').value;
    const decryptedText = decryptText(inputText);
    document.querySelector('.mensaje').value = decryptedText;
    showResult();
});

document.querySelector('.btn-copiar').addEventListener('click', () => {
    const resultText = document.querySelector('.mensaje').value;
    copyToClipboard(resultText);
});

function createMatrixLetter() {
    const container = document.getElementById('matrix-container');
    const letter = document.createElement('div');
    letter.classList.add('matrix-letter');
    letter.textContent = getRandomCharacter(); 
    letter.style.left = Math.random() * 100 + 'px';
    letter.style.top = Math.random() * 100 + 'px';
    container.appendChild(letter);

    setTimeout(() => {
        container.removeChild(letter);
    }, 5000); 
}

function getRandomCharacter() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return chars.charAt(Math.floor(Math.random() * chars.length));
}

setInterval(createMatrixLetter, 100);