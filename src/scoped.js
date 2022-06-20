// Let and Const
// Let and Const
// let : sifatnya sama seperti var. namun let mendukung block scoped ketimbang var yang selalu global scoped

// let
let x = 2;
x += 40;
// console.log(x);

// const: sifat dari variable const ini yaitu satu kali assign. kita tidak dapat merubah nilainya kembali
// ataupun di deklarasi ulang

const value = Math.random();
// const value = 1;
console.log(value < 0.5 ? "Heads" : "Tails");


// True block scoped
// kita lihat penggunaan var dalam block scoped
function jumpOut() {
    var a = [1, 2, 3];
    for (var i = 0; i < a.length; ++i) {
        var value = a[i];
        console.log(value);
    }

    console.log("Outside Loop" + value); // var bisa akses nilai value disini.
}

// jumpOut();

//  kita coba menggunakan let/const. saya pakai let. let dan const punya blocked scoped.
function stayContained() {
    var a = [1, 2, 3];
    for (var i = 0; i < a.length; ++i) {
        let value = a[i];
        console.log(value);
    }
    console.log("Outside loop" + value); // ReferenceError: 'value' is not defined
}
// stayContained();

// Closures Block Problem
function closuresInLoopsProblem() {
    for (var counter = 1; counter <= 3; ++counter) {
        (function(value) {
            setTimeout(function() {
                console.log(value);
            }, 10)
        })(counter)
    }
}

closuresInLoopsProblem();