const about = (req, res, next) => { 
    res.render('index', { title: 'About' });
}
module.exports = {
    about
}