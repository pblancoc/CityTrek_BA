new Vue({
    el: '#app',
    data: {
        id: ' ',
        nombre: ' ',
        telefono: ' ',
        dirreccion: ' ',
        categoria: ' '
    },
    created() {
        const urlParams = new URLSearchParams(window.location.search);
        const itemId = urlParams.get('id');
        this.id = urlParams.get('id');
        // Realiza una solicitud a la API para obtener los detalles del ítem por su ID
        // y asigna los datos a this.item.
        // Reemplaza la URL con la API que estás utilizando.
        //https://datosabiertos-catastro-apis.buenosaires.gob.ar/getObjectContent?id=discotecas%7C83
        fetch(`https://datosabiertos-catastro-apis.buenosaires.gob.ar/getObjectContent?id=${itemId}`)
            .then(response => response.json())
            .then(data => {
                this.item = data;
                this.nombre = data.contenido[0].valor;
                this.telefono = data.contenido[6].valor;
                this.dirreccion = data.direccionNormalizada;
            })
            .catch(error => {
                console.error('Error:', error);
            });
        this.nombre = data.contenido[0].valor;
    },
});