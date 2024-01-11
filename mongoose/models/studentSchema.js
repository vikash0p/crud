// models/Student.js
import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
  
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true,
    },
    major: {
        type: String,
        required: true,
    },
    admissionYear: {
        type: Number,
        required: true,
    },
});

const Student =mongoose.models.Student || mongoose.model('Student', studentSchema);

export default Student;