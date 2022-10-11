/* Mail - Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. */



const eMails =[
    'martina.caruso@libero.it',
    'mattiasorrentino@gmail.com',
    'verdi_mattia89@hotmail.com',
    'giacomogrigi@yahoo.it',
    'marzoni_incapaci123@mailtag.com'
];

const userMail = prompt('inserire E-Mail');

// if (eMails.includes(userMail)){
//     alert('accesso consentito!')
// } else{
//     alert('accesso negato!')
// }


//o

let valid = 'accesso negato!'

for (let i = 0; i < eMails.length; i++) {
    if (eMails[i]===userMail){
        valid = 'accesso consentito!';
    }
}

alert(valid);
