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
      productDiv.setAttribute('class', 'grid col-sm-6 col-md-6 col-lg-3');
      productDiv.innerHTML = `
        <div class="box product-container">
          <a href="./product-details.html?productId=${product.id}">
            <div class="img-box product-image-container">
              <img src="${product.image}" class="product-image">
            </div>
            <div class="detail-box product-name  overflow-hidden">
              <h6>
              ${product.title}
              </h6>
            </div>
            <div>
              <h6>
                Price:
                <span class="text-danger">
                  $${product.price}
                </span>
              </h6>
            </div>
            <div class="product-rating-container">
              <p><span class="fw-bold">Ratings: <span>${product.rating.rate}, </span></span></p>
            </div>
            
            <div>
              <p><span class="fw-bold">Sold: <span>${product.rating.count}</span></span></p>
            </div>
            <div>
              <a href="./product-details.html?productId=${product.id}" class="btn btn-warning col align-self-end mt-3 rounded-pill mx-auto d-grid gap-2 col-8 col-lg-12 d-block">View Details</a>
            </div>
            <div class="new">
              <span>
                New
              </span>
            </div>
          </a>
        </div>
      `;
    
        productContainer.appendChild(productDiv);
    }
  });

	$(document).ready(function(){
    $("#myModal").modal('show');
	});

  myModal.hide()