const currentCartItems = JSON.parse(localStorage.getItem('cart'));
console.log(currentCartItems)

const cartQuantity = document.getElementById('cart-quantity');
cartQuantity.textContent = currentCartItems.length;


// function addToCheckout() {
//   alert('added')
// }

