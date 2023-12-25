/* normal number */
let a = 100;
/* short form number */
let b = 1e2;
/* binary form number */
let c = 0b11;
/* octal form number */
let d = 0o11;
/* hexa decimal form number */
let e = 0x11;
console.log(a, b, c, d, e);

/* normal function 
suppose to convert normal number to binary,octal,hexa
*/

let nums = 100;
let bin_nums = nums.toString(2);
let octal_nums = nums.toString(8);
let hexa_nums = nums.toString(16);
let unq_nums = nums.toString(36);
console.log(bin_nums, octal_nums, hexa_nums, unq_nums);
let bin_to_dec = parseInt(bin_nums, 2);
let oct_to_dec = parseInt(octal_nums, 8);
let hex_to_dec = parseInt(hexa_nums, 16);
let unq_to_dec = parseInt(unq_nums, 36);
console.log(bin_to_dec, oct_to_dec, hex_to_dec, unq_to_dec);

let num = 2.34;
console.log(
    Math.floor(num),
    Math.ceil(num),
    Math.round(num),
    Math.trunc(num),
    num.toFixed(5)
    );


console.log(+(0.1+0.2).toFixed(2))