let date = Date.now();
console.log(date);

setInterval(() => {
    
    console.log(new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour:"numeric",minute:"numeric",second:"numeric"}) 
    );
}, 1000);


let t1 = performance.now()

for (let i = 0; i <= 1; i++) {
    // const element = array[i];
    
}

let t2 = performance.now()
console.log(t2-t1);