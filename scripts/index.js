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
        <div class="border border-dark bg-light rounded text-center" style="height: 27rem; width: 20em;">
          <img src="${product.image}" class="img-thumbnail mt-4 mb-3" style="height: 8rem; width: 6rem;">
          <div class="card-body text-start ps-2 pe-2">
            <h5 class="card-title text-dark fw-bold mb-3">${product.title}</h5>
            <p><span class="fw-bold">Ratings: <span>${product.rating.rate}, </span></span>
            <span class="fw-bold">${product.rating.count} <span>Sold</span></span></p>
            <p><span class="fw-bold">Price: <span>${product.price}, </span></span></p>
            <a href="./single-product.html?productId=${product.id}" class="btn btn-primary mt-3 rounded mx-auto d-grid gap-2 col-8 col-lg-6 d-block">View Details</a>
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