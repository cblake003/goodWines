const Wine = require('../models/wine');

module.exports = {
    index,
    new: newWine,
    create,
    show
}

async function show(req, res) {
    const wine = await Wine.findById(req.params.id)
    res.render('wines/show', { wine })
}

async function index(req, res) {
    const wines = await Wine.find({});
    res.render('wines/index', { wines });
}

function newWine(req, res) {
    const wineCreationData = Wine.getCreationData()
    res.render('wines/new', { errorMsg: '', wineCreationData});
}

async function create(req, res) {
    try { 
        await Wine.create(req.body);
        res.redirect('/wines/new');
    } catch (err) {
        console.log(err);
        res.render('wines/new', { errorMsg: err.message });
    }
}