import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  position: { type: String, required: true },
  phone: { type: String, required: true },
}, {
  timestamps: true
});

export default mongoose.model('Employee', employeeSchema); 