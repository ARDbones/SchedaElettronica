import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  scheda_A = [ // elenco body parts
    {
      "title" : "Addominali",
      "esercizi" : [ // elenco esercizi
        {
          "descrizione" : "Parallele",
          "ripetizioni" : 15,
          "serie" : 3,
          "peso" : 0
        },
        {
          "descrizione" : "Crunch",
          "ripetizioni" : 15,
          "serie" : 3,
          "peso" : 0
        }
      ]
    },
    {
      "title" : "Polpacci",
      "esercizi" : [ // elenco esercizi
        {
          "descrizione" : "Donkey",
          "ripetizioni" : 15,
          "serie" : 3,
          "peso" : 40
        }
      ]
    },
    {
      "title" : "Gambe",
      "esercizi" : [ // elenco esercizi
        {
          "descrizione" : "Squat",
          "ripetizioni" : 12,
          "serie" : 4,
          "peso" : 20
        },
        {
          "descrizione" : "Leg extension",
          "ripetizioni" : 10,
          "serie" : 3,
          "peso" : 45
        }
      ]
    },
    {
      "title" : "Dorsali",
      "esercizi" : [ // elenco esercizi
        {
          "descrizione" : "Lateral machine",
          "ripetizioni" : 12,
          "serie" : 4,
          "peso" : 45
        },
        {
          "descrizione" : "Rematore",
          "ripetizioni" : 10,
          "serie" : 3,
          "peso" : 8
        }
      ]
    },
    {
      "title" : "Tricipiti",
      "esercizi" : [ // elenco esercizi
        {
          "descrizione" : "Manubri controllati",
          "ripetizioni" : 12,
          "serie" : 4,
          "peso" : 7
        },
        {
          "descrizione" : "Cavi inversi",
          "ripetizioni" : 10,
          "serie" : 3,
          "peso" : 15
        }
      ]
    }
  ];
  scheda_B = [ // elenco body parts
    {
      "title" : "Addominali",
      "esercizi" : [ // elenco esercizi
        {
          "descrizione" : "Parallele",
          "ripetizioni" : 15,
          "serie" : 3,
          "peso" : 0
        },
        {
          "descrizione" : "Crunch",
          "ripetizioni" : 15,
          "serie" : 3,
          "peso" : 0
        }
      ]
    },
    {
      "title" : "Dorsali",
      "esercizi" : [ // elenco esercizi
        {
          "descrizione" : "Panca rossa",
          "ripetizioni" : 15,
          "serie" : 3,
          "peso" : 0
        }
      ]
    },
    {
      "title" : "Pettorali",
      "esercizi" : [ // elenco esercizi
        {
          "descrizione" : "Panca piana",
          "ripetizioni" : 12,
          "serie" : 4,
          "peso" : 10
        },
        {
          "descrizione" : "Panca 30",
          "ripetizioni" : 10,
          "serie" : 3,
          "peso" : 10
        }
      ]
    },
    {
      "title" : "Deltoidi",
      "esercizi" : [ // elenco esercizi
        {
          "descrizione" : "Croci",
          "ripetizioni" : 12,
          "serie" : 4,
          "peso" : 5
        },
        {
          "descrizione" : "Alzate frontali",
          "ripetizioni" : 10,
          "serie" : 3,
          "peso" : 5
        }
      ]
    },
    {
      "title" : "Bicipiti",
      "esercizi" : [ // elenco esercizi
        {
          "descrizione" : "Bilanciere",
          "ripetizioni" : 12,
          "serie" : 4,
          "peso" : 22
        },
        {
          "descrizione" : "Manubri controllati",
          "ripetizioni" : 10,
          "serie" : 3,
          "peso" : 8
        }
      ]
    }
  ];

  flagScheda = true; // true A, false B
  schedaAttiva;
  
  constructor() {
    let self = this;

    self.schedaAttiva = self.scheda_A;

    /* CONTROLLI CACHE */

    //let cachedScheda = localStorage.getItem('schedaAttiva');
    //if(!cachedScheda) {
    //  self.schedaAttiva = self.scheda_A.valueOf();
    //  localStorage.setItem('schedaAttiva', self.schedaAttiva);
    //}
    //else
    //  self.schedaAttiva = cachedScheda;
  }

  ngOnInit() {
  }

  cambiaScheda(){
    let self = this;
    if(self.flagScheda){
      self.schedaAttiva = self.scheda_B;
      self.flagScheda = false;
    }
    else{
      self.schedaAttiva = self.scheda_A;
      self.flagScheda = true;
    }

    console.log(self.scheda_A);
    console.log(self.scheda_B);
    console.log(self.flagScheda);
  }

  completaSerie(i,j){
    let self = this;
    console.log("Serie completata");
    
    if(self.schedaAttiva[i].esercizi[j].serie > 1) {
      self.schedaAttiva[i].esercizi[j].serie --;
    }
    else{
      self.schedaAttiva[i].esercizi[j].serie = 0;

      /* nascondi sezione */

    }
    /* Salva in cache */
    localStorage.setItem('schedaAttiva', self.schedaAttiva);
  }

  saltaEsercizio(i,j){
    let self = this;
    console.log("Esercizio saltato");

    self.schedaAttiva[i].esercizi[j].serie = 0;

    /* nascondi sezione */


    /* Salva in cache */
    localStorage.setItem('schedaAttiva', self.schedaAttiva);  
  }

  aumentaPeso(i,j){
    let self = this;
    console.log("Aumenta peso");

    self.schedaAttiva[i].esercizi[j].peso ++;

    /* Salva in cache */
    localStorage.setItem('schedaAttiva', self.schedaAttiva);
  }

  diminuisciPeso(i,j){
    let self = this;
    console.log("Diminuisci peso");

    if(self.schedaAttiva[i].esercizi[j].peso > 0) {
      self.schedaAttiva[i].esercizi[j].peso --;
    }

    /* Salva in cache */
    localStorage.setItem('schedaAttiva', self.schedaAttiva);
  }

  scrollingTo(id) {
    let delay = 1000;
    let offset = 70;
    $('html, body').animate({
        scrollTop: $("#" + id).offset().top - offset
    }, delay);
  }

}


// newVariable = originalVariable.valueOf();

// for objects you can use, b = Object.assign({},a);