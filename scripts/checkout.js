fetch(`https://fakestoreapi.com/products/`)
  .then(res => res.json())
  .then(data => {
    console.log(data);

   // Get the reference to the "Add to Cart" button
const addToCartBtn = document.getElementById('add-to-cart-btn');

// Add a click event listener to the button
addToCartBtn.addEventListener('click', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the product details from the page
  const productID = document.getElementById('product-id').textContent;
  const productName = document.getElementById('product-title').textContent;
  const productPrice = document.getElementById('product-price').textContent;
  const productQuantity = document.querySelector('.quantity-label').textContent;

  // Create the order summary element
  const orderSummaryElement = document.createElement('div');
  orderSummaryElement.classList.add('cart-item-container');

  // Populate the order summary with the product details
  orderSummaryElement.innerHTML = `
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
    </div>
    <div class="cart-item-details-grid">
      <img class="product-image" src="" id="product-image">
      <div class="cart-item-details">
        <div>
          <p><b>Product ID: </b><span class="fw-bold" id="summary-product-id">${productID}</span></p>
        </div>
        <div class="product-name">
          <h4 class="card-title">Product Name: <span id="summary-product-title">${productName}</span></h4>
        </div>
        <div class="product-price">
          <p><b>Price: $</b><span class="fw-bold" id="summary-product-price">${productPrice}</span></p>
        </div>
        <div class="product-quantity">
          <span>Quantity: <span class="summary-quantity-label">${productQuantity}</span></span>
          <span class="update-quantity-link link-primary">Update</span>
          <span class="delete-quantity-link link-primary">Delete</span>
        </div>
      </div>
      <div class="delivery-options">
        <!-- Delivery options code goes here -->
      </div>
    </div>
  `;

  // Append the order summary to the checkout grid
  const checkoutGrid = document.querySelector('.checkout-grid');
  checkoutGrid.appendChild(orderSummaryElement);

  // Clear the product details after adding to cart
  document.getElementById('product-id').textContent = '';
  document.getElementById('product-title').textContent = '';
  document.getElementById('product-price').textContent = '';
  document.querySelector('.quantity-label').textContent = '';

  // Perform any other necessary actions for adding to cart
});

// Example function to show the update quantity form
function showUpdateQuantityForm() {
  // Your logic to show the form to update the quantity goes here
  // You can access other elements on the page and perform necessary actions
  console.log('Showing update quantity form');
}

// Example function to confirm and delete the item
function confirmDeleteItem() {
  // Your logic to prompt for confirmation and delete the item goes here
  // You can access other elements on the page and perform necessary actions
  console.log('Confirming and deleting the item');
}


});