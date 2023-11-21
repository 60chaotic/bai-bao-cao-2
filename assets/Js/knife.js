const fetchApi = async (api) => {
    let response = await fetch(api);
    let result = await response.json();

    return result;
}






// Hiển thị danh sách sản phẩm
fetchApi("http://localhost:3000/products")
    .then((data) => {
        // console.log(data); 
        const arrayHTML = data.map(item => (
            `
            <div class="product-item">
            <div class="inner-image">
                <img src="${item.thumbnail}" alt="${item.title}">
            </div>
            <div class="inner-content">
                <div class="inner-title">${item.title}</div>
                <div class="inner-price">${item.price}</div>
                <div class="inner-stock">Còn lại: ${item.stock}</div>
            </div>
        </div>
            `
        ));

        const elementProducts = document.querySelector("#products");
        elementProducts.innerHTML = arrayHTML.join("");
    });


// fetch("http://localhost:3000/products")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })