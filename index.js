
//Preliminaries

//For loop that prints to the console the numbers o0 to 9
/*     for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    

// For loop that prints to the console 9 through 0
    for (var i = 9; i >= 0; i--) {
        console.log(i);
    } 

// For loop that prints these fruits to the console
    var fruit = ["banana", "orange", "apple", "kiwi"];
    for (var i = 0; i ,fruit.length; i++){
        console.log(fruit[i])
    } 
 */

//Bronze medals

// for loop that will push the numbers 0 through 9 to an array
/*     var numbers = [];
    for (var i = 0; i <10; i++) {
        numbers[i] = i;
    }
    console.log(numbers);

// for loop that prints to the console only even numbers 0 through 100

    var numbers = [];
    for (var i = 0; i <101; i++) {
        if (i % 2 ===0)
        console.log( i + "is even")
    }

// for loop that will push every other fruit to an array
    var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
    var fruitsnack = [];
    for( var i  = 0; i < fruit.length; i++ ){
        if ( i % 2 ===0) {
            fruitsnack.push(fruit[i])
        }
    }
    console.log(fruitsnack);  */

//Silver Medal

/* const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ];
// for loop the prints out the name of the people
   for( let i=0; i < peopleArray.length; i++ ) {
    console.log( peopleArray[i].name );
  } 

// Occupation and names
    let names = [];
    let occupations = [];

    for( let i=0; i < peopleArray.length; i++ ) {
        names.push( peopleArray[i].name );
        occupations.push( peopleArray[i].occupation );
}

    console.log( names );
    console.log( occupations );   


// for loop that pushes every other name to an array starting with the first person,
    let names = [];
    let occupations = [];

    for( let i=0; i < peopleArray.length; i++ ) {
        i % 2 === 0 ? names.push( peopleArray[i].name ) : occupations.push( peopleArray[i].occupation );
        
    }

    console.log( names );
    console.log( occupations ); */

//Gold Medal

//Create an array that mimics a grid like the following using nested for loops:

/* var grid = [];

for( var i = 0; i < 3; i++ ) {
    grid.push( [] );    
    for( var j = 0; j < 3; j++ ) {
        grid[i].push( 0 );
    }
}

console.log( grid ); */


 var grid = [];

for( var i = 0; i < 3; i++ ) {
    grid.push( [] );    
    for( var j = 0; j < 3; j++ ) {
        grid[i].push( i );
    }
}

console.log( grid ); 