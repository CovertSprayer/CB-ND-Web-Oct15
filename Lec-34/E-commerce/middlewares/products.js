
module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        req.flash('error', 'Plz Login first');
        return res.redirect('/login');
    }
    next();
}

module.exports.isSeller = (req, res, next) => {
    if(req.user.role !== 'seller'){
        req.flash('error', 'Not Authorized person');
        return res.redirect('back')
    }

    next();
}