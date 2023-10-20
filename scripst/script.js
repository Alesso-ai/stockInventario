const productInput = document.getElementById("product-input");
        const quantityInput = document.getElementById("quantity-input");
        const productList = document.getElementById("product-list");

        // Función para añadir un producto al inventario
        function addProduct() {
            const productName = productInput.value;
            const productQuantity = parseInt(quantityInput.value);

            if (productName === "" || isNaN(productQuantity)) {
                alert("Por favor, ingresa un nombre y una cantidad válida.");
                return;
            }

            const li = document.createElement("li");
            li.innerHTML = `${productName} - Cantidad: ${productQuantity} <button onclick="deleteProduct(this)">Eliminar</button>`;
            productList.appendChild(li);

            productInput.value = "";
            quantityInput.value = "";
        }

        // Función para eliminar un producto del inventario
        function deleteProduct(button) {
            const li = button.parentElement;
            productList.removeChild(li);
        }
