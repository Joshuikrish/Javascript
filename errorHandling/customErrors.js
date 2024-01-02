{
    class ValidationError extends Error {
        constructor(message) {
          super(message);
          this.name = "ValidationError";
        }
      }
      
      // Usage
      function readUser(json) {
        let user = JSON.parse(json);
      
        if (!user.age) {
          throw new ValidationError("No field: age");
        }
        if (!user.name) {
          throw new ValidationError("No field: name");
        }
      
        return user;
      }
      
      // Working example with try..catch
      
      try {
        let user = readUser('{ "age": 25 }');
      } catch (err) {
        if (err instanceof ValidationError) {
          console.log("Invalid data: " + err.message); // Invalid data: No field: name
        } else if (err instanceof SyntaxError) { // (*)
          console.log("JSON Syntax Error: " + err.message);
        } else {
          throw err; // unknown error, rethrow it (**)
        }
      }
      
}{
    class ReadError extends Error {
        constructor(message, cause) {
          super(message);
          this.cause = cause;
          this.name = 'ReadError';
        }
      }
      
      class ValidationError extends Error { /*...*/ }
      class PropertyRequiredError extends ValidationError { /* ... */ }
      
      function validateUser(user) {
        if (!user.age) {
          throw new PropertyRequiredError("age");
        }
      
        if (!user.name) {
          throw new PropertyRequiredError("name");
        }
      }
      
      function readUser(json) {
        let user;
      
        try {
          user = JSON.parse(json);
        } catch (err) {
          if (err instanceof SyntaxError) {
            throw new ReadError("Syntax Error", err);
          } else {
            throw err;
          }
        }
      
        try {
          validateUser(user);
        } catch (err) {
          if (err instanceof ValidationError) {
            throw new ReadError("Validation Error", err);
          } else {
            throw err;
          }
        }
      
      }
      
      try {
        readUser('{bad json}');
      } catch (e) {
        if (e instanceof ReadError) {
          console.log(e);
          // Original error: SyntaxError: Unexpected token b in JSON at position 1
          console.log("Original error: " + e.cause);
        } else {
          throw e;
        }
      }
      
}