const eMails =[
    'martina.caruso@libero.it',
    'mattiasorrentino@gmail.com',
    'verdi_mattia89@hotmail.com',
    'giacomogrigi@yahoo.it',
    'marzoni_incapaci123@mailtag.com'
];

const userMail = prompt('inserire E-Mail');

if (eMails.includes(userMail)){
    alert('accesso consentito!')
} else{
    alert('accesso negato!')
}