var errors = require('./errors')

var delete_fn = function(query, post_delete_redirect) {
    
    return function(req, res) {
        if (req.method === 'DELETE') {
            query(req.params.id, function(object) {
                object.remove()
                req.flash('info', 'The object was deleted')
                res.redirect(post_delete_redirect)
            })
        } else {
            throw new errors.HttpMethodNotAllowedError()
        }
        
    }
    
}

exports.object_delete = delete_fn