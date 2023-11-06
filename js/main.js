const salesForm = document.getElementById('salesForm');
const salesTable = document.getElementById('salesTable');

function addSale() {
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;

    const total = quantity * price;

    const saleEntry = document.createElement('div');
    saleEntry.innerHTML = `<strong>${product}</strong> - Quantity: ${quantity}, Price: $${price}, Total: $${total}`;

    salesTable.appendChild(saleEntry);

    // Clear the form after adding a sale
    salesForm.reset();
}

