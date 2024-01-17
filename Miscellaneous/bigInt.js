{
    let bigint = 1n;
let number = 2;


// number to bigint
console.log(bigint + BigInt(number)); // 3

// bigint to number
console.log(Number(bigint) + number); // 3

}



/*
https://github.com/GoogleChromeLabs/jsbi
Operation	native BigInt	JSBI
Creation from Number	a = BigInt(789)	a = JSBI.BigInt(789)
Addition	c = a + b	c = JSBI.add(a, b)
Subtraction	c = a - b	c = JSBI.subtract(a, b)
…	…	…

*/