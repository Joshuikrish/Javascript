/**
 * Function is an object we can call every method in function like
 */

{function hello(params) {
    return 'hello '+params
}
console.log(hello.name);
console.log(hello.length);
}

{
    let count = 0;
    function Counter() {
        return count++;
    }
    Counter();
    Counter();
    Counter();
    Counter();
    console.log(count);
}