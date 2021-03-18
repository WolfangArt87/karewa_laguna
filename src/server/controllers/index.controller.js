exports.index = (req, res, next) => {
    let renderParams = { title: 'Monitor Karewa Laguna' };
    res.render('index', renderParams);
};