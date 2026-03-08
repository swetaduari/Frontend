/* ============================================
   PETAL & PURR - FLOWER SHOP
   JavaScript Logic
   ============================================ */

// ========== FLOWER DATA ==========
const flowersData = [
    { id: 1, name: "Red Rose", emoji: "🌹", desc: "Classic symbol of love & passion", price: 120, type: "Roses" },
    { id: 2, name: "Pink Rose", emoji: "🌹", desc: "Grace, admiration & sweetness", price: 110, type: "Roses" },
    { id: 3, name: "Sunflower", emoji: "🌻", desc: "Bright sunshine in a petal", price: 90, type: "Sunflowers" },
    { id: 4, name: "Tulip", emoji: "🌷", desc: "Perfect love & spring joy", price: 150, type: "Tulips" },
    { id: 5, name: "Cherry Blossom", emoji: "🌸", desc: "Delicate beauty & new beginnings", price: 200, type: "Exotic" },
    { id: 6, name: "Hibiscus", emoji: "🌺", desc: "Tropical elegance & warmth", price: 130, type: "Tropical" },
    { id: 7, name: "Daisy", emoji: "🌼", desc: "Innocence & cheerful simplicity", price: 70, type: "Daisies" },
    { id: 8, name: "Lavender", emoji: "💜", desc: "Calm serenity & devotion", price: 160, type: "Exotic" },
    { id: 9, name: "Lily", emoji: "🪷", desc: "Purity, beauty & elegance", price: 180, type: "Lilies" },
    { id: 10, name: "Orchid", emoji: "🪻", desc: "Luxury, refinement & strength", price: 250, type: "Exotic" },
    { id: 11, name: "Marigold", emoji: "🏵️", desc: "Warmth, optimism & prosperity", price: 60, type: "Daisies" },
    { id: 12, name: "Peony", emoji: "🌸", desc: "Romance, honor & compassion", price: 220, type: "Exotic" },
    { id: 13, name: "Carnation", emoji: "🌺", desc: "Fascination & distinction", price: 85, type: "Tropical" },
    { id: 14, name: "White Tulip", emoji: "🌷", desc: "Forgiveness & purity", price: 140, type: "Tulips" },
    { id: 15, name: "Wild Daisy", emoji: "🌼", desc: "Freedom & wild beauty", price: 55, type: "Daisies" },
    { id: 16, name: "Lotus", emoji: "🪷", desc: "Spiritual awakening & rebirth", price: 300, type: "Exotic" },
    { id: 17, name: "Jasmine", emoji: "🤍", desc: "Sweet fragrance & elegance", price: 170, type: "Exotic" },
    { id: 18, name: "Chrysanthemum", emoji: "💛", desc: "Joy, longevity & loyalty", price: 100, type: "Daisies" },
    { id: 19, name: "Gardenia", emoji: "🤍", desc: "Purity, sweetness & secret love", price: 190, type: "Tropical" },
    { id: 20, name: "Iris", emoji: "💙", desc: "Wisdom, hope & trust", price: 175, type: "Lilies" },
];

const flowerTypes = [
    { name: "Roses", emoji: "🌹", color: "#ff6b8a" },
    { name: "Tulips", emoji: "🌷", color: "#ff8ec4" },
    { name: "Sunflowers", emoji: "🌻", color: "#ffe066" },
    { name: "Daisies", emoji: "🌼", color: "#ffcba4" },
    { name: "Exotic", emoji: "🌸", color: "#c8a8e9" },
    { name: "Tropical", emoji: "🌺", color: "#ff8ec4" },
    { name: "Lilies", emoji: "🪷", color: "#a8e6cf" },
];

// ========== STATE ==========
let cart = [];
let bouquetItems = [];
let currentUser = null;
let menuOpen = false;

// ========== INITIALIZATION ==========
document.addEventListener("DOMContentLoaded", () => {
    createFallingPetals();
    renderFlowers();
    renderTypes();
    renderBouquetFlowers();
    setupDragAndDrop();
});

// ========== FALLING PETALS ==========
function createFallingPetals() {
    const container = document.getElementById("petals-container");
    const petals = ["🌸", "🌺", "🌼", "🌷", "💮", "🏵️"];

    setInterval(() => {
        if (document.querySelectorAll(".petal").length > 15) return;

        const petal = document.createElement("div");
        petal.className = "petal";
        petal.textContent = petals[Math.floor(Math.random() * petals.length)];
        petal.style.left = Math.random() * 100 + "%";
        petal.style.fontSize = (Math.random() * 15 + 14) + "px";
        petal.style.animationDuration = (Math.random() * 5 + 6) + "s";
        petal.style.opacity = Math.random() * 0.6 + 0.3;

        container.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 12000);
    }, 1500);
}

