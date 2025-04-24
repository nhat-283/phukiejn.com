$(document).ready(function() {
    // Dữ liệu phụ kiện điện thoại được chuẩn bị sẵn
    const phoneAccessories = [
        {
            id: 1,
            title: "Ốp lưng iPhone 14 Pro",
            category: "Ốp lưng",
            price: 250000,
            oldPrice: 350000,
            image: "https://th.bing.com/th/id/OIP.bhr0L-vKuONqQiEUljKx5wHaHa?w=206&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: { rate: 4.5, count: 120 },
            description: "Ốp lưng nhựa dẻo cao cấp, chống sốc, nhiều màu sắc"
        },
        {
            id: 2,
            title: "Cáp sạc nhanh Type C 2m",
            category: "Cáp sạc",
            price: 150000,
            oldPrice: 200000,
            image: "https://th.bing.com/th/id/OIP.IfMp0qYw7le4lluiTuMGagHaHa?w=187&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: { rate: 4.2, count: 85 },
            description: "Cáp sạc nhanh 3A, đầu connector vàng, dây bện dù"
        },
        {
            id: 3,
            title: "Tai nghe Bluetooth AirPods 2",
            category: "Tai nghe",
            price: 1200000,
            oldPrice: 1500000,
            image: "https://th.bing.com/th?&id=OVP.2qZ_owFJ_n8qMHGkFx9GCQGQGQ&w=318&h=178&c=7&pid=2.1&rs=1",
            rating: { rate: 4.8, count: 200 },
            description: "Tai nghe không dây chống ồn, thời lượng pin 5 giờ"
        },
        {
            id: 4,
            title: "Pin dự phòng 10000mAh",
            category: "Pin dự phòng",
            price: 450000,
            oldPrice: 600000,
            image: "https://th.bing.com/th/id/OIP.NeNGzxVWRN3wEWRipwZQOAHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: { rate: 4.3, count: 150 },
            description: "Pin sạc dự phòng siêu nhẹ, 2 cổng USB"
        },
        {
            id: 5,
            title: "Ốp lưng Samsung S23 Ultra",
            category: "Ốp lưng",
            price: 180000,
            oldPrice: 250000,
            image: "data:image/jpeg;base64,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",
            rating: { rate: 4.6, count: 90 },
            description: "Ốp lưng trong suốt bảo vệ camera"
        },
        {
            id: 6,
            title: "Cáp Lightning Original",
            category: "Cáp sạc",
            price: 300000,
            oldPrice: 400000,
            image: "https://via.placeholder.com/300x300/20c997/ffffff?text=Lightning",
            rating: { rate: 4.7, count: 110 },
            description: "Cáp chính hãng Apple, dây bền bỉ"
        }
    ];

    // Danh mục sản phẩm
    const phoneCategories = [
        { name: 'Ốp lưng', icon: 'mobile-alt' },
        { name: 'Cáp sạc', icon: 'bolt' },
        { name: 'Tai nghe', icon: 'headphones' },
        { name: 'Pin dự phòng', icon: 'battery-full' }
    ];
    
    // Cart data
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let currentProduct = null;
    
    // Initialize the page
    loadCategories();
    loadProducts();
    updateCartCount();
    
    // Event listeners
    $('#cartIcon').click(function(e) {
        e.preventDefault();
        showCart();
    });
    
    $('#searchInput').on('input', function() {
        filterProducts($(this).val());
    });
    
    $('#sortProducts').change(function() {
        sortProducts($(this).val());
    });
    
    $('#checkoutBtn').click(function() {
        checkout();
    });
    
    $('#addToCartBtn').click(function() {
        if (currentProduct) {
            addToCart(currentProduct);
            $('#productDetailModal').modal('hide');
        }
    });
    
    // Load categories
    function loadCategories() {
        const categoriesHtml = phoneCategories.map(category => `
            <div class="col-md-3 col-6">
                <div class="category-card" data-category="${category.name}">
                    <i class="fas fa-${category.icon} category-icon"></i>
                    <h5>${category.name}</h5>
                </div>
            </div>
        `).join('');
        
        $('#categories').html(categoriesHtml);
        
        // Thêm sự kiện click cho danh mục
        $('.category-card').click(function() {
            const category = $(this).data('category');
            filterByCategory(category);
        });
    }
    
    // Load products
    function loadProducts() {
        // Featured products (4 sản phẩm đầu)
        const featuredProductsHtml = phoneAccessories.slice(0, 4).map(product => createProductCard(product)).join('');
        $('#featuredProducts').html(featuredProductsHtml);
        
        // All products
        const allProductsHtml = phoneAccessories.map(product => createProductCard(product)).join('');
        $('#allProducts').html(allProductsHtml);
        
        setupProductClickHandlers();
    }
    
    // Create product card HTML
    function createProductCard(product) {
        const discount = product.oldPrice 
            ? Math.floor((1 - product.price / product.oldPrice) * 100)
            : 0;
        
        return `
            <div class="col-lg-3 col-md-4 col-6 mb-4 product-card" 
                 data-id="${product.id}" 
                 data-price="${product.price}" 
                 data-name="${product.title}"
                 data-category="${product.category}">
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <div class="star-rating mb-2">
                            ${generateStarRating(product.rating.rate)}
                            <span class="ms-1">(${product.rating.count})</span>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <p class="price m-0">${formatPrice(product.price)}đ</p>
                                ${product.oldPrice ? `<p class="old-price m-0">${formatPrice(product.oldPrice)}đ</p>` : ''}
                            </div>
                            ${discount > 0 ? `<span class="discount">-${discount}%</span>` : ''}
                        </div>
                    </div>
                    <div class="card-footer bg-transparent">
                        <button class="btn btn-sm btn-outline-primary w-100 add-to-cart">Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Helper: Tạo sao đánh giá
    function generateStarRating(rate) {
        const fullStars = Math.floor(rate);
        const halfStar = rate % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;
        
        return `
            ${'<i class="fas fa-star"></i>'.repeat(fullStars)}
            ${halfStar ? '<i class="fas fa-star-half-alt"></i>' : ''}
            ${'<i class="far fa-star"></i>'.repeat(emptyStars)}
        `;
    }
    
    // Helper: Định dạng giá tiền
    function formatPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    
    // Setup click handlers for products
    function setupProductClickHandlers() {
        $('.product-card').click(function() {
            const productId = $(this).data('id');
            showProductDetail(productId);
        });
        
        $('.add-to-cart').click(function(e) {
            e.stopPropagation();
            const productCard = $(this).closest('.product-card');
            const productId = productCard.data('id');
            const product = phoneAccessories.find(p => p.id == productId);
            
            if (product) {
                addToCart({
                    id: product.id,
                    name: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }
        });
    }
    
    // Show product detail modal
    function showProductDetail(productId) {
        const product = phoneAccessories.find(p => p.id == productId);
        
        if (product) {
            currentProduct = {
                id: product.id,
                name: product.title,
                price: product.price,
                image: product.image,
                quantity: 1
            };
            
            $('#productDetailTitle').text(product.title);
            $('#productDetailContent').html(`
                <div class="row">
                    <div class="col-md-6">
                        <img src="${product.image}" class="img-fluid rounded" alt="${product.title}">
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex justify-content-between align-items-start mb-3">
                            <div class="star-rating">
                                ${generateStarRating(product.rating.rate)}
                                <span class="ms-1">${product.rating.rate} (${product.rating.count} đánh giá)</span>
                            </div>
                            <span class="badge bg-info">${product.category}</span>
                        </div>
                        
                        <div class="price-section mb-4">
                            <h3 class="price text-danger">${formatPrice(product.price)}đ</h3>
                            ${product.oldPrice ? `
                                <div class="d-flex align-items-center">
                                    <span class="old-price me-2">${formatPrice(product.oldPrice)}đ</span>
                                    <span class="discount">Tiết kiệm ${formatPrice(product.oldPrice - product.price)}đ</span>
                                </div>
                            ` : ''}
                        </div>
                        
                        <div class="product-info mb-4">
                            <h5>Thông tin sản phẩm</h5>
                            <p>${product.description}</p>
                        </div>
                        
                        <div class="quantity-selector mb-4">
                            <h5>Số lượng</h5>
                            <div class="d-flex align-items-center">
                                <button class="btn btn-outline-secondary me-3" id="decreaseQty">-</button>
                                <span id="productQty" class="fw-bold">1</span>
                                <button class="btn btn-outline-secondary ms-3" id="increaseQty">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            `);
            
            $('#productDetailModal').modal('show');
            
            // Quantity handlers
            $('#increaseQty').click(function() {
                const qty = parseInt($('#productQty').text());
                $('#productQty').text(qty + 1);
                currentProduct.quantity = qty + 1;
            });
            
            $('#decreaseQty').click(function() {
                const qty = parseInt($('#productQty').text());
                if (qty > 1) {
                    $('#productQty').text(qty - 1);
                    currentProduct.quantity = qty - 1;
                }
            });
        } else {
            $('#productDetailContent').html('<p class="text-danger">Không tìm thấy sản phẩm</p>');
            $('#productDetailModal').modal('show');
        }
    }
    
    // Add product to cart
    function addToCart(product) {
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += product.quantity;
        } else {
            cart.push({...product});
        }
        
        updateCart();
        showToast('Đã thêm sản phẩm vào giỏ hàng');
    }
    
    // Update cart in localStorage and UI
    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }
    
    // Update cart count badge
    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        $('#cartCount').text(count);
    }
    
    // Show cart modal
    function showCart() {
        if (cart.length === 0) {
            $('#cartItems').html('<p class="text-center">Giỏ hàng của bạn đang trống</p>');
            $('#cartTotal').text('0');
        } else {
            const cartItemsHtml = cart.map(item => {
                const product = phoneAccessories.find(p => p.id == item.id) || {};
                return `
                    <div class="cart-item mb-3 pb-3 border-bottom">
                        <div class="row align-items-center">
                            <div class="col-2">
                                <img src="${item.image}" class="img-fluid rounded" alt="${item.name}">
                            </div>
                            <div class="col-5">
                                <h6>${item.name}</h6>
                                <p class="price m-0">${formatPrice(item.price)}đ</p>
                            </div>
                            <div class="col-3">
                                <div class="d-flex align-items-center">
                                    <button class="btn btn-sm btn-outline-secondary decrease-qty" data-id="${item.id}">-</button>
                                    <span class="mx-2">${item.quantity}</span>
                                    <button class="btn btn-sm btn-outline-secondary increase-qty" data-id="${item.id}">+</button>
                                </div>
                            </div>
                            <div class="col-2 text-end">
                                <p class="fw-bold m-0">${formatPrice(item.price * item.quantity)}đ</p>
                                <button class="btn btn-sm btn-danger remove-item" data-id="${item.id}">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            
            $('#cartItems').html(cartItemsHtml);
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            $('#cartTotal').text(formatPrice(total));
            
            // Setup cart item handlers
            $('.decrease-qty').click(function() {
                const id = $(this).data('id');
                const item = cart.find(item => item.id === id);
                if (item.quantity > 1) {
                    item.quantity--;
                    showCart();
                }
            });
            
            $('.increase-qty').click(function() {
                const id = $(this).data('id');
                const item = cart.find(item => item.id === id);
                item.quantity++;
                showCart();
            });
            
            $('.remove-item').click(function() {
                const id = $(this).data('id');
                cart = cart.filter(item => item.id !== id);
                updateCart();
                showCart();
                showToast('Đã xóa sản phẩm khỏi giỏ hàng');
            });
        }
        
        $('#cartModal').modal('show');
    }
    
    // Checkout function
    function checkout() {
        if (cart.length === 0) {
            showToast('Giỏ hàng của bạn đang trống', 'danger');
            return;
        }
        
        // In a real app, you would send the cart data to your backend
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        alert(`Đặt hàng thành công!\n\nSố sản phẩm: ${cart.reduce((sum, item) => sum + item.quantity, 0)}\nTổng cộng: ${formatPrice(total)}đ`);
        
        cart = [];
        updateCart();
        $('#cartModal').modal('hide');
    }
    
    // Filter products by search term
    function filterProducts(searchTerm) {
        const term = searchTerm.toLowerCase().trim();
        if (!term) {
            $('.product-card').show();
            return;
        }
        
        $('.product-card').each(function() {
            const productName = $(this).data('name').toLowerCase();
            const productCategory = $(this).data('category').toLowerCase();
            
            if (productName.includes(term) || productCategory.includes(term)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }
    
    // Filter by category
    function filterByCategory(category) {
        $('.product-card').each(function() {
            if (category === 'all' || $(this).data('category') === category) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }
    
    // Sort products
    function sortProducts(sortBy) {
        const $container = $('#allProducts');
        const $products = $('.product-card').get();
        
        $products.sort(function(a, b) {
            const aPrice = $(a).data('price');
            const bPrice = $(b).data('price');
            const aName = $(a).data('name');
            const bName = $(b).data('name');
            
            switch (sortBy) {
                case 'price-asc':
                    return aPrice - bPrice;
                case 'price-desc':
                    return bPrice - aPrice;
                case 'name-asc':
                    return aName.localeCompare(bName);
                default:
                    return 0;
            }
        });
        
        $container.empty().append($products);
        setupProductClickHandlers();
    }
    
    // Show toast notification
    function showToast(message, type = 'success') {
        const toast = $(`
            <div class="toast align-items-center text-white bg-${type} border-0 position-fixed bottom-0 end-0 m-3" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex">
                    <div class="toast-body">
                        ${message}
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        `);
        
        $('body').append(toast);
        const bsToast = new bootstrap.Toast(toast[0]);
        bsToast.show();
        
        toast.on('hidden.bs.toast', function() {
            $(this).remove();
        });
    }
});