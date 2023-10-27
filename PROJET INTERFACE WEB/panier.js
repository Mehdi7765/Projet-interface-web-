const removeButtons = document.querySelectorAll('.remove-button');

removeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const cartItem = button.parentElement;
        cartItem.remove();
        updateTotal();
    });
});

function updateTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;

    cartItems.forEach(item => {
        const priceElement = item.querySelector('p');
        const price = parseFloat(priceElement.textContent.slice(7)); // Récupère le prix en tant que nombre
        const quantityInput = item.querySelector('input');
        const quantity = parseInt(quantityInput.value);
        total += price * quantity;
    });

    const cartTotal = document.querySelector('.cart-total p');
    cartTotal.textContent = `Total : $${total.toFixed(2)}`;
}

updateTotal();