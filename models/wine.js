const mongoose = require('mongoose');
const brand = require('./brand');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    username: String,
    userAvatar: String
  }, {
    timestamps: true
  });

const wineSchema = new Schema({
    brand: {
        type: Schema.Types.ObjectId,
        ref: "Brand"
    },
    wineType: {
        type: String,
        enum: ['Red', 'White', 'Rose', 'Sparkling', 'Dessert']
    },
    aBV: Number,
    variety: {
        type: String,
        enum: ['Cabernet Sauvignon', 'Chardonnay', 'Merlot', 'Sauvignon Blanc', 'Riesling', 'Pinot Noir', 'Malbec', 'Pinot Grigio', 'Zinfandel', "Chateau d'Esclans", "Chateau Miraval Rose", "Belle Glos", 'Port', 'Cherry', 'Ice Wine']
    },
    year: Number,
    reviews: [reviewSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      username: String,
      userAvatar: String
}, {
    timestamps: true
});

wineSchema.statics.getCreationData = function() {
    const wineType = this.schema.path('wineType').enumValues
    console.log(wineType)
    const variety = this.schema.path('variety').enumValues
    return {
        wineType,
        variety
    }
}

module.exports = mongoose.model('Wine', wineSchema);