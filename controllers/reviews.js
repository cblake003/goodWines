const Wine = require('../models/wine');

module.exports = {
    new: newReview,
    create,
    delete: deleteReview,
    update,
    edit
};

async function newReview(req, res) {
    const wine = await wine.findById(req.params.id)
    res.render('reviews/new', { wine })
}

async function edit(req, res) {
    const wine = await Wine.getOne(req.params.id)
    res.render('wines/edit', {
      title: 'Edit Wine Entry',
      wine
    })
  }

function getOne(id) {
    id = parseInt(id);
    return wines.find(wine => wine.id === id);
  }

function update(req, res) {
    req.body.done = !!req.body.done;
    Todo.update(req.params.id, req.body);
    res.redirect(`/wines/${req.params.id}`);
  }  

async function create(req, res) {
  const wine = await Wine.findById(req.params.id);
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  wine.reviews.push(req.body);
  try {
    await wine.save();
  } catch (err) {
    console.log(err);
  }
  // Step 5:  Respond to the Request (redirect if data has been changed)
  res.redirect(`/wines/${wine._id}`);
}

async function deleteReview(req, res) {
  const wine = await Wine.findOne({ 'reviews._id': req.params.id, 
  'reviews._id': req.params.id,
  'reviews.user': req.user._id
  })
  if(!wine) return res.redirect('/wines')
  wine.reviews.remove(req.params.id)
  await wine.save()
  res.redirect(`/wines/${wine._id}`)
}