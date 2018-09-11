describe('fetch location test', function () {
    it('should get lat and kon from fetchLoction', function (done) {
        var onSuccess = function (location) {
            expect(location).to.have.property('lat')
            expect(location).to.have.property('lon')
            done()
        }
        var onError = function (err) {
            throw 'not expected'
        }
        this.timeout(20000)
        fetchLocation(onSuccess, onError)
    })
})