// ========== AUTH FUNCTIONS ==========
function switchAuthTab(tab) {
    const signinTab = document.getElementById("signin-tab");
    const signupTab = document.getElementById("signup-tab");
    const signinForm = document.getElementById("signin-form");
    const signupForm = document.getElementById("signup-form");
    const slider = document.getElementById("tab-slider");

    if (tab === "signin") {
        signinTab.classList.add("active");
        signupTab.classList.remove("active");
        signinForm.classList.add("active");
        signupForm.classList.remove("active");
        slider.classList.remove("right");
    } else {
        signupTab.classList.add("active");
        signinTab.classList.remove("active");
        signupForm.classList.add("active");
        signinForm.classList.remove("active");
        slider.classList.add("right");
    }
}

function handleSignIn(e) {
    e.preventDefault();
    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;

    if (!email || !password) {
        showToast("🚫", "Please fill in all fields!");
        return;
    }

    // Check registered users
    const users = JSON.parse(localStorage.getItem("petalUsers") || "[]");
    const user = users.find((u) => u.email === email && u.password === password);

    if (users.length > 0 && !user) {
        showToast("🚫", "Invalid email or password!");
        return;
    }

    currentUser = user || { name: email.split("@")[0], email };
    document.getElementById("nav-welcome").textContent = `Welcome, ${currentUser.name}! 🐱`;

    // Transition to shop
    animatePageTransition("auth-page", "shop-page");
    showToast("🌸", `Welcome back, ${currentUser.name}! 🐾`);
}

function handleSignUp(e) {
    e.preventDefault();
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const phone = document.getElementById("signup-phone").value;
    const password = document.getElementById("signup-password").value;

    if (!name || !email || !phone || !password) {
        showToast("🚫", "Please fill in all fields!");
        return;
    }

    // Save user
    const users = JSON.parse(localStorage.getItem("petalUsers") || "[]");

    if (users.find((u) => u.email === email)) {
        showToast("🚫", "Email already registered. Please sign in!");
        return;
    }

    const newUser = { name, email, phone, password };
    users.push(newUser);
    localStorage.setItem("petalUsers", JSON.stringify(users));

    currentUser = newUser;
    document.getElementById("nav-welcome").textContent = `Welcome, ${currentUser.name}! 🐱`;

    // Transition to shop
    animatePageTransition("auth-page", "shop-page");
    showToast("🌷", `Welcome to Petal & Purr, ${name}! 🎉`);
}

function handleLogout() {
    currentUser = null;
    cart = [];
    bouquetItems = [];
    updateCartBadge();
    toggleMenu();

    // Reset forms
    document.getElementById("signin-form").reset();
    document.getElementById("signup-form").reset();

    // Reset bouquet
    document.getElementById("bouquet-items").innerHTML = "";
    document.getElementById("drop-placeholder").classList.remove("hidden");
    document.getElementById("bouquet-total-price").textContent = "₹0.00";

    animatePageTransition("shop-page", "auth-page");
    showToast("👋", "Logged out! See you soon! 🐾");

    // Scroll back to top of auth
    setTimeout(() => {
        const scrollContainer = document.querySelector('.auth-scroll-container');
        if (scrollContainer) scrollContainer.scrollTop = 0;
    }, 500);
}

// ========== PAGE TRANSITIONS ==========
function animatePageTransition(fromId, toId) {
    const fromPage = document.getElementById(fromId);
    const toPage = document.getElementById(toId);

    fromPage.style.animation = "none";
    fromPage.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    fromPage.style.opacity = "0";
    fromPage.style.transform = "scale(0.95)";

    setTimeout(() => {
        fromPage.classList.remove("active");
        fromPage.style.cssText = "";
        toPage.classList.add("active");
    }, 500);
}

// ========== MENU ==========
function toggleMenu() {
    menuOpen = !menuOpen;
    const hamburger = document.getElementById("hamburger-btn");
    const sideMenu = document.getElementById("side-menu");
    const overlay = document.getElementById("menu-overlay");

    hamburger.classList.toggle("active", menuOpen);
    sideMenu.classList.toggle("open", menuOpen);
    overlay.classList.toggle("active", menuOpen);
}

// ========== SECTIONS ==========
function showSection(section) {
    // Update menu active state
    document.querySelectorAll(".menu-items li").forEach((li) => li.classList.remove("active"));
    const menuItem = document.getElementById(`menu-${section}`);
    if (menuItem) menuItem.classList.add("active");

    // Show section
    document.querySelectorAll(".shop-section").forEach((s) => s.classList.remove("active"));
    const targetSection = document.getElementById(`section-${section}`);
    if (targetSection) {
        targetSection.classList.add("active");
        // Re-trigger animation
        targetSection.style.animation = "none";
        requestAnimationFrame(() => {
            targetSection.style.animation = "";
        });
    }

    // Close menu on mobile
    if (menuOpen) toggleMenu();

    // Hide type flowers display when going back to types
    if (section === "types") {
        hideTypeFlowers();
    }
}

