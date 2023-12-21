

/* unary , binary operator */
let a = 1;
a = -a;
console.log(a);

// if string comes up it will be converted to string
console.log(2 + 2 + '1' + 2 ); // "41" and not "221"


let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

/* If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:

let counter = 0;
alert( ++counter ); // 1
If we’d like to increment a value but use its previous value, we need the postfix form:

let counter = 0;
alert( counter++ ); // 0
 */

/* "" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)
 */