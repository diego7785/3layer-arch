import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

const AttendanceSchema = new Schema({
    startHour:{
        type: String,
        required: true
    },
    endHour:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    notes: {
        type: String,
        default:''
    },
    idUser: {
        type: String,
        required: true
    }
})

export default Mongoose.model('Attendance', AttendanceSchema);