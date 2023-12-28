/**
 * Two types of Scheduling
 * Settimeout
 * Setinterval
 * Each scheduling have delay in it 
 * try to use https://nodejs.org/api/timers.html#timers_setimmediate_callback_args for node
 */
{
// let t1 = performance.now()
setInterval(() => {
    console.log('hello')
}, 1000);
// let t2 = performance.now()
// console.log(t1-t2);
setTimeout(() => {
    console.log("from timeout");
}, 5000);
}