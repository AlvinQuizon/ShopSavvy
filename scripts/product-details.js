let product;

const fetchProduct = async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const productId = urlParams.get('productId');

  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  product = await res.json();

  console.log(product)

  const productImage = document.getElementById('product-image');
  productImage.src = product.image;

  const productCategory = document.getElementById('product-category');
  productCategory.textContent = product.category;

  const productPrice = document.getElementById('product-price');
  productPrice.textContent = product.price;

  const productDescription = document.getElementById('product-description');
  productDescription.textContent = product.description;

  const productTitle = document.getElementById('product-title');
  productTitle.textContent = (product.title);

  const productRating = document.getElementById('product-rating');
  productRating.textContent = product.rating.rate;

  const productSold = document.getElementById('product-count');
  productSold.textContent = product.rating.count;

}

fetchProduct();

function addToCart() {
  // alert('ADDED')
  const cartItem = {
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
  }; 
  const currentCartItems = JSON.parse(localStorage.getItem('cart'));
  console.log(currentCartItems)
  if (!currentCartItems || currentCartItems.length === 0 ) {
    localStorage.setItem('cart', JSON.stringify([cartItem]));
  } else {
    localStorage.setItem('cart', JSON.stringify([...currentCartItems, cartItem]));
  }
 
  updateCart();
}
