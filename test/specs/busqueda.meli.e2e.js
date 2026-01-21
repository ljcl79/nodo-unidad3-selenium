describe('Búsqueda de productos en Mercado Libre', () => {
    it('deberia mostrar productos del tipo laptop en la salida', async () => {
        await browser.url('https://www.mercadolibre.cl');
        const searchInput = await $('#cb1-edit');

        const searchButton = await $('//form[contains(@class, "nav-search")]//button');
        //const searchButton = await $('.nav-search-btn');

        // --- 3. INTERACCIÓN ---
        // Escribimos "iPhone 15" en la barra de búsqueda.
        await searchInput.setValue('Iphone 15');

        // Hacemos clic en el botón para iniciar la búsqueda.
        await searchButton.click();

        // --- 4. VERIFICACIÓN (ASSERTION) ---
        // Ahora, en la página de resultados, localizamos el título
        // que confirma nuestra búsqueda. La clase 'ui-search-breadcrumb__title'
        // suele contener el término buscado.
        const resultsTitle = await $('.ui-search-breadcrumb__title');

        // Hacemos una espera explícita. Le decimos a WebDriverIO que
        // espere hasta 5 segundos a que ese título exista en la página.
        // Esto hace nuestro test mucho más robusto frente a variaciones de red.
        await resultsTitle.waitForExist({ timeout: 10000 });

        const textoRealDelElemento = await resultsTitle.getText();

        // Finalmente, la aserción. Verificamos que el texto del título
        // contiene la frase "iPhone 15". Si esto es verdad, el test PASA.
        // Si no, FALLA.
        expect(textoRealDelElemento).toMatch(/iphone/i); // Con regex e ignorando mayúsculas
    });
});