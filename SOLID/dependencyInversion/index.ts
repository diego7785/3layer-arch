import Lamp from './Lamp';
import Button from './Button';

const lamp = new Lamp(false);
const button = new Button(lamp);

button.onButtonListener();
button.onButtonListener();