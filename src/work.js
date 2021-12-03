function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let count = 0;
        for (let x = 2; x < numbers[i]; x++) {

            if (numbers[i] % x == 0) {
                count++;
            }

        }
        if (count == 1 || count > 1) {
            console.log(numbers[i] + "  asal değil.")
        }
        else {
            console.log(numbers[i] + "  asaldır.")
        }

    }
}
findPrime(3, 5, 7, 9, 10, 12)

function friendNumbers(number1, number2) {
    let total1 = 0;
    let total2 = 0;
    for (let i = 0; i < number1; i++) {
        if (number1 % i == 0) {
            total1 = total1 + i;
        }
    }
    for (let x = 0; x < number2; x++) {
        if (number2 % x == 0) {
            total2 = total2 + x;
        }
    }
    if (total1 == number2 && total2 == number1) {
        console.log("Girilen sayılar arkadaş sayıdır.")
    }
    else {
        console.log("Girilen sayılar arkadaş sayı değildir.")
    }
}
friendNumbers(220, 284)

function perfectNumbers(limit) {

    for (let i = 0; i < limit; i++) {
        let total = 0;
        for (let x = 1; x < i; x++) {

            if (i % x == 0) {
                total = total + x;
            }
        }
        if (total == i) {
            console.log(i + " mükemmel sayıdır.");
        }
    }

}
perfectNumbers(10000)

function findPrimeLimit(limit) {

    for (let i = 2; i < limit; i++) {
        let count = 0;
        for (let x = 2; x < i; x++) {
            if (i % x == 0) {
                count++;
            }
        }
        if (count == 0) {
            console.log(i)
        }
    }
}
findPrimeLimit(1000)