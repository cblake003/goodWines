const Brand = require('../models/brand');
const Wine = require('../models/wine');

module.exports = {
    new: newBrand,
    create,
    addToWine,
    show,
    index
}

async function index(req, res) {
    const brands = await Brand.find({});
    console.log(brands)
    res.render('brands/index', { brands });
}

async function show(req, res) {
    const brand = await Brand.findById(req.params.id)
    console.log(brand, req.params.id)
    const wines = await Wine.find({"brand": brand._id})
    console.log(wines)
    res.render('brands/show', { wines, brand })
}

async function addToWine(req, res) {
    
}

async function create(req, res) {
    console.log("here")
    try {
        await Brand.create(req.body);
    } catch (err) {
        console.log(err);
    }
    res.redirect('/brands/new');
}

async function newBrand(req, res) {
    const brands = await Brand.find({}).sort('name');
    res.render('brands/new', { title: 'Add Brand', brands });
}