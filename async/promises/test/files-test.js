// var chai = require('chai')
// var chaiAsPromised  = require('chai-as-promised')
// chai.use(chaiAsPromised)
// var expect = chai.expect
// // 引入 chai-as-promised 库， 等同于上述代码
var expect = require('chai').expect
require('chai').use(require('chai-as-promised'))

var linesCount = require('../src/files')

describe('test promises', function () {
    // 使用 done() 进行测试
    it('should return correct line count for a valid file', function (done) {
        var checkCount = function (count) {
            expect(count).to.be.eql(14)
            done()
        }
        linesCount('src/files.js')
            .then(checkCount)
    })

    // 返回 promise 的测试
    it('should return correct line count - using return', function () {
        var callback = function (count) {
            expect(count).to.be.eql(14)
        }
        return linesCount('src/files.js')
            .then(callback)
    })

    // 使用 chai-as-promised 的测试
    it('should return correct line count - using eventually', function () {

        return expect(linesCount('src/files.js')).to.eventually.eql(14)
    })

    // 结合 eventually 和 done() 的测试
    it('should return correct line count - using no return', function (done) {
        expect(linesCount('src/files.js')).to.eventually.eql(14).notify(done)
    })
})

// 为 promise 编写反向测试
describe('test promises', function () {
    // rejected属性，通过等待 promise 对象变成失败状态 
    it('should report error for an invalid file name', function (done) {
        expect(linesCount('src/files-error.js')).to.be.rejected.notify(done)
    })
    // 使用rejectedWith 可以验证promise变成失败状态时，传递的失败信息
    it('should report error for an invalid file name - using with', function (done) {
        expect(linesCount('src/file-error.js')).to.be.rejectedWith('unable to open file src/file-error.js').notify(done)
    })

})
