const currentCartItems = JSON.parse(localStorage.getItem('cart'));
console.log(currentCartItems)

const cartQuantity = document.getElementById('cart-quantity');
cartQuantity.textContent = currentCartItems.length;



for (let product of currentCartItems) {
    const productContainer = document.getElementById('trackingOrder')
    const productDiv = document.createElement('div');
    productDiv.setAttribute('class', 'trackingOrder');
    
    productDiv.innerHTML = `
    <div class="product-info">
    ${product.title}
  </div>

  <div class="product-info">
    Quantity: 1
  </div>

  <img class="product-image" src="${product.image}">
        `;
    
        productContainer.appendChild(productDiv);
    }



// function addToCheckout() {
//   alert('added')
// }

