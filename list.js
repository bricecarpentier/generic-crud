var list = function(query, template, extra_context) {
    
    return function(req, res) {
        query.all(function(object_list) {
            
            var locals = {}
            locals.object_list = object_list
            for (var name in extra_context) {
                locals[name] = extra_context[name]
            }
            
            res.render(template, {
                locals: locals
            })
        })
    }
    
}

exports.list = list