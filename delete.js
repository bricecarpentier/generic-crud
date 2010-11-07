var errors = require('./errors')

var delete_fn = function(model, post_delete_redirect) {
    
    return function(req, res) {
        if (req.method === 'DELETE') {
            model.findById(req.params.id, function(object) {
                object.delete()
                res.flash('info', 'The object was delete')
                res.redirect(post_delete_redirect)
            })
        } else {
            throw new errors.HttpMethodNotAllowedError()
        }
        
    }
    
}

exports.delete = delete_fn