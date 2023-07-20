 function updateCart() {
  const cartQuantity = document.getElementById('cart-quantity');

  const currentCartItems = JSON.parse(localStorage.getItem('cart'));
  console.log(currentCartItems.length);
  cartQuantity.textContent= currentCartItems.length;
 }

 updateCart();
