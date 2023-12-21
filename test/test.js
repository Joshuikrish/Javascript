/**
 * Description
 * Author Krishna Shrestha
 * Date 21/12/2023 DD/MM/YYYY
 * Testing Mocha
 * 
 * @argument ./node_modules/mocha/bin/mocha.js  test/test.js
 */

const assert = require('assert');

function multi(x,y){
    return x*y;
}

describe('multi', function(){
    it('multiplies 2 and 3 to get 6', function(){
        assert.equal(multi(2,3),6);
    })
})