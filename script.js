const cartContainer = document.getElementById("cart-men");
const addToCartBtn = document.getElementById("cart-btn");
const showHideCartBtn = document.getElementById("show-hide-cart");
const cartQuantity = document.querySelector('.cart-icon-Quantity');
const closeMenu = document.getElementById("close-menu");
const menuIcon = document.getElementById("menu-icon");
const menuOptions = document.getElementById("menu-options");

let totalItems = 0;
function addItemToCart(itemName, itemPrice) {
    const emptyCartMessage = document.querySelector('.empty-cart-message');
    const cartItems = document.querySelectorAll('.cart-item');
    let isItemInCart = false;
    cartItems.forEach(cartItem => {
        const itemNameInCart = cartItem.querySelector('h3').textContent;
        if (itemNameInCart === itemName) {
            isItemInCart = true;
        }
    });

    if (!isItemInCart) {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartQuantity.style.display = "flex";
        const cartMenuQuantityDisplay = document.getElementById('totalItems');
        cartMenuQuantityDisplay.innerHTML = totalItems;
        cartItem.innerHTML = `
    <div>
    <div class = flex-cart display = "flex">
        <img src="images/image-product-1.jpg" alt="${itemName}" width="40" height = "40"  >
        <div class = "menuChild" display = "block">
            <h5 class = "itemName" >${itemName}</h5>
            <div id = "price">
            <p margin-right = "5">$${itemPrice}</p>
            <p style="margin-left: 5px;">x</p> <!-- Include totalItems here -->
            <p class = "item-quantity" style="margin-left: 5px;"> ${totalItems}</p> <!-- Include totalItems here -->
            <p class = "item-total-price" style="margin-left: 5px;">${itemPrice * totalItems}</p> <!-- Include totalItems here -->
            </div>
     </div>
     </div>
            
            <button class="delete-btn" id = "deleteBtn" onclick="deleteItem()"><img class = "delete" src="./images/icon-delete.svg" alt="delete"></button>
            
            <button class = "CheckoutBtn">Checkout</button
            </div>
        
    `;

        cartContainer.appendChild(cartItem);
        if (totalItems > 0) {
            totalItems += 0;
        } else {
            totalItems += 1;
        }



        updateTotalItems(itemPrice);
        updateTotalItems();



        const deleteBtn = cartItem.querySelector('.delete-btn');

        deleteBtn.addEventListener('click', () => {
            cartItem.remove();
            cartQuantity.style.display = "none";

            if (totalItems > 0) {
                totalItems = 0;
            }
            updateTotalItems();
            updateCartTotal();

            if (cartContainer.childElementCount === 2) {
                cartContainer.innerHTML = `
            <h3>cart</h3>
            <hr>
           
        `;
            }
            emptyCartMessage.style.display = 'block';
        })
        emptyCartMessage.style.display = 'none';

    }
};


function increaseQuantity() {
    totalItems += 1;
    updateTotalItems();
}

function decreaseQuantity() {
    if (totalItems > 1) {
        totalItems -= 1;
        updateTotalItems();
    }
}

function updateTotalItems() {
    const totalItemsDisplay = document.getElementById('totalItems');
    totalItemsDisplay.textContent = totalItems;
    updateCartTotal();
}

function updateCartTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(cartItem => {

        const itemQuantity = cartItem.querySelector('.item-quantity');
        const itemTotalPrice = cartItem.querySelector('.item-total-price');
        const itemPrice = parseFloat(cartItem.querySelector('p').textContent.replace('$', ''));
        cartQuantity.textContent = totalItems;
        itemQuantity.textContent = totalItems;
        itemTotalPrice.textContent = `$${itemPrice * totalItems}`;
    });

}

// Event listener for adding item to cart
addToCartBtn.addEventListener("click", () => {

    const itemName = "Fall Limited Edition Sneakers";
    const itemPrice = 125.00; // Example price


    addItemToCart(itemName, itemPrice);
});
updateTotalItems();




// Function to show the cart
function showCart() {
    cartContainer.style.display = "block";
}

// Function to hide the cart
function hideCart() {
    cartContainer.style.display = "none";
}

// Event listener to toggle cart visibility
showHideCartBtn.addEventListener("click", () => {
    if (cartContainer.style.display === "none") {
        showCart();
    } else {
        hideCart();
    }
});

function menu() {
    menuOptions.style.display = "block";
}

function closeBtn() {
    menuOptions.style.display = "none";
}


menuIcon.addEventListener("click", () => {
    if (menuOptions.style.display === "none") {
        menuOptions.style.display = "block";
    }
});

closeMenu.addEventListener("click", () => {
    if (menuOptions.style.display === "block") {
        menuOptions.style.display = "none";
    }
});

let slideIndexx = 0;
slidesArray();

function plusSlidess(n) {
    slidesArray(slideIndexx += n);
}

function slidesArray() {
    let slides = document.getElementsByClassName("hero-picture");

    // Reset all slides to be hidden
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Update slideIndex
    if (slideIndexx >= slides.length) {
        slideIndexx = 0;
    }
    if (slideIndexx < 0) {
        slideIndexx = slides.length - 1;
    }

    // Display the current slide
    slides[slideIndexx].style.display = "block";
}

document.querySelector('.pre').addEventListener('click', function () {
    plusSlidess(-1);
});

document.querySelector('.nex').addEventListener('click', function () {
    plusSlidess(1);
});



// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

