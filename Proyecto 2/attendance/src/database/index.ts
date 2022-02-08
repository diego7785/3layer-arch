import Mongooose from 'mongoose';
import config from '../config';

export function connect(){
    Mongooose.connect(`mongodb://${config.host}:${config.port}/${config.name}`);
}

export function disconnect(){
    Mongooose.disconnect();
}