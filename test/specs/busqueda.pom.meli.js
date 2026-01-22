import homePage from '../pageobjects/home.page.js';

describe('Validar busqueda en MELI con POM', () => {
    it('Validando búsqueda con 2 términos', async () => {
        await homePage.abrirPagina('https://www.mercadolibre.cl');
        await homePage.hacerBusqueda('Laptop Dell');
        await homePage.verificarResultado('Laptop Dell');
    });

});