class HomePage {
    //
    get searchInput() {
        return $('#cb1-edit');
    }

    get searchButton() {
        return $('.nav-search-btn');
    }

    get resultsTitle() {
        return $('.ui-search-breadcrumb__title');
    }

    async tipearBusqueda(textoABuscar) {
        await this.searchInput.setValue(textoABuscar);
    }

    async clicarBoton() {
        await this.searchButton.click();
    }

    async hacerBusqueda(textoABuscar) {
        await this.tipearBusqueda(textoABuscar);
        await this.clicarBoton();
    }

    async obtenerResultado() {
        await this.resultsTitle.getText();
    }

    abrirPagina(url) {
        return browser.url(url);
    }

    async verificarResultado(textoEsperado) {
        await this.resultsTitle.waitForExist();
        const textoResultado = await this.resultsTitle.getText();
        expect(textoResultado).toMatch(new RegExp(textoEsperado, 'i'));
    }
}

export default new HomePage();