const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wineSchema = new Schema({
    brand: String,
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
    // reviews: [reviewSchema]
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