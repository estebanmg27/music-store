const url = 'https://mocki.io/v1/6f20dcbb-65ec-4e4e-a8b0-34ac1446ef8f';

fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    let body = ''

    for (let i = 0; i < data.length; i++) {
        body +=
            `
            <div class="item">
                <figure>
                    <img src=${data[i].imagen} />
                </figure>          
                <div class="info-product-mas-vendidos">
                    <p class="price">${data[i].precio}</p>              
                    <p>${data[i].nombre}<p>
                    <p>${data[i].descripcion}<p> 
                    <button>Ver publicación</button>
                </div>
            </div>     
         `
    }

    document.getElementById('data').innerHTML = body
}