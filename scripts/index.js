fetch('https://fakestoreapi.com/products')
  .then((res) => {
    if (res.ok) {
      return res.json();
      console.log('success');
    } else {
      console.log('error');
    }
  }).then((data) => {
    const products = data;
    console.log(data);
    const productContainer = document.getElementById('product-lists')

    for (let product of products) {
      const productDiv = document.createElement('div');
      productDiv.innerHTML = `
        <div class="products-grid container mt-5 pt-4">
          <div class="product-container rounded row col-lg-4 border border-dark">
            <div class="product-image-container">
            <img src="${product.image}" class="card-img-top rounded mx-auto d-block mt-3" style="width: 8rem;">
            </div>

            <div class="product-name h5 mt-2 limit-text-to-2-lines">
              ${product.title}
            </div>

            <div class="product-rating-container h6">
              <p><span class="card-text"><span class="fw-bold">Rating:</span> ${product.rating.rate},</span></p>
              <p><span class="card-text"><span class="fw-bold">Sold: </span> ${product.rating.count}</span></p>
              <p class="fw-bold">Price: ${product.price}</p>
            </div>

            <div class="product-quantity-container">
              <div class="mb-2 fw-bold">Quantity:</div>
                <select>
                  <option selected value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
              <a href="#" class="btn btn-primary rounded-pill mb-4 mx-auto col-6 d-block">Add to Cart</a>
            </div>
          </div>
        </div>`;

    const productImage = document.createElement('img')

    const productCategory = document.createElement('h4');

    const productTitle = document.createElement('h4');

    const productDescription = document.createElement('p');

    const productPrice = document.createElement('p');

    const productRating = document.createElement('p');

    productContainer.appendChild(productDiv);

    productDiv.appendChild(productRating);
  }
  });