(function() {
      // ---------- MENU DATA ----------
      const categoryConfig = [
        { id: 'all', name: 'All', image: './pictures/all.png', subCategories: ['All Items'] },
        { id: 'bestsellers', name: 'Bestsellers', image: './pictures/bestsellers.png', subCategories: ['Thalis', 'Pizzas', 'Combos'] },
        { id: 'south-indian', name: 'South Indian', image: './pictures/south-indian.png', subCategories: ['Dosa', 'Uttapam', 'Vada', 'Upma'] },
        { id: 'starters', name: 'Starters', image: './pictures/starters.png', subCategories: ['Kabab', 'Tikka', 'Chilli', 'Fries', 'Breads', 'Burgers', 'Tacos'] },
        { id: 'rolls', name: 'Rolls', image: './pictures/rolls.png', subCategories: ['Veg Rolls', 'Paneer Rolls', 'Mushroom Rolls', 'Soya Rolls'] },
        { id: 'main-course', name: 'Main Course', image: './pictures/main-course.png', subCategories: ['Noodles', 'Manchurian', 'Chilli', 'Curries', 'Dal'] },
        { id: 'rice', name: 'Rice & Pulao', image: './pictures/rice.png', subCategories: ['Steamed Rice', 'Jeera Rice', 'Pulao', 'Fried Rice'] },
        { id: 'breads', name: 'Breads', image: './pictures/breads.png', subCategories: ['Roti', 'Naan', 'Paratha', 'Kulcha'] },
        { id: 'beverages', name: 'Beverages', image: './pictures/beverages.png', subCategories: ['Shakes', 'Coffee'] }
      ];

      const menuItems = [
        { id: 'bs2', name: 'Indian Thali', category: 'bestsellers', subCategory: 'Thalis', description: 'Paneer Butter Masala + Dal Makhani + 2 Butter Naan', price: 195, image_url: './pictures/Indian Thali.png', isVeg: true },
        { id: 'bs3', name: 'Super Indian Thali', category: 'bestsellers', subCategory: 'Thalis', description: 'Kadai Paneer + Dal Tadka + Jeera Rice + 2 Naan', price: 230, image_url: './pictures/Super Indian Thali.png', isVeg: true },
        { id: 'bs4', name: 'Maharaja Thali', category: 'bestsellers', subCategory: 'Thalis', description: 'Paneer Lababdar + Dal Makhani + Mixed Veg + Pulao', price: 275, image_url: './pictures/Maharaja Thali.png', isVeg: true },
        { id: 'bs5', name: 'Capsicum Kesariya Thali', category: 'bestsellers', subCategory: 'Thalis', description: '21 Dishes grand thali with sweets', price: 470, image_url: './pictures/Capsicum Kesariya Thali.png', isVeg: true },
        { id: 'bs1', name: 'Choley Bhathoore', category: 'bestsellers', subCategory: 'Thalis', description: '2 Pcs Bhature, Choley, Pickles, Onion', price: 139, image_url: './pictures/choley Bhathoore.png', isVeg: true },
        { id: 'bs6', name: 'Punjabi Platter', category: 'bestsellers', subCategory: 'Thalis', description: 'Complete Punjabi thali with naan & sabzi', price: 280, image_url: './pictures/Punjabi Platter.png', isVeg: true },
        { id: 'bs7', name: 'Jugalbandi Pizza', category: 'bestsellers', subCategory: 'Pizzas', description: 'Half & half pizza with two toppings', price: 195, image_url: './pictures/Jugalbandi Pizza.png', isVeg: true },
        { id: 'bs8', name: 'Cheese Burst Pizza', category: 'bestsellers', subCategory: 'Pizzas', description: 'Loaded with cheese in every bite', price: 220, image_url: './pictures/Cheese Burst Pizza.png', isVeg: true },
        { id: 'bs9', name: 'Chilli Paneer With Rice', category: 'bestsellers', subCategory: 'Combos', description: 'Combo of chilli paneer and fried rice', price: 185, image_url: './pictures/Chilli Paneer With Rice.png', isVeg: true },
        { id: 'si1', name: 'Masala Dosa', category: 'south-indian', subCategory: 'Dosa', description: 'Crispy dosa with spiced potato filling', price: 115, image_url: './pictures/Masala Dosa.png', isVeg: true },
        { id: 'si2', name: 'Plain Rava Dosa', category: 'south-indian', subCategory: 'Dosa', description: 'Crispy semolina dosa', price: 115, image_url: './pictures/Plain Rava Dosa.png', isVeg: true },
        { id: 'si3', name: 'Spring Roll Dosa', category: 'south-indian', subCategory: 'Dosa', description: 'Dosa with spring roll filling', price: 205, image_url: './pictures/Spring Roll Dosa.png', isVeg: true },
        { id: 'si4', name: 'Hot Garlic Dosa', category: 'south-indian', subCategory: 'Dosa', description: 'Spicy garlic flavored dosa', price: 140, image_url: './pictures/Hot Garlic Dosa.png', isVeg: true },
        { id: 'si5', name: 'Rava Paneer Dosa', category: 'south-indian', subCategory: 'Dosa', description: 'Semolina dosa with paneer filling', price: 220, image_url: './pictures/Rava Paneer Dosa.png', isVeg: true },
        { id: 'si6', name: 'Cheese Dosa', category: 'south-indian', subCategory: 'Dosa', description: 'Dosa loaded with cheese', price: 235, image_url: './pictures/Cheese Dosa.png', isVeg: true },
        { id: 'si7', name: 'Plain Uttapam', category: 'south-indian', subCategory: 'Uttapam', description: 'Thick rice pancake', price: 105, image_url: './pictures/Plain Uttapam.png', isVeg: true },
        { id: 'si8', name: 'Onion Uttapam', category: 'south-indian', subCategory: 'Uttapam', description: 'Uttapam topped with onions', price: 115, image_url: './pictures/Onion Uttapam.png', isVeg: true },
        { id: 'si9', name: 'Tomato Uttapam', category: 'south-indian', subCategory: 'Uttapam', description: 'Uttapam topped with tomatoes', price: 115, image_url: './pictures/Tomato Uttapam.png', isVeg: true },
        { id: 'si10', name: 'Mixed Veg Uttapam', category: 'south-indian', subCategory: 'Uttapam', description: 'Uttapam with mixed vegetables', price: 135, image_url: './pictures/Mixed Veg Uttapam.png', isVeg: true },
        { id: 'si11', name: 'Pizza Uttapam', category: 'south-indian', subCategory: 'Uttapam', description: 'Uttapam with pizza toppings', price: 160, image_url: './pictures/Pizza Uttapam.png', isVeg: true },
        { id: 'si12', name: 'Plain Vada (2 Pcs)', category: 'south-indian', subCategory: 'Vada', description: 'Crispy lentil donuts', price: 90, image_url: './pictures/Plain Vada (2 Pcs).png', isVeg: true },
        { id: 'si13', name: 'Masala Vada (2 Pcs)', category: 'south-indian', subCategory: 'Vada', description: 'Spiced lentil donuts', price: 100, image_url: './pictures/Masala Vada (2 Pcs).png', isVeg: true },
        { id: 'si14', name: 'Fried Vada (2 Pcs)', category: 'south-indian', subCategory: 'Vada', description: 'Crispy fried vada', price: 120, image_url: './pictures/Fried Vada (2 Pcs).png', isVeg: true },
        { id: 'si15', name: 'Upma', category: 'south-indian', subCategory: 'Upma', description: 'Semolina porridge with vegetables', price: 100, image_url: './pictures/Upma.png', isVeg: true },
        { id: 'st1', name: 'Seekh Kabab', category: 'starters', subCategory: 'Kabab', description: 'Grilled veg seekh kabab', price: 115, image_url: './pictures/Seekh Kabab.png', isVeg: true },
        { id: 'st2', name: 'Paneer Stick', category: 'starters', subCategory: 'Kabab', description: 'Paneer sticks grilled to perfection', price: 135, image_url: './pictures/Paneer Stick.png', isVeg: true },
        { id: 'st3', name: 'Sweet Chilli Potatoes', category: 'starters', subCategory: 'Chilli', description: 'Crispy potatoes in sweet chilli sauce', price: 135, image_url: './pictures/Sweet Chilli Potatoes.png', isVeg: true },
        { id: 'st4', name: 'Paneer Tikka', category: 'starters', subCategory: 'Tikka', description: 'Marinated paneer cubes grilled', price: 140, image_url: './pictures/Paneer Tikka.png', isVeg: true },
        { id: 'st5', name: 'Soya Sweet Chilli', category: 'starters', subCategory: 'Chilli', description: 'Soya chunks in sweet chilli sauce', price: 150, image_url: './pictures/Soya Sweet Chilli.png', isVeg: true },
        { id: 'st6', name: 'Crispy Baby Corn', category: 'starters', subCategory: 'Chilli', description: 'Crispy fried baby corn', price: 160, image_url: './pictures/Crispy Baby Corn.png', isVeg: true },
        { id: 'st7', name: 'Soya Chilli', category: 'starters', subCategory: 'Chilli', description: 'Soya chunks in spicy chilli sauce', price: 165, image_url: './pictures/Soya Chilli.png', isVeg: true },
        { id: 'st8', name: 'Chilli Baby Corn', category: 'starters', subCategory: 'Chilli', description: 'Baby corn in spicy chilli sauce', price: 175, image_url: './pictures/Chilli Baby Corn.png', isVeg: true },
        { id: 'st9', name: 'Chilli Paneer Dry', category: 'starters', subCategory: 'Chilli', description: 'Paneer tossed in spicy chilli sauce', price: 180, image_url: './pictures/Chilli Paneer Dry.png', isVeg: true },
        { id: 'st10', name: 'French Fries', category: 'starters', subCategory: 'Fries', description: 'Crispy golden fries', price: 105, image_url: './pictures/French Fries.png', isVeg: true },
        { id: 'st11', name: 'Pav Bhaji', category: 'starters', subCategory: 'Breads', description: 'Spicy vegetable mash with pav', price: 105, image_url: './pictures/Pav Bhaji.png', isVeg: true },
        { id: 'st12', name: 'Paneer Pakoda', category: 'starters', subCategory: 'Breads', description: 'Crispy paneer fritters', price: 105, image_url: './pictures/Paneer Pakoda.png', isVeg: true },
        { id: 'st13', name: 'Super Cheese Garlic Bread', category: 'starters', subCategory: 'Breads', description: 'Garlic bread loaded with cheese', price: 99, image_url: './pictures/Super Cheese Garlic Bread.png', isVeg: true },
        { id: 'st14', name: 'Garlic Bread', category: 'starters', subCategory: 'Breads', description: 'Toasted bread with garlic butter', price: 70, image_url: './pictures/Garlic Bread.png', isVeg: true },
        { id: 'st15', name: 'Cheese Burger', category: 'starters', subCategory: 'Burgers', description: 'Veg cheese burger', price: 99, image_url: './pictures/Cheese Burger.png', isVeg: true },
        { id: 'st16', name: 'Cheesy Taco', category: 'starters', subCategory: 'Tacos', description: 'Tacos loaded with cheese', price: 235, image_url: './pictures/Cheesy Taco.png', isVeg: true },
        { id: 'rl1', name: 'Veg Roll', category: 'rolls', subCategory: 'Veg Rolls', description: 'Fresh veg roll with chutney', price: 70, image_url: './pictures/Veg Roll.png', isVeg: true },
        { id: 'rl2', name: 'Mushroom Roll', category: 'rolls', subCategory: 'Mushroom Rolls', description: 'Roll with mushroom filling', price: 95, image_url: './pictures/Mushroom Roll.png', isVeg: true },
        { id: 'rl3', name: 'Cheese Roll', category: 'rolls', subCategory: 'Veg Rolls', description: 'Roll with cheese filling', price: 95, image_url: './pictures/Cheese Roll.png', isVeg: true },
        { id: 'rl4', name: 'Paneer Roll', category: 'rolls', subCategory: 'Paneer Rolls', description: 'Roll with paneer filling', price: 95, image_url: './pictures/Paneer Roll.png', isVeg: true },
        { id: 'rl5', name: 'Chilli Paneer Roll', category: 'rolls', subCategory: 'Paneer Rolls', description: 'Roll with chilli paneer filling', price: 105, image_url: './pictures/Chilli Paneer Roll.png', isVeg: true },
        { id: 'rl6', name: 'Soya Sweet Chilli Roll', category: 'rolls', subCategory: 'Soya Rolls', description: 'Roll with soya sweet chilli filling', price: 119, image_url: './pictures/Soya Sweet Chilli Roll.png', isVeg: true },
        { id: 'mc1', name: 'Paneer Noodles', category: 'main-course', subCategory: 'Noodles', description: 'Noodles with paneer', price: 150, image_url: './pictures/Paneer Noodles.png', isVeg: true },
        { id: 'mc2', name: 'Veg Manchurian', category: 'main-course', subCategory: 'Manchurian', description: 'Vegetable balls in Manchurian sauce', price: 160, image_url: './pictures/Veg Manchurian.png', isVeg: true },
        { id: 'mc3', name: 'Paneer Manchurian', category: 'main-course', subCategory: 'Manchurian', description: 'Paneer balls in Manchurian sauce', price: 170, image_url: './pictures/Paneer Manchurian.png', isVeg: true },
        { id: 'mc4', name: 'Chilli Paneer Gravy', category: 'main-course', subCategory: 'Chilli', description: 'Paneer in spicy chilli gravy', price: 175, image_url: './pictures/Chilli Paneer Gravy.png', isVeg: true },
        { id: 'mc5', name: 'Mushroom Chilli', category: 'main-course', subCategory: 'Chilli', description: 'Mushroom in spicy chilli sauce', price: 180, image_url: './pictures/Mushroom Chilli.png', isVeg: true },
        { id: 'mc6', name: 'Chole', category: 'main-course', subCategory: 'Curries', description: 'Spicy chickpea curry', price: 240, image_url: './pictures/Chole.png', isVeg: true },
        { id: 'mc7', name: 'Dal Makhani', category: 'main-course', subCategory: 'Dal', description: 'Slow cooked black lentils', price: 160, image_url: './pictures/Dal Makhani.png', isVeg: true },
        { id: 'mc8', name: 'Chana Dal Fry', category: 'main-course', subCategory: 'Dal', description: 'Tempered split chickpeas', price: 149, image_url: './pictures/Chana Dal Fry.png', isVeg: true },
        { id: 'mc9', name: 'Paneer Butter Masala', category: 'main-course', subCategory: 'Curries', description: 'Paneer in rich butter gravy', price: 195, image_url: './pictures/Paneer Butter Masala.png', isVeg: true },
        { id: 'mc10', name: 'Kadai Paneer', category: 'main-course', subCategory: 'Curries', description: 'Paneer with bell peppers in kadai gravy', price: 205, image_url: './pictures/Kadai Paneer.png', isVeg: true },
        { id: 'mc11', name: 'Mix Veg Curry', category: 'main-course', subCategory: 'Curries', description: 'Mixed vegetables in gravy', price: 320, image_url: './pictures/Mix Veg Curry.png', isVeg: true },
        { id: 'ri1', name: 'Steamed Rice', category: 'rice', subCategory: 'Steamed Rice', description: 'Plain steamed rice', price: 105, image_url: './pictures/Steamed Rice.png', isVeg: true },
        { id: 'ri2', name: 'Jeera Rice', category: 'rice', subCategory: 'Jeera Rice', description: 'Rice with cumin seeds', price: 120, image_url: './pictures/Jeera Rice.png', isVeg: true },
        { id: 'ri3', name: 'Curd Rice', category: 'rice', subCategory: 'Steamed Rice', description: 'Rice with yogurt and tempering', price: 115, image_url: './pictures/Curd Rice.png', isVeg: true },
        { id: 'ri4', name: 'Veg Pulao', category: 'rice', subCategory: 'Pulao', description: 'Pulao with vegetables', price: 140, image_url: './pictures/Veg Pulao.png', isVeg: true },
        { id: 'ri5', name: 'Veg Fried Rice', category: 'rice', subCategory: 'Fried Rice', description: 'Fried rice with vegetables', price: 230, image_url: './pictures/Veg Fried Rice.png', isVeg: true },
        { id: 'ri6', name: 'Paneer Fried Rice', category: 'rice', subCategory: 'Fried Rice', description: 'Fried rice with paneer', price: 269, image_url: './pictures/Paneer Fried Rice.png', isVeg: true },
        { id: 'br1', name: 'Roti (Plain)', category: 'breads', subCategory: 'Roti', description: 'Whole wheat flatbread', price: 20, image_url: './pictures/Roti (Plain).png', isVeg: true },
        { id: 'br2', name: 'Tandoori Roti', category: 'breads', subCategory: 'Roti', description: 'Tandoor baked whole wheat bread', price: 25, image_url: './pictures/Tandoori Roti.png', isVeg: true },
        { id: 'br3', name: 'Butter Roti', category: 'breads', subCategory: 'Roti', description: 'Roti with butter', price: 25, image_url: './pictures/Butter Roti.png', isVeg: true },
        { id: 'br4', name: 'Ghee Roti', category: 'breads', subCategory: 'Roti', description: 'Roti with ghee', price: 30, image_url: './pictures/Ghee Roti.png', isVeg: true },
        { id: 'br5', name: 'Plain Paratha', category: 'breads', subCategory: 'Paratha', description: 'Plain layered flatbread', price: 35, image_url: './pictures/Plain Paratha.png', isVeg: true },
        { id: 'br6', name: 'Butter Naan', category: 'breads', subCategory: 'Naan', description: 'Naan with butter', price: 40, image_url: './pictures/Butter Naan.png', isVeg: true },
        { id: 'br7', name: 'Lachha Paratha', category: 'breads', subCategory: 'Paratha', description: 'Layered crispy paratha', price: 40, image_url: './pictures/Lachha Paratha.png', isVeg: true },
        { id: 'br8', name: 'Methi Paratha', category: 'breads', subCategory: 'Paratha', description: 'Paratha with fenugreek', price: 45, image_url: './pictures/Methi Paratha.png', isVeg: true },
        { id: 'br9', name: 'Garlic Naan', category: 'breads', subCategory: 'Naan', description: 'Naan with garlic', price: 50, image_url: './pictures/Garlic Naan.png', isVeg: true },
        { id: 'br10', name: 'Punjabi Kulcha', category: 'breads', subCategory: 'Kulcha', description: 'Stuffed kulcha', price: 55, image_url: './pictures/Punjabi Kulcha.png', isVeg: true },
        { id: 'br11', name: 'Stuffed Naan', category: 'breads', subCategory: 'Naan', description: 'Naan with stuffing', price: 70, image_url: './pictures/Stuffed Naan.png', isVeg: true },
        { id: 'be1', name: 'Watermelon Shake', category: 'beverages', subCategory: 'Shakes', description: 'Refreshing watermelon shake', price: 190, image_url: './pictures/Watermelon Shake.png', isVeg: true },
        { id: 'be2', name: 'Pan Shake', category: 'beverages', subCategory: 'Shakes', description: 'Paan flavored shake', price: 190, image_url: './pictures/Pan Shake.png', isVeg: true },
        { id: 'be3', name: 'Banarasi Kulfi Shake', category: 'beverages', subCategory: 'Shakes', description: 'Kulfi flavored shake', price: 190, image_url: './pictures/Banarasi Kulfi Shake.png', isVeg: true },
        { id: 'be4', name: 'Kit Kat Shake', category: 'beverages', subCategory: 'Shakes', description: 'Kit Kat flavored shake', price: 190, image_url: './pictures/Kit Kat Shake.png', isVeg: true },
        { id: 'be5', name: 'Cold Coffee With Ice Cream', category: 'beverages', subCategory: 'Coffee', description: 'Cold coffee with vanilla ice cream', price: 190, image_url: './pictures/Cold Coffee With Ice Cream.png', isVeg: true }
      ];

      // ---------- STATE ----------
      let cart = [];
      let currentMainCategory = 'all';
      let currentSubCategory = 'All Items';
      let currentUser = null;
      let generatedOtp = null;
      let currentSlide = 0;
      let autoSlideInterval;
      const totalSlides = 3;
      let dailyOrderCounter = 1;
      let lastOrderDate = '';
      let appliedCoupon = null;

      const coupons = {
        'WELCOME50': { discount: 50, minOrder: 199, type: 'flat' },
        'SAVE20': { discount: 20, minOrder: 99, type: 'percent', maxDiscount: 60 }
      };

      // ---------- HELPERS ----------
      function getTodayDateString() {
        const now = new Date();
        return `${String(now.getDate()).padStart(2,'0')}-${String(now.getMonth()+1).padStart(2,'0')}-${now.getFullYear()}`;
      }
      function formatDateDisplay() {
        const now = new Date();
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return `${String(now.getDate()).padStart(2,'0')} ${months[now.getMonth()]} ${now.getFullYear()}`;
      }
      function formatTimeDisplay() {
        const now = new Date();
        let h = now.getHours(), m = String(now.getMinutes()).padStart(2,'0');
        const ampm = h>=12?'PM':'AM';
        h = h%12||12;
        return `${h}:${m} ${ampm}`;
      }
      function checkAndResetDailyCounter() {
        const today = getTodayDateString();
        if (lastOrderDate !== today) { dailyOrderCounter = 1; lastOrderDate = today; saveToStorage(); }
      }
      function getItemById(id) { return menuItems.find(i => i.id === id); }
      function getCartTotalQuantity() { return cart.reduce((s, e) => s + e.quantity, 0); }

      function calculateBill() {
        let subtotal = cart.reduce((s, e) => s + (e.price * e.quantity), 0);
        let tax = Math.round(subtotal * 0.05);
        let couponDiscount = 0;
        if (appliedCoupon && coupons[appliedCoupon]) {
          const c = coupons[appliedCoupon];
          if (subtotal >= c.minOrder) {
            if (c.type === 'flat') couponDiscount = c.discount;
            else if (c.type === 'percent') couponDiscount = Math.min(Math.round(subtotal * c.discount / 100), c.maxDiscount || Infinity);
          } else { appliedCoupon = null; }
        }
        let grandTotal = subtotal + tax - couponDiscount;
        if (grandTotal < 0) grandTotal = 0;
        return { subtotal, tax, couponDiscount, grandTotal };
      }

      function getEstimatedPrepTime() {
        if (cart.length === 0) return '15-20 mins';
        return '15-20 mins';
      }

      // ---------- STORAGE ----------
      function saveToStorage() {
        localStorage.setItem('capsicum_cart', JSON.stringify(cart));
        localStorage.setItem('capsicum_user', JSON.stringify(currentUser));
        localStorage.setItem('capsicum_order_counter', dailyOrderCounter);
        localStorage.setItem('capsicum_last_order_date', lastOrderDate);
      }
      function loadFromStorage() {
        const sc = localStorage.getItem('capsicum_cart');
        if (sc) try { cart = JSON.parse(sc); } catch(e) {}
        const su = localStorage.getItem('capsicum_user');
        if (su) try { currentUser = JSON.parse(su); } catch(e) {}
        const so = localStorage.getItem('capsicum_order_counter');
        if (so) dailyOrderCounter = parseInt(so) || 1;
        const sd = localStorage.getItem('capsicum_last_order_date');
        if (sd) lastOrderDate = sd;
        else lastOrderDate = getTodayDateString();
        checkAndResetDailyCounter();
      }

      // ---------- DOM REFS ----------
      const productGrid = document.getElementById('productGrid');
      const categoryCircles = document.getElementById('categoryCircles');
      const subCategoryPanel = document.getElementById('subCategoryPanel');
      const subCategoryChips = document.getElementById('subCategoryChips');
      const currentCategoryTitle = document.getElementById('currentCategoryTitle');
      const itemCount = document.getElementById('itemCount');
      const searchInput = document.getElementById('searchInput');
      const searchResults = document.getElementById('searchResults');
      const overlay = document.getElementById('overlay');
      const cartBadgeFooter = document.getElementById('cartBadgeFooter');
      const heroSlider = document.getElementById('heroSlider');
      const prevSlideBtn = document.getElementById('prevSlide');
      const nextSlideBtn = document.getElementById('nextSlide');
      const cartPopup = document.getElementById('cartPopup');
      const cartPopupItems = document.getElementById('cartPopupItems');
      const popupOrderNowBtn = document.getElementById('popupOrderNowBtn');
      const closeCartPopupBtn = document.getElementById('closeCartPopupBtn');
      const cartUserName = document.getElementById('cartUserName');
      const cartUserPhone = document.getElementById('cartUserPhone');
      const cartLoginPromptBtn = document.getElementById('cartLoginPromptBtn');
      const relatedItemsContainer = document.getElementById('relatedItemsContainer');
      const appliedCouponDisplay = document.getElementById('appliedCouponDisplay');
      const appliedCouponName = document.getElementById('appliedCouponName');
      const removeCouponBtn = document.getElementById('removeCouponBtn');
      const couponDiscountRow = document.getElementById('couponDiscountRow');
      const estimatedPrepTime = document.getElementById('estimatedPrepTime');
      const billSubtotal = document.getElementById('billSubtotal');
      const billTax = document.getElementById('billTax');
      const billCouponDiscount = document.getElementById('billCouponDiscount');
      const billGrandTotal = document.getElementById('billGrandTotal');
      const footerCartBtn = document.getElementById('footerCartBtn');
      const footerAccountBtn = document.getElementById('footerAccountBtn');
      const footerAccountLabel = document.getElementById('footerAccountLabel');
      const loginModal = document.getElementById('loginModal');
      const closeLoginModal = document.getElementById('closeLoginModal');
      const mobileScreen = document.getElementById('mobileScreen');
      const otpScreen = document.getElementById('otpScreen');
      const profileScreen = document.getElementById('profileScreen');
      const userNameInput = document.getElementById('userNameInput');
      const mobileNumber = document.getElementById('mobileNumber');
      const sendOtpBtn = document.getElementById('sendOtpBtn');
      const guestLoginBtn = document.getElementById('guestLoginBtn');
      const otpInput = document.getElementById('otpInput');
      const verifyOtpBtn = document.getElementById('verifyOtpBtn');
      const resendOtpBtn = document.getElementById('resendOtpBtn');
      const displayMobile = document.getElementById('displayMobile');
      const logoutBtn = document.getElementById('logoutBtn');
      const orderConfirmModal = document.getElementById('orderConfirmModal');
      const closeOrderConfirmModal = document.getElementById('closeOrderConfirmModal');
      const orderNumberDisplay = document.getElementById('orderNumberDisplay');
      const orderDateDisplay = document.getElementById('orderDateDisplay');
      const orderTimeDisplay = document.getElementById('orderTimeDisplay');
      const confirmUserName = document.getElementById('confirmUserName');
      const confirmUserPhone = document.getElementById('confirmUserPhone');
      const confirmOrderItems = document.getElementById('confirmOrderItems');
      const confirmTotalAmount = document.getElementById('confirmTotalAmount');
      const preparationTime = document.getElementById('preparationTime');

      // ---------- RENDER CATEGORIES ----------
      function renderCategoryCircles() {
        categoryCircles.innerHTML = categoryConfig.map(cat => `
          <div class="category-wrapper ${currentMainCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">
            <div class="category-circle" style="background-image: url('${cat.image}');">
              <div class="category-circle-content"></i></div>
            </div>
            <span class="category-label">${cat.name}</span>
          </div>
        `).join('');
        document.querySelectorAll('.category-wrapper').forEach(w => {
          w.addEventListener('click', () => setMainCategory(w.dataset.category));
        });
      }

      function setMainCategory(catId) {
        currentMainCategory = catId;
        const category = categoryConfig.find(c => c.id === catId);
        currentSubCategory = category.subCategories[0];
        document.querySelectorAll('.category-wrapper').forEach(w => {
          w.classList.toggle('active', w.dataset.category === catId);
        });
        updateSubCategoryPanel();
        renderFilteredProducts();
      }

      function updateSubCategoryPanel() {
        const category = categoryConfig.find(c => c.id === currentMainCategory);
        if (!category) return;
        if (category.subCategories.length > 1 || currentMainCategory !== 'all') {
          subCategoryPanel.classList.add('open');
        } else {
          subCategoryPanel.classList.remove('open');
          subCategoryChips.innerHTML = '';
          return;
        }
        subCategoryChips.innerHTML = category.subCategories.map(sub => `
          <div class="sub-category-wrapper ${currentSubCategory === sub ? 'active' : ''}" data-sub="${sub}">
            <div class="sub-category-circle" style="background-image: url('${category.image}');">
              <div class="sub-category-circle-content"></i></div>
            </div>
            <span class="sub-category-label">${sub}</span>
          </div>
        `).join('');
        document.querySelectorAll('.sub-category-wrapper').forEach(w => {
          w.addEventListener('click', () => {
            currentSubCategory = w.dataset.sub;
            updateSubCategoryPanel();
            renderFilteredProducts();
          });
        });
      }

      // ---------- RENDER PRODUCTS ----------
      function getFilteredItems() {
        if (currentMainCategory === 'all') return menuItems;
        if (currentSubCategory === 'All Items' || currentSubCategory === categoryConfig.find(c => c.id === currentMainCategory)?.subCategories[0]) {
          return menuItems.filter(item => item.category === currentMainCategory);
        }
        return menuItems.filter(item => item.category === currentMainCategory && item.subCategory === currentSubCategory);
      }

      function renderFilteredProducts() {
        const filtered = getFilteredItems();
        const category = categoryConfig.find(c => c.id === currentMainCategory);
        currentCategoryTitle.textContent = currentMainCategory === 'all' ? 'All Items' : (category?.name || '') + ' - ' + currentSubCategory;
        itemCount.textContent = `${filtered.length} items`;

        productGrid.innerHTML = filtered.map((item, index) => {
          const vegHtml = item.isVeg ? '<span class="veg-indicator"><span class="veg-dot"></span></span>' : '<span class="non-veg-indicator"><span class="non-veg-dot"></span></span>';
          const delayClass = `delay-${(index % 6) + 1}`;
          return `
            <div class="product-card scroll-animate ${delayClass}" data-item-id="${item.id}">
              <div class="product-image-container">
                <img src="${item.image_url}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'">
                <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2 shadow-sm">${vegHtml}<span class="text-xs font-bold text-gray-700">${item.isVeg ? 'VEG' : 'NON-VEG'}</span></div>
              </div>
              <div class="p-5">
                <h3 class="font-bold text-lg mb-2 text-gray-800 leading-tight">${item.name}</h3>
                <p class="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">${item.description}</p>
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-baseline gap-1">
                    <span class="font-bold text-2xl text-[#059669]">₹${item.price}</span>
                  </div>
                </div>
                <div id="action-${item.id}">
                  ${getCartActionHtml(item.id, 'regular', item.price)}
                </div>
              </div>
            </div>
          `;
        }).join('');

        document.querySelectorAll('[id^="action-"]').forEach(div => {
          const itemId = div.id.replace('action-', '');
          const item = getItemById(itemId);
          if (item) attachCartEvents(itemId, 'regular', item.price);
        });
        observeScrollElements();
      }

      function getCartActionHtml(itemId, size, price) {
        const entry = cart.find(c => c.id === itemId && c.size === size);
        if (entry) {
          return `<div class="flex items-center justify-between bg-green-50 rounded-full px-2 py-1.5 border border-green-100">
            <button class="quantity-btn decrease-btn" data-id="${itemId}" data-size="${size}">−</button>
            <span class="font-bold text-lg text-gray-800 w-8 text-center">${entry.quantity}</span>
            <button class="quantity-btn increase-btn" data-id="${itemId}" data-size="${size}">+</button>
          </div>`;
        }
        return `<button class="add-to-cart-btn w-full text-white py-3 rounded-xl font-bold shadow-md shadow-green-500/20 flex items-center justify-center gap-2" data-id="${itemId}" data-size="${size}" data-price="${price}"><i class="fas fa-plus text-sm"></i> ADD</button>`;
      }

      function attachCartEvents(itemId, size, price) {
        const addBtn = document.querySelector(`.add-to-cart-btn[data-id="${itemId}"][data-size="${size}"]`);
        if (addBtn) addBtn.onclick = () => addToCart(itemId, size, price);
        const incBtn = document.querySelector(`.increase-btn[data-id="${itemId}"][data-size="${size}"]`);
        const decBtn = document.querySelector(`.decrease-btn[data-id="${itemId}"][data-size="${size}"]`);
        if (incBtn) incBtn.onclick = () => updateQuantity(itemId, size, 1);
        if (decBtn) decBtn.onclick = () => updateQuantity(itemId, size, -1);
      }

      // ---------- CART FUNCTIONS ----------
      function addToCart(itemId, size, price) {
        const existing = cart.find(c => c.id === itemId && c.size === size);
        if (existing) existing.quantity += 1;
        else cart.push({ id: itemId, size, price, quantity: 1 });
        updateCartUI();
        const item = getItemById(itemId);
        showToast(`${item.name} added to cart!`);
      }

      function updateQuantity(itemId, size, delta) {
        const entry = cart.find(c => c.id === itemId && c.size === size);
        if (!entry) return;
        entry.quantity += delta;
        if (entry.quantity <= 0) cart = cart.filter(c => !(c.id === itemId && c.size === size));
        updateCartUI();
      }

      function updateCartUI() {
        const totalQty = getCartTotalQuantity();
        cartBadgeFooter.textContent = totalQty;
        cartBadgeFooter.style.display = totalQty > 0 ? 'flex' : 'none';
        renderCartPopupItems();
        renderRelatedItems();
        updateBillSummary();
        updateUserSection();
        updatePrepTime();
        saveToStorage();
        renderFilteredProducts();
      }

      function updateUserSection() {
        if (currentUser) {
          cartUserName.textContent = currentUser.name || 'User';
          cartUserPhone.textContent = currentUser.mobile === 'guest' ? 'Guest User' : `+91-${currentUser.mobile}`;
          cartLoginPromptBtn.classList.add('hidden');
        } else {
          cartUserName.textContent = 'Guest User';
          cartUserPhone.textContent = 'Login to add contact details';
          cartLoginPromptBtn.classList.remove('hidden');
        }
      }

      function updatePrepTime() { estimatedPrepTime.textContent = getEstimatedPrepTime(); }

      function updateBillSummary() {
        const bill = calculateBill();
        billSubtotal.textContent = `₹${bill.subtotal}`;
        billTax.textContent = `₹${bill.tax}`;
        if (appliedCoupon && bill.couponDiscount > 0) {
          couponDiscountRow.classList.remove('hidden');
          billCouponDiscount.textContent = `-₹${bill.couponDiscount}`;
        } else {
          couponDiscountRow.classList.add('hidden');
        }
        billGrandTotal.textContent = `₹${bill.grandTotal}`;
        if (appliedCoupon) {
          appliedCouponDisplay.classList.remove('hidden');
          appliedCouponName.textContent = appliedCoupon;
        } else {
          appliedCouponDisplay.classList.add('hidden');
        }
      }

      function renderCartPopupItems() {
        if (!cartPopupItems) return;
        if (cart.length === 0) {
          cartPopupItems.innerHTML = '<div class="text-center text-gray-400 py-8 flex flex-col items-center"><i class="fas fa-shopping-basket text-4xl mb-3 text-gray-300"></i><p>Your cart is empty</p></div>';
          return;
        }
        cartPopupItems.innerHTML = cart.map(entry => {
          const item = getItemById(entry.id);
          return `<div class="flex justify-between items-center bg-gray-50 rounded-xl p-3 border border-gray-100">
            <div class="flex-1 pr-2"><p class="font-semibold text-sm text-gray-800 line-clamp-1">${item?.name || 'Item'}</p><p class="text-xs text-gray-500 mt-1">₹${entry.price} × ${entry.quantity}</p></div>
            <div class="flex items-center gap-2 bg-white rounded-full px-1 py-1 shadow-sm border border-gray-200">
              <button class="quantity-btn w-8 h-8 text-sm" data-id="${entry.id}" data-size="${entry.size}" data-action="decrease">−</button>
              <span class="font-bold text-sm w-6 text-center">${entry.quantity}</span>
              <button class="quantity-btn w-8 h-8 text-sm" data-id="${entry.id}" data-size="${entry.size}" data-action="increase">+</button>
            </div>
          </div>`;
        }).join('');
        document.querySelectorAll('#cartPopupItems .quantity-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            if (btn.dataset.action === 'increase') updateQuantity(btn.dataset.id, btn.dataset.size, 1);
            else updateQuantity(btn.dataset.id, btn.dataset.size, -1);
          });
        });
      }

      function renderRelatedItems() {
        if (!relatedItemsContainer) return;
        const cartCategories = [...new Set(cart.map(e => getItemById(e.id)?.category).filter(Boolean))];
        let related = menuItems.filter(i => !cart.some(c => c.id === i.id) && cartCategories.includes(i.category));
        if (related.length === 0) related = menuItems.filter(i => !cart.some(c => c.id === i.id)).slice(0, 4);
        else related = related.slice(0, 4);
        
        relatedItemsContainer.innerHTML = related.map(item => `
          <div class="related-item-card flex-shrink-0 w-36 p-3 cursor-pointer" data-id="${item.id}">
            <img src="${item.image_url}" class="w-full h-24 object-cover rounded-xl mb-2" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop'">
            <p class="text-xs font-bold text-gray-800 line-clamp-1 mb-1">${item.name}</p>
            <p class="text-xs text-[#059669] font-bold">₹${item.price}</p>
            <button class="w-full bg-green-50 text-[#059669] text-xs font-bold py-1.5 rounded-lg mt-2 hover:bg-[#059669] hover:text-white transition add-related-btn" data-id="${item.id}">+ Add</button>
          </div>
        `).join('');
        document.querySelectorAll('.add-related-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const item = getItemById(btn.dataset.id);
            if (item) { addToCart(item.id, 'regular', item.price); }
          });
        });
      }

      function showToast(msg) {
        const existing = document.querySelector('.toast-notification');
        if (existing) existing.remove();
        
        const t = document.createElement('div');
        t.className = 'toast-notification';
        t.textContent = msg;
        document.body.appendChild(t);
        setTimeout(() => {
          t.style.opacity = '0';
          t.style.transform = 'translateX(-50%) translateY(20px)';
          setTimeout(() => t.remove(), 400);
        }, 2500);
      }

      // ---------- HERO SLIDER ----------
      function updateSlider() {
        heroSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
        document.querySelectorAll('.hero-dot').forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
      }
      function nextSlide() { currentSlide = (currentSlide + 1) % totalSlides; updateSlider(); }
      function prevSlide() { currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; updateSlider(); }
      function resetAutoSlide() { clearInterval(autoSlideInterval); autoSlideInterval = setInterval(nextSlide, 6000); }
      prevSlideBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });
      nextSlideBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
      document.querySelectorAll('.hero-dot').forEach(dot => {
        dot.addEventListener('click', () => { currentSlide = parseInt(dot.dataset.index); updateSlider(); resetAutoSlide(); });
      });

      // ---------- SEARCH ----------
      function performSearch(query) {
        if (!query.trim()) { searchResults.classList.remove('show'); return; }
        const q = query.toLowerCase();
        const results = menuItems.filter(item => item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q) || item.category.toLowerCase().includes(q) || item.subCategory.toLowerCase().includes(q));
        if (results.length === 0) { searchResults.innerHTML = '<div class="p-6 text-center text-gray-500"><i class="fas fa-search mb-2 text-2xl text-gray-300"></i><p>No items found</p></div>'; }
        else {
          searchResults.innerHTML = results.map(item => `
            <div class="search-result-item" data-id="${item.id}">
              <img src="${item.image_url}" class="w-14 h-14 rounded-xl object-cover shadow-sm" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop'">
              <div class="flex-1"><p class="font-semibold text-gray-800 text-sm">${item.name}</p><p class="text-xs text-gray-500 mt-0.5">₹${item.price} • ${item.subCategory}</p></div>
              <i class="fas fa-chevron-right text-gray-300 text-xs"></i>
            </div>
          `).join('');
          document.querySelectorAll('.search-result-item').forEach(el => {
            el.addEventListener('click', () => {
              const item = getItemById(el.dataset.id);
              if (item) { 
                setMainCategory(item.category); 
                currentSubCategory = item.subCategory; 
                updateSubCategoryPanel(); 
                renderFilteredProducts(); 
                searchResults.classList.remove('show'); 
                searchInput.value = ''; 
                document.getElementById('productGrid').scrollIntoView({behavior: 'smooth', block: 'start'});
              }
            });
          });
        }
        searchResults.classList.add('show');
      }
      searchInput.addEventListener('input', (e) => performSearch(e.target.value));
      searchInput.addEventListener('focus', () => { if (searchInput.value.trim()) performSearch(searchInput.value); });
      document.addEventListener('click', (e) => { if (!e.target.closest('.search-container')) searchResults.classList.remove('show'); });

      // ---------- AUTH ----------
      function showLoginModal() { 
        loginModal.classList.remove('hidden'); 
        mobileScreen.classList.remove('hidden'); 
        otpScreen.classList.add('hidden'); 
        profileScreen.classList.add('hidden'); 
      }
      function hideLoginModal() { loginModal.classList.add('hidden'); }
      function updateFooterAccountLabel() { footerAccountLabel.textContent = currentUser ? 'Profile' : 'Login'; }
      function generateOTP() { return Math.floor(100000 + Math.random() * 900000).toString(); }

      footerAccountBtn.addEventListener('click', () => {
        if (currentUser) {
          loginModal.classList.remove('hidden');
          mobileScreen.classList.add('hidden'); 
          otpScreen.classList.add('hidden'); 
          profileScreen.classList.remove('hidden');
          document.getElementById('profileName').textContent = currentUser?.name || 'User';
          document.getElementById('profileMobile').textContent = currentUser?.mobile === 'guest' ? 'Guest User' : `+91-${currentUser?.mobile || 'XXXXXXXXXX'}`;
          document.getElementById('profileInitial').textContent = currentUser?.name?.[0]?.toUpperCase() || 'U';
        } else {
          showLoginModal();
        }
      });
      closeLoginModal.addEventListener('click', hideLoginModal);

      sendOtpBtn.addEventListener('click', () => {
        const name = userNameInput.value.trim();
        const mobile = mobileNumber.value.trim();
        if (!name) { showToast('Please enter your name'); return; }
        if (mobile.length !== 10 || !/^\d+$/.test(mobile)) { showToast('Enter valid 10-digit number'); return; }
        generatedOtp = generateOTP();
        displayMobile.textContent = `+91-${mobile}`;
        sessionStorage.setItem('tempUserName', name);
        mobileScreen.classList.add('hidden'); 
        otpScreen.classList.remove('hidden');
        showToast(`OTP sent: ${generatedOtp}`);
      });

      verifyOtpBtn.addEventListener('click', () => {
        if (otpInput.value.trim() === generatedOtp) {
          const name = sessionStorage.getItem('tempUserName') || 'User';
          const mobile = mobileNumber.value.trim();
          currentUser = { name: name, mobile: mobile, isGuest: false };
          sessionStorage.removeItem('tempUserName');
          saveToStorage(); 
          updateFooterAccountLabel(); 
          hideLoginModal(); 
          showToast(`Welcome ${name}!`);
        } else {
          showToast('Invalid OTP');
        }
      });

      resendOtpBtn.addEventListener('click', () => { 
        generatedOtp = generateOTP(); 
        showToast(`New OTP: ${generatedOtp}`); 
      });

      guestLoginBtn.addEventListener('click', () => {
        currentUser = { name: 'Guest', mobile: 'guest', isGuest: true };
        saveToStorage(); 
        updateFooterAccountLabel(); 
        hideLoginModal(); 
        showToast('Continuing as Guest');
      });

      logoutBtn.addEventListener('click', () => { 
        currentUser = null; 
        saveToStorage(); 
        updateFooterAccountLabel(); 
        hideLoginModal(); 
        showToast('Logged out successfully'); 
      });

      // ---------- CART POPUP ----------
      function openCartPopup() {
        if (cart.length === 0) { showToast('Your cart is empty'); return; }
        updateUserSection(); 
        renderCartPopupItems(); 
        renderRelatedItems(); 
        updateBillSummary(); 
        updatePrepTime();
        cartPopup.classList.add('show'); 
        overlay.classList.add('show');
      }
      function closeCartPopup() {
        cartPopup.classList.remove('show'); 
        overlay.classList.remove('show');
      }
      footerCartBtn.addEventListener('click', openCartPopup);
      closeCartPopupBtn.addEventListener('click', closeCartPopup);
      overlay.addEventListener('click', closeCartPopup);
      cartLoginPromptBtn.addEventListener('click', () => { closeCartPopup(); showLoginModal(); });
      
      // ---------- COUPONS ----------
      document.getElementById('couponList').addEventListener('click', (e) => {
        const card = e.target.closest('.coupon-card');
        if (!card || appliedCoupon) return;
        const code = card.dataset.coupon;
        const subtotal = cart.reduce((s, e) => s + (e.price * e.quantity), 0);
        if (subtotal < parseInt(card.dataset.min)) { 
          showToast(`Min order ₹${card.dataset.min} required`); 
          return; 
        }
        appliedCoupon = code;
        document.querySelectorAll('.coupon-card').forEach(c => c.classList.add('opacity-50'));
        card.classList.remove('opacity-50'); 
        card.classList.add('coupon-applied');
        updateCartUI(); 
        showToast(`Coupon ${code} applied!`);
      });
      removeCouponBtn.addEventListener('click', () => {
        appliedCoupon = null;
        document.querySelectorAll('.coupon-card').forEach(c => { c.classList.remove('opacity-50', 'coupon-applied'); });
        updateCartUI(); 
        showToast('Coupon removed');
      });

      // ---------- PLACE ORDER ----------
      popupOrderNowBtn.addEventListener('click', () => {
        if (cart.length === 0) return;
        if (!currentUser) { showLoginModal(); return; }
        checkAndResetDailyCounter();
        const bill = calculateBill();
        const orderNum = `#CSM${String(dailyOrderCounter).padStart(3, '0')}`;
        dailyOrderCounter++; 
        lastOrderDate = getTodayDateString();
        orderNumberDisplay.textContent = orderNum;
        orderDateDisplay.textContent = formatDateDisplay();
        orderTimeDisplay.textContent = formatTimeDisplay();
        confirmUserName.textContent = currentUser.name || 'User';
        confirmUserPhone.textContent = currentUser.mobile === 'guest' ? 'Guest User' : `+91-${currentUser.mobile}`;
        confirmOrderItems.innerHTML = cart.map(entry => {
          const item = getItemById(entry.id);
          return `<div class="flex justify-between text-gray-700"><span>${item?.name || 'Item'} ×${entry.quantity}</span><span class="font-semibold">₹${entry.price * entry.quantity}</span></div>`;
        }).join('');
        confirmTotalAmount.textContent = `₹${bill.grandTotal}`;
        preparationTime.textContent = getEstimatedPrepTime();
        orderConfirmModal.classList.remove('hidden');
        closeCartPopup();
        cart = []; 
        appliedCoupon = null; 
        updateCartUI(); 
        saveToStorage();
      });
      closeOrderConfirmModal.addEventListener('click', () => orderConfirmModal.classList.add('hidden'));

      // ---------- SCROLL ANIMATION ----------
      function observeScrollElements() {
        const elements = document.querySelectorAll('.scroll-animate:not(.visible)');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        elements.forEach(el => observer.observe(el));
      }

      // ---------- INIT ----------
      loadFromStorage();
      updateFooterAccountLabel();
      renderCategoryCircles();
      updateSubCategoryPanel();
      renderFilteredProducts();
      updateCartUI();
      cartBadgeFooter.style.display = getCartTotalQuantity() > 0 ? 'flex' : 'none';
      updateSlider();
      autoSlideInterval = setInterval(nextSlide, 6000);
      setTimeout(observeScrollElements, 300);
    })();