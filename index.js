['./list', './detail', './delete', './simple', './create_update'].forEach(function(file) {
    var module = require(file)
    for (var prop in module) {
        exports[prop] = module[prop]
    }
})