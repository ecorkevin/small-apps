var should = require('should'),
  isAnagram = require('../app').anagramChecker,
  isValidBrace = require('../app').braceChecker;

describe('brace-checker', function () {
  
  it('[] should be valid', function (done) {
    isValidBrace('[]').should.equal(true);
    done();
  });
  
  it('{} should be valid', function (done) {
    isValidBrace('{}').should.equal(true);
    done();
  });
  
  it('[     ]     {     } should be valid', function (done) {
    isValidBrace('[     ]     {     }').should.equal(true);
    done();
  });
  
  it('[  { }   ]     { [ ]    } should be valid', function (done) {
    isValidBrace('[  { }   ]     { [ ]    }').should.equal(true);
    done();
  });
  
  it('{{{{}}}} should be valid', function (done) {
    isValidBrace('{{{{}}}}').should.equal(true);
    done();
  });
  
  it('{{{[]}}} should be valid', function (done) {
    isValidBrace('{{{[]}}}').should.equal(true);
    done();
  });
  
  it('{{{[]}}}[]{} should be valid', function (done) {
    isValidBrace('{{{[]}}}[]{}').should.equal(true);
    done();
  });
  
  it('"" should be valid', function (done) {
    isValidBrace('').should.equal(true);
    done();
  });
  
  it('{{{[{]}}} should be invalid', function (done) {
    isValidBrace('{{{[{]}}}').should.equal(false);
    done();
  });
  
  it('{] should be invalid', function (done) {
    isValidBrace('{]').should.equal(false);
    done();
  });
  
});

describe('anagram-checker', function () {
  
  it('hello and olleh should be anagrams', function (done) {
    isAnagram('hello', 'olleh').should.equal(true);
    done();
  });
  
  it('1234 and 4312 should be anagrams', function (done) {
    isAnagram('1234', '4312').should.equal(true);
    done();
  });
  
  it('hello and ylleh should not be anagrams', function (done) {
    isAnagram('hello', 'ylleh').should.equal(false);
    done();
  });
  
  it('4443 and 3334 should not be anagrams', function (done) {
    isAnagram('4443', '3334').should.equal(false);
    done();
  });

});