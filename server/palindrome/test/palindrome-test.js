var expect = require('chai').expect
var isPalindrome = require('../src/palindrome')

describe('palindrome-test', function () {
  // 金丝雀测试
  it('should pass this canary test', function () {
    expect(true).to.be.true;
  })

  // 正向测试
  it('should return true for argument mom', function () {
    expect(isPalindrome('mom')).to.be.true;
  })

  it('should return true for argument dad', function () {
    expect(isPalindrome('dad')).to.be.true;
  })

  it('should return true for argument dude', function () {
    expect(isPalindrome('dude')).to.be.false;
  })

  it('should return true for argument mom mom', function () {
    expect(isPalindrome('mom mom')).to.be.true
  })

  it('should return true for argument mom dad', function () {
    expect(isPalindrome('mom dad')).to.be.false;
  })

  // 编写反向测试
  it('should return false when argument is an empty', function () {
    expect(isPalindrome('')).to.be.false;
  })

  it('should return false when argument with only two spaces', function () {
    expect(isPalindrome('  ')).to.be.false;
  })
  
  // 异常测试
  it('should throw an exception if argumentis missing', function () {
    var call = function () { isPalindrome(); }
    expect(call).to.throw(Error, 'Invalid argument')
  })

})
