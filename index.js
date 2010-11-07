['./list', './detail', './delete', './simple'].forEach(function(file) {
    var module = require(file)
    for (var prop in module) {
        exports[prop] = module[prop]
    }
})