var object_create = function(factory, form, post_success_redirect) {
    
    return function(req, res) {
        form.handle(req.body, {
            success: function(form) {
                factory(form.data, function(object) {
                    req.flash('info', 'The object was created')
                    res.redirect(object.edit_url)
                })
            },
            error: function(form) {
                req.flash('error', 'The object could not be created')
                req.redirect('back')
            },
            empty: function(form) {
                req.flash('error', 'The form was empty')
                req.redirect('back')
            }
        })
    }
    
}

var object_update = function(query, update, form, post_success_redirect) {
    
    return function(req, res) {
        
        form.handle(req.body, {
            success: function(form) {
                query(req.params.id, function(object) {
                    update(object, form.data, function(object) {
                        object.save()
                        req.flash('info', 'The object was updated')
                        res.redirect(object.edit_url)
                    })
                })     
            },
            error: function(form) {
                req.flash('The object could not be updated')
                res.redirect('back')
            },
            empty: function(form) {
                req.flash('The form was empty')
                res.redirect('back')
            }
        })
        
        
        
    }
    
}

exports.object_create = object_create
exports.object_update = object_update