// ========== RENDER FLOWERS ==========
function renderFlowers() {
    const grid = document.getElementById("flowers-grid");
    grid.innerHTML = "";

    flowersData.forEach((flower, index) => {
        const card = document.createElement("div");
        card.className = "flower-card";
        card.style.animationDelay = `${index * 0.08}s`;
        card.innerHTML = `
            <span class="flower-emoji" style="animation-delay: ${index * 0.2}s">${flower.emoji}</span>
            <div class="flower-name">${flower.name}</div>
            <div class="flower-desc">${flower.desc}</div>
            <div class="flower-price">₹${flower.price}</div>
            <button class="add-cart-btn" onclick="addToCart(${flower.id})" id="add-cart-${flower.id}">
                Add to Cart 🛒
            </button>
        `;
        grid.appendChild(card);
    });
}

// ========== RENDER TYPES ==========
function renderTypes() {
    const grid = document.getElementById("types-grid");
    grid.innerHTML = "";

    flowerTypes.forEach((type, index) => {
        const count = flowersData.filter((f) => f.type === type.name).length;
        const card = document.createElement("div");
        card.className = "type-card";
        card.style.animationDelay = `${index * 0.1}s`;
        card.onclick = () => showTypeFlowers(type.name);
        card.innerHTML = `
            <span class="type-emoji" style="animation-delay: ${index * 0.3}s">${type.emoji}</span>
            <div class="type-name">${type.name}</div>
            <div class="type-count">${count} flower${count > 1 ? "s" : ""}</div>
        `;
        grid.appendChild(card);
    });
}

function showTypeFlowers(typeName) {
    const display = document.getElementById("type-flowers-display");
    const title = document.getElementById("type-title");
    const grid = document.getElementById("type-flowers-grid");
    const typesGrid = document.getElementById("types-grid");

    title.textContent = `${typeName} Collection`;
    grid.innerHTML = "";

    const typeFlowers = flowersData.filter((f) => f.type === typeName);
    typeFlowers.forEach((flower, index) => {
        const card = document.createElement("div");
        card.className = "flower-card";
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <span class="flower-emoji">${flower.emoji}</span>
            <div class="flower-name">${flower.name}</div>
            <div class="flower-desc">${flower.desc}</div>
            <div class="flower-price">₹${flower.price}</div>
            <button class="add-cart-btn" onclick="addToCart(${flower.id})">
                Add to Cart 🛒
            </button>
        `;
        grid.appendChild(card);
    });

    typesGrid.style.display = "none";
    display.classList.add("show");
}

function hideTypeFlowers() {
    const display = document.getElementById("type-flowers-display");
    const typesGrid = document.getElementById("types-grid");

    display.classList.remove("show");
    typesGrid.style.display = "";
}

// ========== BOUQUET BUILDER ==========
function renderBouquetFlowers() {
    const list = document.getElementById("bouquet-flowers-list");
    list.innerHTML = "";

    flowersData.forEach((flower) => {
        const item = document.createElement("div");
        item.className = "drag-flower";
        item.draggable = true;
        item.dataset.flowerId = flower.id;
        item.innerHTML = `
            <span class="drag-emoji">${flower.emoji}</span>
            <div class="drag-name">${flower.name}</div>
            <div class="drag-price">₹${flower.price}</div>
        `;

        // Drag events
        item.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", flower.id);
            item.style.opacity = "0.5";
        });

        item.addEventListener("dragend", () => {
            item.style.opacity = "1";
        });

        // Touch support for mobile
        item.addEventListener("click", () => {
            addToBouquet(flower.id);
        });

        list.appendChild(item);
    });
}

function setupDragAndDrop() {
    const dropZone = document.getElementById("bouquet-drop-zone");

    dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZone.classList.add("drag-over");
    });

    dropZone.addEventListener("dragleave", () => {
        dropZone.classList.remove("drag-over");
    });

    dropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropZone.classList.remove("drag-over");
        const flowerId = parseInt(e.dataTransfer.getData("text/plain"));
        addToBouquet(flowerId);
    });
}

function addToBouquet(flowerId) {
    const flower = flowersData.find((f) => f.id === flowerId);
    if (!flower) return;

    bouquetItems.push({ ...flower, uid: Date.now() + Math.random() });
    renderBouquetItems();
    updateBouquetTotal();
    showToast("💐", `${flower.name} added to bouquet!`);
}

function renderBouquetItems() {
    const container = document.getElementById("bouquet-items");
    const placeholder = document.getElementById("drop-placeholder");

    container.innerHTML = "";

    if (bouquetItems.length === 0) {
        placeholder.classList.remove("hidden");
    } else {
        placeholder.classList.add("hidden");
    }

    bouquetItems.forEach((item, index) => {
        const el = document.createElement("div");
        el.className = "bouquet-item";
        el.innerHTML = `
            <span class="item-emoji">${item.emoji}</span>
            <div>
                <div class="item-name">${item.name}</div>
                <div class="item-price">₹${item.price}</div>
            </div>
            <button class="remove-item-btn" onclick="removeFromBouquet(${index})">✕</button>
        `;
        container.appendChild(el);
    });
}

function removeFromBouquet(index) {
    const removed = bouquetItems.splice(index, 1)[0];
    renderBouquetItems();
    updateBouquetTotal();
    showToast("🗑️", `${removed.name} removed from bouquet`);
}

function updateBouquetTotal() {
    const total = bouquetItems.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("bouquet-total-price").textContent = `₹${total.toFixed(2)}`;
}

function addBouquetToCart() {
    if (bouquetItems.length === 0) {
        showToast("😿", "Your bouquet is empty! Add some flowers first.");
        return;
    }

    const total = bouquetItems.reduce((sum, item) => sum + item.price, 0);
    const bouquetFlowerNames = bouquetItems.map((i) => i.emoji).join("");

    const bouquetCartItem = {
        id: "bouquet-" + Date.now(),
        name: "Custom Bouquet",
        emoji: "💐",
        desc: `Contains: ${bouquetFlowerNames} (${bouquetItems.length} flowers)`,
        price: total,
        qty: 1,
        isBouquet: true,
    };

    cart.push(bouquetCartItem);
    updateCartBadge();
    renderCart();

    // Clear bouquet
    bouquetItems = [];
    renderBouquetItems();
    updateBouquetTotal();

    showToast("🎉", "Your custom bouquet has been added to cart!");
}

// ========== CART ==========
function addToCart(flowerId) {
    const flower = flowersData.find((f) => f.id === flowerId);
    if (!flower) return;

    const existing = cart.find((item) => item.id === flowerId);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...flower, qty: 1 });
    }

    updateCartBadge();
    renderCart();
    showToast("🛒", `${flower.name} added to cart!`);

    // Button ripple effect
    const btn = document.querySelector(`#add-cart-${flowerId}`);
    if (btn) {
        btn.style.transform = "scale(0.9)";
        setTimeout(() => {
            btn.style.transform = "";
        }, 200);
    }
}

function updateCartQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        const removed = cart.splice(index, 1)[0];
        showToast("🗑️", `${removed.name} removed from cart`);
    }
    updateCartBadge();
    renderCart();
}

