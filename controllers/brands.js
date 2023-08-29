// const Brand = require('../models/brand');
// const Wine = require('../models/wine');

// module.exports = {
//     new: newBrand,
//     create
// }

// async function create(req, res) {
//     try {
//         await Brand.create(req.body);
//     } catch (err) {
//         console.log(err);
//     }
//     res.redirect('/brands/new');
// }

// async function newBrand(req, res) {
//     const brands = await Brand.find({}).sort('name');
//     res.render('brands/new', { title: 'Add Brand', brands });
// }