const currentCartItems = JSON.parse(localStorage.getItem('cart'));
// console.log(currentCartItems)

const cartQuantity = document.getElementById('cart-quantity');
cartQuantity.textContent = currentCartItems.length;



for (let product of currentCartItems) {
    const productContainer = document.getElementById('ordersCheckout')
    const productDiv = document.createElement('div');
    productDiv.setAttribute('class', 'ordersCheckout');
    console.log(product)
    productDiv.innerHTML = `
            <div class="order-details-grid">
            <div class="product-image-container">
            <img src="${product.image}">
            </div>

            <div class="product-details">
            <div class="product-name">
                ${product.title}
            </div>
            <div class="product-delivery-date">
                Arriving on: August 15
            </div>
            <div class="product-quantity">
                Quantity: 1
            </div>
            <button class="buy-again-button button-primary">
                <img class="buy-again-icon" src="images/icons/buy-again.png">
                <span class="buy-again-message">Buy it again</span>
            </button>
            </div>
            
        </div>
        </div>
        `;
    
        productContainer.appendChild(productDiv);
    }



// function addToCheckout() {
//   alert('added')
// }

