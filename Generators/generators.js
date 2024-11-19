{
    function* helloworld() {
        yield("Hello World");
        yield("Hello World");
        return 3;
    }
    let gen = helloworld();
    console.log(gen.next());
    let gen2 = gen.next();
    console.log(gen2);
    let gen3 = gen.next();
    console.log(gen3);
}

{
    function* generateSequence(start, end) {
        for (let i = start; i <= end; i++) yield i;
      }
      
      function* generateAlphaNum() {
      
        // yield* generateSequence(48, 57);
        for (let i = 48; i <= 57; i++) yield i;
      
        // yield* generateSequence(65, 90);
        for (let i = 65; i <= 90; i++) yield i;
      
        // yield* generateSequence(97, 122);
        for (let i = 97; i <= 122; i++) yield i;
      
      }
      
      let str = '';
      
      for(let code of generateAlphaNum()) {
        str += String.fromCharCode(code);
      }
      
      console.log(str); // 0..9A..Za..z
      
}