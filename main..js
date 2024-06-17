// Seleziono i Container 

let numeriDaRicordare = document.getElementById('numerirandom');

let secondoContainer = document.getElementById('numeriutente');



// Visualizzare in pagina 5 numeri casuali.(Fai apparire 5 numeri random)

let numeriRandom = [];

for (let i = 0; i <= 4; i++){
    numeriRandom.push (Math.floor(Math.random() * 100));
}

numeriDaRicordare.append(numeriRandom);

// Da lì parte un timer di 30 secondi.(Fai partire un timer di 30 secondi)

setTimeout(myFunction , 3000);
function myFunction(){
    // alert('Tempo scaduto!')
    numeriDaRicordare.classList.add('invisible')
    
    for (let i = 0; i <= 4; i++) {
    var numeriSelezionatiUtente =[]; 
    var numeriUtente = parseInt(prompt('Quali numeri hai visualizzato ?'));
    numeriSelezionatiUtente.push (numeriUtente);
    // console.log(numeriSelezionatiUtente);
    secondoContainer.append([numeriSelezionatiUtente]);
    }


}




// Dopo 30 secondi i numeri scompaiono (Alla scadenza del timer fai scomparire i numeri)

// Richiedi tramire il prompt i 5 numeri che sono stati visualizzati

// Dopo l'inserimento dei 5 numeri fai apparire quanti e quali numeri sono stati indovinati 

