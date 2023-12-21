const assert = require('assert');
function sub(x,y) {
    return x-y;
}
describe('sub',function () {
    it('2 - 1 is 2',function () {
        assert.equal(sub(2,1),1);
    })
})