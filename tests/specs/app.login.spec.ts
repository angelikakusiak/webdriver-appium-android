import LoginScreen from '../screenobjects/LoginScreen';

describe('Login Page', () => {
    beforeEach(async () => {
        await LoginScreen.waitForIsShown(true);
    });

    afterEach(async()=>{
        await driver.launchApp();
    })

    describe('When passing valid credentials', ()=> {
        it('when username is a valid email should be able to login successfully', async () => {

            await LoginScreen.submitLoginForm({ username: 'test@webdriver.io', password: 'Test1234!' });
        
            const getToast = await $('/hierarchy/android.widget.Toast').getText();
            expect(getToast).toContain('Welcome ! Jane Doe')
        });
    
        it('when username is valid should be able to login successfully', async () => {
    
            await LoginScreen.submitLoginForm({ username: 'some-random-username', password: 'Test1234!' });
        
            const getToast = await $('/hierarchy/android.widget.Toast').getText();
            expect(getToast).toContain('Welcome ! Jane Doe')
        });
    
    })

    describe('when passing invalid credentials', ()=> {

        it('when passing invalid email, login button should be disabled', async () => {

            // invalid email
            await LoginScreen.email.setValue('fake-email@');
            await LoginScreen.password.setValue('Test1234!');

            expect(await LoginScreen.loginButton.isEnabled()).toEqual(false)
        });

        it('when passing empty username/email, login button should be disabled', async () => {

            // empty username/email
            await LoginScreen.email.setValue('');
            await LoginScreen.password.setValue('Test1234!');

            expect(await LoginScreen.loginButton.isEnabled()).toEqual(false)

        });

        it('when passing password with less than 5 caracters, login button should be disabled', async () => {

            await LoginScreen.email.setValue('some-random-username');
            await LoginScreen.password.setValue('test');

            expect(await LoginScreen.loginButton.isEnabled()).toEqual(false)
        });

        it('when passing empty password, login button should be disabled', async () => {

            await LoginScreen.email.setValue('some-random-username');
            await LoginScreen.password.setValue('');

            expect(await LoginScreen.loginButton.isEnabled()).toEqual(false)
        });
    })
});
