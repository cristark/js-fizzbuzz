/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

for (var i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        document.write('\n' + 'FizzBuzz');
        console.log("%cFizzBuzz", "color:yellow");
    }   else if (i % 3 == 0){
        document.write('\n' + 'Fizz');
        console.log("%cFizz", "color:red");
    }   else if (i % 5 == 0){
        document.write('\n' + 'Buzz');
        console.log("%cBuzz", "color:blue");
    } else {
        document.write('\n' + i);
        console.log(i);
    }
}
