const url = 'https://mocki.io/v1/c17cc0bd-d4f5-4e76-965d-50be94806678';

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