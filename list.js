var list = function(queryset, template, extra_context) {
    
    return function(req, res) {
        
        var fn = function(object_list) {
            var locals = {}
            locals.object_list = object_list
            for (var name in extra_context) {
                locals[name] = extra_context[name]
            }
            
            res.render(template, {
                locals: locals
            })
        }
        
        switch (typeof(queryset)) {
            case 'function':
                queryset(fn)
                break
            case 'object':
                fn(queryset)
                break
            default:
                throw new TypeError()
                break
        }
    }
    
}

exports.object_list = list