var direct_to_template = function(template, extra_context) {
    
    var locals = extra_context || {}
    
    return function(req, res) {
        
        res.render(template, {
            locals: locals
        })
        
    }
    
}

exports.direct_to_template = direct_to_template