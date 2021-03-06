var detail = function(query, template, extra_context) {
    
    return function(req, res) {
        query(req.params.id, function(object) {
            
            var locals = {}
            locals.object = object
            for (var prop in extra_context) {
                locals[prop] = extra_context[prop]
            }
            
            res.render(template, {
               locals: locals
            })
        });
    }
    
}

exports.object_detail = detail