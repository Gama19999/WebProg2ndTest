/* 
 Created on : 5 oct. 2022, 01:05:42
 Author     : gamars
*/

function link() {
    window.open('https://es.wikipedia.org/wiki/El_retrato_de_Dorian_Gray', '_blank');
}

function pdf() {
    window.open('https://www.suneo.mx/literatura/subidas/Oscar%20Wilde%20El%20Retrato%20de%20Dorian%20Gray.pdf', '_blank');
}

window.onload = () => {
    let v = ['MI','P','A','S','I'];
    let e;
    
    for (let i of v) {
        e = document.getElementById(i);
        e.onclick = () => {
            switch (i) {
                case 'MI':
                    location.hash = '#mas';
                    break;
                case 'P':
                    location.hash = '#personajes';
                    break;
                case 'A':
                    location.hash = 'argumento';
                    break;
                case 'S':
                    location.hash = '#sinopsis';
                    break;
                case 'I':
                    location.hash = '#inicio';
                    break;
                default: location.hash = '';
            }
        };
    }
}
