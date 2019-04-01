// import chai as our assertion library
import chai from 'chai';

//require jsdom-global and run
require('jsdom-global')()

// import our library
import clickClick from '../src/ClickClick.js';

// initialize chai should
chai.should();

document.body.innerHTML = "<div>Sample text in div</div>";

describe('#ClickClick Library Test', function () {

  describe('#Create a div', function () {
    it('should be an ', function () {
      ghost('div').selector.should.be.an('object');
    });
  });

});