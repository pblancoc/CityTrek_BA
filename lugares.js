new Vue({
    el: '#app',
    data: {
        categoria: ' ',
        lugares: []
    },
    created() {
        const urlParams = new URLSearchParams(window.location.search);
        this.categoria = urlParams.get('categoria');

        switch (this.categoria) {
            case 'Restaurantes':
                this.lugares = [{ "id": "0", "nombre": "Sin Restaurantes" }];
                break;

            case 'Museos':
                this.lugares = [
                    { "id": "dependencias_culturales%7C1420", "nombre": "Museo Evita" },
                    { "id": "dependencias_culturales%7C2470", "nombre": "Museo Nacional de Bellas Artes" },
                    { "id": "dependencias_culturales%7C723", "nombre": "Museo de Arte Moderno de Buenos Aires" },
                    { "id": "dependencias_culturales%7C724", "nombre": "Museo de Arte Contemporáneo de Buenos Aires" },
                    { "id": "dependencias_culturales%7C1476", "nombre": "Museo de Arte Latinoamericano de Buenos Aires" }
                ];
                break;

            case 'Bares':
                this.lugares = [{ "id": "0", "nombre": "Sin Bares" }];
                break;

            case 'Club de Jazz':
                this.lugares = [{ "id": "0", "nombre": "Sin Jazz" }];
                break;

            default:
                this.lugares = [{ "id": "0", "nombre": "Sin datos" }];
        }
    },
});