function removeFromCart(index) {
    const removed = cart.splice(index, 1)[0];
    updateCartBadge();
    renderCart();
    showToast("🗑️", `${removed.name} removed from cart`);
}

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById("cart-badge").textContent = totalItems;
}

function renderCart() {
    const itemsContainer = document.getElementById("cart-items");
    const emptyMsg = document.getElementById("cart-empty");
    const footer = document.getElementById("cart-footer");

    itemsContainer.innerHTML = "";

    if (cart.length === 0) {
        emptyMsg.style.display = "block";
        footer.style.display = "none";
        return;
    }

    emptyMsg.style.display = "none";
    footer.style.display = "flex";

    cart.forEach((item, index) => {
        const el = document.createElement("div");
        el.className = "cart-item";
        el.style.animationDelay = `${index * 0.1}s`;
        el.innerHTML = `
            <span class="cart-item-emoji">${item.emoji}</span>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-desc">${item.desc}</div>
            </div>
            <div class="cart-item-qty">
                <button class="qty-btn" onclick="updateCartQty(${index}, -1)">−</button>
                <span class="qty-value">${item.qty}</span>
                <button class="qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
            </div>
            <span class="cart-item-price">₹${(item.price * item.qty).toFixed(2)}</span>
            <button class="remove-cart-btn" onclick="removeFromCart(${index})">✕</button>
        `;
        itemsContainer.appendChild(el);
    });

    // Update total
    const grandTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    document.getElementById("cart-total-price").textContent = `₹${grandTotal.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) return;

    document.getElementById("checkout-modal").classList.add("active");

    // Clear cart
    cart = [];
    updateCartBadge();
    renderCart();
}

function closeCheckoutModal() {
    document.getElementById("checkout-modal").classList.remove("active");
    showSection("flowers");
}

// ========== TOAST ==========
function showToast(icon, message) {
    const toast = document.getElementById("toast");
    const toastIcon = document.getElementById("toast-icon");
    const toastMsg = document.getElementById("toast-msg");

    toastIcon.textContent = icon;
    toastMsg.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}
