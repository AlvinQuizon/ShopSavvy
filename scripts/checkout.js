const currentCartItems = JSON.parse(localStorage.getItem('cart'));

const cartQuantity = document.getElementById('cart-quantity');
cartQuantity.textContent = currentCartItems.length;


function addToCheckout() {
  alert('added')
}