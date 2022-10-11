/* Gioco dei dadi - Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */

const genera = document.querySelector('.genera');
const cancella = document.querySelector('.cancella');


genera.addEventListener('click', function(){
    const userRandomNumber = Math.floor(Math.random()*6)+1;
    const pcRandomNumber = Math.floor(Math.random()*6)+1;
    const numberUser = document.querySelector('.numberUser');
    const numberPc = document.querySelector('.numberPc');
    numberUser.innerHTML = userRandomNumber;
    numberPc.innerHTML = pcRandomNumber
    const risultato = document.querySelector('.risultato');
    risultato.style.display = 'block';
    if(userRandomNumber>pcRandomNumber){
        risultato.innerHTML = 'Hai vinto!';
    } else if (userRandomNumber<pcRandomNumber){
        risultato.innerHTML = 'Hai perso!';
    } else{
        risultato.innerHTML = 'Pareggio!';
    }


});
cancella.addEventListener('click', function(){
    window.location.reload();

});
