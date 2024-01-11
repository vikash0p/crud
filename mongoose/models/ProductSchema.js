// models/Student.js
import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
        unique: true,
    },

    price: {
        type: String,
        required: true,
    },
    colors: {
        type: [String],  // 
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
   
    category: {
        type: String,
        required: true,
    },
    isFeatured: {
        type: Boolean,
        required :true,
    }
});

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product;