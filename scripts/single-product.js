const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('productId');
console.log(productId);

fetch(`https://fakestoreapi.com/products/${productId}`)
  .then(res => res.json())
  .then(data => {
    console.log(data);

    const productImage = document.getElementById('product-image');
    productImage.src = data.image;

    const productId = document.getElementById('product-id');
    productId.textContent = data.id;

    const productCategory = document.getElementById('product-category');
    productCategory.textContent = data.category;

    const productPrice = document.getElementById('product-price');
    productPrice.textContent = data.price;

    const productDescription = document.getElementById('product-description');
    productDescription.textContent = data.description;

    const productTitle = document.getElementById('product-title');
    productTitle.textContent = (data.title);

    const productRating = document.getElementById('product-rating');
    productRating.textContent = data.rating.rate;

    const productSold = document.getElementById('product-count');
    productSold.textContent = data.rating.count;


  });