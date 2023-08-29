const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    location: String,
    established: Number,
    wine: [{
        type: Schema.Types.ObjectId,
        ref: "Wine",
}]
});

module.exports = mongoose.model('Brand', brandSchema);