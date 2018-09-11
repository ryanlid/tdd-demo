var fetchLocation = function (onSucess, onError) {
    var returnLocation = function (position) {
        var location = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
        }
        onSucess(location);
    }
    navigator.geolocation.getCurrentPosition(returnLocation, onError)
}
