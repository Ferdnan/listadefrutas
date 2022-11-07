// Manipulacao de frutas
const shift = () => {
    let texto = document.getElementById('resultado').innerHTML;
    let textoarray = texto.split(' ');
    textoarray.shift();
    document.getElementById('resultado').innerHTML = textoarray.join(' ');
};
const pop = () => {
    let textoArray = document.getElementById('resultado').innerHTML.split(' ');
    textoArray.pop();
    document.getElementById('resultado').innerHTML = textoArray.join(' ');
};
const clean = () => {
    let texto = document.getElementById('resultado').innerHTML.split(' ');
    texto = '';
    document.getElementById('resultado').innerHTML = texto;
};
const backup = () => {
    const arrayFrutas = ['🍊','🍇','🍎','🫐','🥑','🍋','🌽','🍓','🥝','🍌','🍅','🍉','🍈'];
    document.getElementById('resultado').innerHTML = arrayFrutas.join(' ')
};

// Manipulacao de texto
let listaRecebida = [];
const frase = () => {
    let frase = document.querySelector('#texto').value; 
    document.getElementById('frase').innerHTML = frase;
};


