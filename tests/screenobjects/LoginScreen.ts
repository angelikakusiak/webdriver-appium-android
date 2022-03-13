import AppScreen from './AppScreen';
import Gestures from '../helpers/Gestures';

class LoginScreen extends AppScreen {
    constructor () {
        super('id=com.example.creative_dock_login:id/container');
    }
    
    get loginButton () {return $('id=com.example.creative_dock_login:id/login');}
    get email () {return $('id=com.example.creative_dock_login:id/username');}
    get password () {return $('id=com.example.creative_dock_login:id/password');}

    async submitLoginForm({ username, password }:{username:string; password:string;}) {
        await this.email.setValue(username);
        await this.password.setValue(password);

        if (await driver.isKeyboardShown()) {
            await $('id=com.example.creative_dock_login:id/container').click();

        }
        // On smaller screens there could be a possibility that the button is not shown
        await Gestures.checkIfDisplayedWithSwipeUp(await this.loginButton, 2);
        await this.loginButton.click();
    }
}

export default new LoginScreen();
