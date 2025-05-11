import mongoose from 'mongoose';

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  countryCode: {
    type: String,
    required: true,
    default: '+91'
  },
});

const registrationSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  teamName: {
    type: String,
    required: true,
  },
  quizType: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    default: '',
  },
  member1: {
    type: teamMemberSchema,
    required: true,
  },
  member2: {
    type: teamMemberSchema,
    required: false,
  },
  member3: {
    type: teamMemberSchema,
    required: false,
  },
});

export default mongoose.models.Registration || mongoose.model('Registration', registrationSchema); 