export const requireLogin = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/');
    }
    next();
}

export const checkSession = (req, res, next) => {
    if (req.session.user) {
        return res.redirect('/dashboard');
    }
    next();
}