let nome = document.getElementById('nome');
let km = document.getElementById('km');
let eta = document.getElementById('eta');


let carrozza = (Math.round(Math.random() * 10));
let codiceCP = (Math.round(Math.random() * 100000));


let genera = document.getElementById('genera')
let annulla = document.getElementById('annulla')


genera.addEventListener('click',
    function() {
        let opa = document.querySelector('.opa');
        opa.classList.add('active');

        document.getElementById('nome-passeggero').innerHTML = nome.value;

        if (eta < 18) {
            var text = 'Biglietto Baby';
        } else if (eta >= 65) {
            var text = 'Biglietto Over';
        } else {
            var text = 'Biglietto Standard';
        };

        document.getElementById('c1').innerHTML = text;
        
        document.getElementById('c2').innerHTML = carrozza;

        document.getElementById('c3').innerHTML = codiceCP;

        if (eta.value == 'Minorenne') {
            var risultato = ((km.value * 0.21) - ((km.value  * 0.21) / 100) * 20);
        } else if (eta.value == 'Over65') {
            var risultato = ((km.value  * 0.21) - ((km.value  * 0.21) / 100) * 40);
        } else {
            var risultato = (km.value  * 0.21);
        }

        document.getElementById('c4').innerHTML = risultato + '€';

        nome.value = "";
        km.value = "";
        eta.value = "";
    }
);

annulla.addEventListener('click',
    function() {
        annulla = window.location.reload();
    }
);

