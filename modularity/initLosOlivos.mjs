import LosOlivos from './LosOlivos.mjs';
import Doctor from './Doctor.mjs';

const doctors = [
    new Doctor('Dr. Hunt', 'Trauma', false),
    new Doctor('Dr. Sheperd', 'Neuro', true),
    new Doctor('Dra. Grey', 'General', true),
    new Doctor('Dr. Webber', 'General', false),
    new Doctor('Dra. Bailley', 'General', true),
    new Doctor('Dr. Karev', 'Peds', true)
]

export default new LosOlivos('Calle falsa 123', '123456789', 'email@losolivos.com', doctors);