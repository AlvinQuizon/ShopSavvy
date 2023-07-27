const currentCartItems = JSON.parse(localStorage.getItem('cart'));
// console.log(currentCartItems)

const cartQuantity = document.getElementById('cart-quantity');
cartQuantity.textContent = currentCartItems.length;




for (let product of currentCartItems) {
    const productContainer = document.getElementById('cart-item-container')
    const productDiv = document.createElement('div');
    productDiv.setAttribute('class', 'cart-item-container');
    console.log(product)
    productDiv.innerHTML = `
          <div class="delivery-date">
            Delivery date: Tuesday, July 27
          </div>

          <div class="cart-item-details-grid">
            <img class="product-image"
              src="${product.image}">

            <div class="cart-item-details">
              <div class="product-name">
              ${product.title}
              </div>
              <div class="product-price">
              $${product.price}
              </div>
              <div class="product-quantity">
                <span>
                  Quantity: <span class="quantity-label">2</span>
                </span>
                <span class="update-quantity-link link-primary">
                  Update
                </span>
                <span class="delete-quantity-link link-primary">
                  Delete
                </span>
              </div>
            </div>

            <div class="delivery-options">
              <div class="delivery-options-title">
                Choose a delivery option:
              </div>
              <div class="delivery-option">
                <input type="radio" checked
                  class="delivery-option-input"
                  name="delivery-option-1">
                <div>
                  <div class="delivery-option-date">
                    Tuesday, July 27
                  </div>
                  <div class="delivery-option-price">
                    FREE Shipping
                  </div>
                </div>
              </div>
              <div class="delivery-option">
                <input type="radio"
                  class="delivery-option-input"
                  name="delivery-option-1">
                <div>
                  <div class="delivery-option-date">
                    Wednesday, July 30
                  </div>
                  <div class="delivery-option-price">
                    $4.99 - Shipping
                  </div>
                </div>
              </div>
              <div class="delivery-option">
                <input type="radio"
                  class="delivery-option-input"
                  name="delivery-option-1">
                <div>
                  <div class="delivery-option-date">
                    Monday, August 5
                  </div>
                  <div class="delivery-option-price">
                    $9.99 - Shipping
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
    
        productContainer.appendChild(productDiv);
    }



// function addToCheckout() {
//   alert('added')
// }

