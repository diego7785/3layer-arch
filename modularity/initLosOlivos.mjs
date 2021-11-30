import LosOlivos from './LosOlivos.mjs';
import Doctor from './Doctor.mjs';

const doctors = [
    new Doctor('Dr. Hunt', '', false),
    new Doctor('Dr. Sheperd', '', true),
    new Doctor('Dra. Grey', '', true),
    new Doctor('Dr. Webber', '', false),
    new Doctor('Dra. Bailley', '', true),
    new Doctor('Dr. Karev', '', true)
]

export default new LosOlivos('Calle falsa 123', '123456789', 'email@losolivos.com', doctors);