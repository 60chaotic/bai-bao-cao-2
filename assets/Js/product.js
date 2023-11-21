


fetch("http://localhost:3000/products")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        const newProduct = data.map(item => (
            `
            <div class="product__item">
            <div class="product__image">
                <img src="${item.thumbnail}" alt="${item.title}">
            </div>
            <div class="product__content">
                <div class="product__title">${item.title}</div>
                <div class="product__label">
                <div class="product__price">${item.price}.000vnđ</div>
                <div class="product__stock">Còn lại : ${item.stock}</div>
                </div>
            </div>
            </div>
            `
        ))

        const elementProducts = document.querySelector("#products");
        elementProducts.innerHTML = newProduct.join("");
    })



    // vẽ ra danh sách sản phẩm
    const drawProduct = (api) => {
        fetch("http://localhost:3000/products")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        const newProduct = data.map(item => (
            `
            <div class="product__item">
            <div class="product__image">
                <img src="${item.thumbnail}" alt="${item.title}">
            </div>
            <div class="product__content">
                <div class="product__title">${item.title}</div>
                <div class="product__label">
                <div class="product__price">${item.price}.000vnđ</div>
                <div class="product__stock">Còn lại : ${item.stock}</div>
                </div>
            </div>
            </div>
            `
        ))

        const elementProducts = document.querySelector("#products");
        elementProducts.innerHTML = newProduct.join("");
    })
    };
    // Hết vẽ ra danh sách sản phẩm




    // tim kiem sp

    const formSearch = document.querySelector("#form-search");
    formSearch.addEventListener("submit", (event) => {
        event.preventDefault();
        const keyword = event.target.elements.keyword.value
        fetch(`http://localhost:3000/products?q=${keyword}`)
            .then((response) => {
        return response.json();
        })
            .then((data) => {
        // console.log(data);
        const newProduct = data.map(item => (
            `
            <div class="product__item">
            <div class="product__image">
                <img src="${item.thumbnail}" alt="${item.title}">
            </div>
            <div class="product__content">
                <div class="product__title">${item.title}</div>
                <div class="product__label">
                <div class="product__price">${item.price}.000vnđ</div>
                <div class="product__stock">Còn lại : ${item.stock}</div>
                </div>
            </div>
            </div>
            `
        ))

        const elementProducts = document.querySelector("#products");
        elementProducts.innerHTML = newProduct.join("");
    })
    })