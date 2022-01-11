const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true },
        img: { type: String, required: true },
        // type: { type: Array },
        categories: { type: Array },
        price: { type: Number, required: true },
        ID: { type: String, required: true, unique: true },
        flowers: { type: String, required: true },
        inStock: { type:Boolean, default: true}
    },

    {
        timestamps: true
    }
);

module.exports = mongoose.model("Product", productSchema);