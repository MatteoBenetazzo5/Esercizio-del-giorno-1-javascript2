/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
console.log("ESERCIZIO 1")
const concatStrings = (str1, str2) => {
  const part1 = str1.slice(0, 2)
  const part2 = str2.slice(-3)
  const result = (part1 + part2).toUpperCase()
  console.log(result)
}
concatStrings('Matteo', 'Benetazzo')

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
console.log("ESERCIZIO 2")
const createRandomArray = function () {
  const arr = [] // creo un array vuoto

  for (let i = 0; i < 10; i++) {
    // genero un numero casuale tra 0 e 100
    const randomNum = Math.floor(Math.random() * 101) 
    //Math.random() genera un numero decimale casuale tra 0 e 1
    //Math.floor() lo arrotonda per difetto, quindi il risultato sarà un intero tra 0 e 100
    // lo aggiungo all’array
    arr.push(randomNum)
  }
  return arr // ritorna l’array completo
}
const randomArray = createRandomArray()
console.log(randomArray)


/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
console.log("ESERCIZIO 3")
const getEvenNumbers = function (numbersArray) {
  const evenNumbers = numbersArray.filter((num) => {
    if (num % 2 === 0) {
      return true // passa il filtro
    } else {
      return false // viene escluso
    }
  })
  return evenNumbers
}
const numeri = [5, 11, 20, 26, 32, 99]
const soloPari = getEvenNumbers(numeri)
console.log(soloPari)


/* ESERCIZIO 4 (forEach) 
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("ESERCIZIO 4")
const sumArray = function (numbersArray) {
  let sum = 0
  numbersArray.forEach((num) => {
    sum = sum + num
  })
  console.log(sum)
  return sum   //RETURN è come se fosse il taglierino che ti permette di aprire il pacco Amazon (il codice contenuto all'interno)
  //se non usassi questa variabile è come se io stessi guardando il contenuto del pacco amazon da una fessura fatta sul pacco senza poter prendere il contenuto 
}
const num = [10, 20, 30, 40]
sumArray(numeri)


/* ESERCIZIO 5 (reduce) NON FARE ANCORA
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

/* ESERCIZIO 6 (map) 
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

/* ESERCIZIO 7 (map) 
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log("ESERCIZIO 8")
const getOddNumbers = function () {
  const oddNumbers = [] // array vuoto

  for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i)
    }
  }
  console.log(oddNumbers)
  return oddNumbers
}
getOddNumbers()


/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach) 
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log("ESERCIZIO 9: IL FILM PIù VECCHIO")
const trovaIlFilmPiuVecchio = function () {
  let oldest = movies[0] // parto dal primo film dell’array come riferimento

  movies.forEach((film) => {
    // film.Year è una stringa, quindi la trasformo in numero per il confronto
    if (parseInt(film.Year) < parseInt(oldest.Year)) {
      oldest = film
    }
  })
  console.log(oldest)
}
trovaIlFilmPiuVecchio()



/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log("ESERCIZIO 10: NUMERO DI FILM PRESENTI NELL'ARRAY")
const numeroDiFilm = function () {
  const numberOfMovies = movies.length
  console.log(numberOfMovies)
  return numberOfMovies
}
numeroDiFilm()


/* ESERCIZIO 11 (map) 
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log("ESERCIZIO 11: TITOLI DEI FILM")
const tuttiITitoliDeiFilm = function () {
  const titles = movies.map((film) => film.Title)
  console.log(titles)
  return titles
}
tuttiITitoliDeiFilm()

/* ESERCIZIO 12 (filter) 
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log("ESERCIZIO 12: FILM DOPO ANNI 2000")
const filmDegliAnni2000 = function () {
  const recentMovies = movies.filter((film) => {
    if (parseInt(film.Year) >= 2000) {
      return true
    } else {
      return false
    }
  })
  console.log(recentMovies)
  return recentMovies
}
filmDegliAnni2000()


/* ESERCIZIO 13 (reduce) NON FARE ANCORA
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/



/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/



/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/


