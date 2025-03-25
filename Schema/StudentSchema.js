import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    rollNo: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    // skills: {
    //     type: Map,
    //     techs: [String],
    // },
    image:{type: String, required: true},
    webDevelopment: {
         type: Map, 
         score: Number },
    academic : { 
        type: Map,
        score: Number },
    programmingLanguage: { 
        type: Map, 
        score: Number },
    other : {
        type: Map,
        Score: Number}
});

const Student = mongoose.model("StudentSkills", studentSchema);

export default Student;
