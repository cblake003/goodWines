const Brand = require('../models/brand');
const Wine = require('../models/wine');

module.exports = {
    index,
    new: newWine,
    create,
    show,
    update,
    edit,
    delete: deleteWine,
}

async function deleteWine(req, res) {
    const wine = await Wine.findOneAndDelete({
    '_id': req.params.id,
    'user': req.user.id
    })
    console.log(wine)
    res.redirect(`/`)
  }

  function update(req, res) {
    req.body.done = !!req.body.done;
    Wine.update(req.params.id, req.body);
    res.redirect(`/wines/${req.params.id}`);
  }

async function edit(req, res) {
    const wineCreationData = Wine.getCreationData()
    try {
        const wine = await Wine.findById(req.params.id)
        const brands = await Brand.find({})
        res.render('wines/edit', {
        title: 'Edit Wine Entry',
        wineCreationData, wine, brands
    })} catch (err) {
        console.log(err);
        res.redirect('/')
    }
  }

async function show(req, res) {
    const wine = await Wine.findById(req.params.id).populate("brand")
    console.log(wine)
    res.render('wines/show', { wine })
}

async function index(req, res) {
    const wines = await Wine.find({}).populate("brand");
    console.log(wines)
    res.render('wines/index', { wines });
}

async function newWine(req, res) {
    const wineCreationData = await Wine.getCreationData()
    const brands = await Brand.find({})
    res.render('wines/new', { errorMsg: '', wineCreationData, brands });
}

async function create(req, res) {
    try {
        req.body.user = req.user.id 
        await Wine.create(req.body);
        res.redirect('/wines/new');
    } catch (err) {
        console.log(err);
        res.redirect('/wines/new', { errorMsg: err.message });
    }
}