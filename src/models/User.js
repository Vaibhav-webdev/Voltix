import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  institutionName: { type: String, default: "" },
  degree: { type: String, default: "" },
  fieldOfStudy: { type: String, default: "" },
  startDate: { type: String, default: "" },
  endDate: { type: String, default: "" },
  gpa: { type: String, default: "" }
});

const experienceSchema = new mongoose.Schema({
  companyName: { type: String, default: "" },
  jobTitle: { type: String, default: "" },
  startDate: { type: String, default: "" },
  endDate: { type: String, default: "" },
  currentlyWorking: { type: Boolean, default: false },
  jobDescription: { type: String, default: "" }
});

const projectSchema = new mongoose.Schema({
  projectName: { type: String, default: "" },
  projectType: { type: String, default: "" },
  projectDescription: { type: String, default: "" }
});

const resumeSchema = new mongoose.Schema({
  title: { type: String, default: "" },
  fullName: { type: String, default: "" },
  email: { type: String, default: "" },
  phone: { type: String, default: "" },
  location: { type: String, default: "" },
  profession: { type: String, default: "" },
  linkedInProfile: { type: String, default: "" },
  website: { type: String, default: "" },
  color: { type: String, default: "#2563eb" },
  template: { type: String, default: "0" },
  image: { type: String, default: "" },
  professionalSummary: { type: String, default: "" },
  experience: [experienceSchema],
  education: [educationSchema],
  projects: [projectSchema],
  skills: { type: [String], default: [] },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },
  resumes: [resumeSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.User || mongoose.model("User", userSchema);
