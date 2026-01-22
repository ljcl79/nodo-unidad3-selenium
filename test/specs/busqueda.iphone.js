import homePage from '../pageobjects/home.page.js';

describe('Validar busqueda en MELI con POM', () => {

    it('Validando búsqueda de iphone', async () => {
        await homePage.abrirPagina('https://www.mercadolibre.cl');
        await homePage.hacerBusqueda('Iphone 15');
        await homePage.verificarResultado('Iphone');
    });
});