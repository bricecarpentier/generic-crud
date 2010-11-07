var sys = require('util')

var HttpMethodNotAllowedError = function(message) {
    this.name = 'HttpMethodNotAllowed'
    Error.call(this, message)
    Error.captureStackTrace(this, arguments.callee)
}

sys.inherits(HttpMethodNotAllowedError, Error)

exports.HttpMethodNotAllowedError = HttpMethodNotAllowedError