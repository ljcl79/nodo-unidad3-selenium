describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        const inputUsuario = await $('#username');
        inputUsuario.setValue('tomsmith');
    });
});