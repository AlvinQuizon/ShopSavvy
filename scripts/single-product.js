fetch('https://fakestoreapi.com/products/1')
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
    const productContainer = document.getElementById('single-product-lists');

    for (let product of products) {
      const productDiv = document.createElement('div');
      productDiv.innerHTML = `
        <div class="card mt-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${product.image}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h4 class="card-title">${product.title}</h4>
                <h5><span class="card-text"><span class="fw-bold">Price:</span> $${product.price}</span></h5>
                <p><span class="card-text"><span class="fw-bold">Rating:</span> ${product.rating.rate},</span>
                <span class="card-text"><span class="fw-bold"></span> ${product.rating.count}</span></p>
      
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
                <a href="#" class="btn btn-primary rounded mx-auto d-block">Add to Cart</a>
              </div>
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

  