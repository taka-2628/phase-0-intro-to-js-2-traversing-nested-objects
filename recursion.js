// function to count down numbers to 1 using recursion technique
function countDown(number) {
    console.log(number);

    const newNumber = number - 1;

    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(6);

// function to create an array of Fibonacci numbers
function fibonacciSequence (numOfElements){
    let fibonacci = [0, 1];
    for (let i = fibonacci.length-1; fibonacci.length < numOfElements; i++){
        fibonacci.push(fibonacci[i]+fibonacci[i-1]);
    }
    return fibonacci;
}

fibonacciSequence (10);
//=>[ 0, 1,  1,  2, 3, 5, 8, 13, 21, 34 ]

