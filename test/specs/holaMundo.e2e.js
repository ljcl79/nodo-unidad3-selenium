describe('Página de webdriver', () => {
    it('Validar título del site', async () => {
        await browser.url('https://webdriver.io/');

        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
    });
});