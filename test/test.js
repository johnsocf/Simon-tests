var assert = require("assert"),
	sinon = require("sinon");

function once(fn) {
    var returnValue, called = false;
    return function () {
        if (!called) {
            called = true;
            returnValue = fn.apply(this, arguments);
        }
        return returnValue;
    };
}

describe('Function', function(){
  	it('should call function', function(){
	  	var object = { method: function () {} };
	    var spy = sinon.spy(object, "method");
	    spy.withArgs(42);
	    spy.withArgs(1);

	    object.method(42);
	    object.method(1);

	    assert(spy.withArgs(42).calledOnce);
	    assert(spy.withArgs(1).calledOnce);
	})

})