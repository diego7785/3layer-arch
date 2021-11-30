import {assert} from 'chai';
import getAvailableDoctors from '../University.js';

describe('Testing get available doctos', () => {
    it('Should return the doctors that has availability equal to true', async () => {
        let doctors = await getAvailableDoctors()
        let flag = false;
        doctors.forEach(doctor => {
            if (!doctor.isAvailabile()) {
                flag = true;
            }
        })
        assert.equal(flag, false);
    })
})