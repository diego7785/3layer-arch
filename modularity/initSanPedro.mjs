import Doctor from './Doctor.mjs';
import SanPedro from './SanPedro.mjs';

const doctors = [
    new Doctor('Dra. Wilson', 'OB', false),
    new Doctor('Dr. Sloan', 'Plastic', true),
    new Doctor('Dra. Montgomery', 'OB/Fetal', true),
    new Doctor('Dra. Hunt', 'Trauma', false),
    new Doctor('Dra. Yang', 'Cardio', true)
]

export default new SanPedro('Calle más falsa 123', '0987654321', 'email@email.com', doctors);
