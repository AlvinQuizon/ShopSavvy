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
        <div class="col-sm-6 col-md-4 col-lg-3">
          <div class="box">
            <a href="./product-details.html?productId=${product.id}">
              <div class="img-box">
                <img src="${product.image}" alt="">
              </div>
              <div class="detail-box">
                <h6>
                ${product.title}
                </h6>
                <h6>
                  Price
                  <span>
                    $${product.price}
                  </span>
                </h6>
              </div>
              <div class="new">
                <span>
                  New
                </span>
              </div>
            </a>
          </div>
        </div>
      `;
    
        productContainer.appendChild(productDiv);
    }
  });