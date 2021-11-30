import Doctor from './Doctor.mjs';
import SanPedro from './SanPedro.mjs';

const doctors = [
    new Doctor('Dra. Wilson', '', false),
    new Doctor('Dr. Sloan', '', true),
    new Doctor('Dra. Montgomery', '', true),
    new Doctor('Dra. Hunt', '', false),
    new Doctor('Dra. Yang', '', true)
]

export default new SanPedro('Calle más falsa 123', '0987654321', 'email@email.com', doctors);
