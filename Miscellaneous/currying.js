{

    function sum(a, b) {
        return a + b;
      }
      
      let curriedSum = _.curry(sum); // using _.curry from lodash library
      
      console.log( curriedSum(1, 2) ); // 3, still callable normally
      console.log( curriedSum(1)(2) ); // 3, called partially
       
}

/*

Currying is a transform that makes f(a,b,c) callable as f(a)(b)(c). JavaScript implementations usually both keep the function callable normally and return the partial if the arguments count is not enough.

Currying allows us to easily get partials. As we’ve seen in the logging example, after currying the three argument universal function log(date, importance, message) gives us partials when called with one argument (like log(date)) or two arguments (like log(date, importance)).

*/