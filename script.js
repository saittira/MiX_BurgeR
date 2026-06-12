// Полная база данных товаров с фотографии меню
const productsData = [
    // --- ШАУРМА ---
    { id: 'sh1', category: 'shaurma', name_ru: 'Шаурма классик говядина', name_kg: 'Шаурма классик уй эти', price: 200 },
    { id: 'sh2', category: 'shaurma', name_ru: 'Шаурма куриная', name_kg: 'Шаурма тоок эти', price: 200 },
    { id: 'sh3', category: 'shaurma', name_ru: 'Шаурма запечённая (говядина)', name_kg: 'Тандыр шаурма (уй эти)', price: 220 },
    { id: 'sh4', category: 'shaurma', name_ru: 'Шаурма запечённая (курица)', name_kg: 'Тандыр шаурма (тоок эти)', price: 220 },
    { id: 'sh5', category: 'shaurma', name_ru: 'Шаурма с сыром (говядина)', name_kg: 'Сыр менен шаурма (уй эти)', price: 260 },
    { id: 'sh6', category: 'shaurma', name_ru: 'Шаурма с сыром (курица)', name_kg: 'Сыр менен шаурма (тоок эти)', price: 260 },
    { id: 'sh7', category: 'shaurma', name_ru: 'Шаурма жареная', name_kg: 'Куурулган шаурма', price: 260 },
    { id: 'sh8', category: 'shaurma', name_ru: 'Двойная шаурма', name_kg: 'Кош шаурма', price: 300 },
    { id: 'sh9', category: 'shaurma', name_ru: 'Мини шаурма говядина', name_kg: 'Мини шаурма уй эти', price: 180 },
    { id: 'sh10', category: 'shaurma', name_ru: 'Мини шаурма куриная', name_kg: 'Мини шаурма тоок эти', price: 180 },
    
    // --- ПИТЕ ---
    { id: 'pt1', category: 'pite', name_ru: 'Пите классик', name_kg: 'Классик пите', price: 220 },
    { id: 'pt2', category: 'pite', name_ru: 'Пите острый', name_kg: 'Ачуу пите', price: 240 },
    { id: 'pt3', category: 'pite', name_ru: 'Пите сырный', name_kg: 'Сырдуу пите', price: 260 },
    
    // --- БУРГЕРЫ ---
    { id: 'bg1', category: 'burgers', name_ru: 'Бургер классик', name_kg: 'Классик бургер', price: 200 },
    { id: 'bg2', category: 'burgers', name_ru: 'Бургер XL', name_kg: 'Бургер XL', price: 270 },
    { id: 'bg3', category: 'burgers', name_ru: 'Бургер куриный', name_kg: 'Тоок бургер', price: 200 },
    { id: 'bg4', category: 'burgers', name_ru: 'Гамбургер', name_kg: 'Гамбургер', price: 150 },
    { id: 'bg5', category: 'burgers', name_ru: 'Yarpak burger куриный', name_kg: 'Yarpak тоок бургер', price: 295 },
    { id: 'bg6', category: 'burgers', name_ru: 'Yarpak burger говядина', name_kg: 'Yarpak уй эти бургер', price: 295 },
    { id: 'bg7', category: 'burgers', name_ru: 'Yarpak burger острый (курица)', name_kg: 'Yarpak ачуу бургер (тоок)', price: 320 },
    { id: 'bg8', category: 'burgers', name_ru: 'Yarpak burger острый (говядина)', name_kg: 'Yarpak ачуу бургер (уй эти)', price: 320 },
    { id: 'bg9', category: 'burgers', name_ru: 'Хот-дог', name_kg: 'Хот-дог', price: 100 },
    { id: 'bg10', category: 'burgers', name_ru: 'Нан кебаб', name_kg: 'Нан кебаб', price: 320 },
    { id: 'bg11', category: 'burgers', name_ru: 'Нан кебаб 0,5', name_kg: 'Нан кебаб 0.5', price: 170 },
    
    // --- ПИЦЦА ---
    { id: 'pz1', category: 'pizza', name_ru: 'Пицца Пепперони', name_kg: 'Пепперони пиццасы', price: 395 },
    { id: 'pz2', category: 'pizza', name_ru: 'Пицца 4 сезона', name_kg: '4 сезон пиццасы', price: 430 },
    { id: 'pz3', category: 'pizza', name_ru: 'Пицца 4 сыра', name_kg: '4 сыр пиццасы', price: 440 },
    { id: 'pz4', category: 'pizza', name_ru: 'Пицца Куриная', name_kg: 'Тоок пиццасы', price: 395 },
    { id: 'pz5', category: 'pizza', name_ru: 'Пицца Маргарита', name_kg: 'Маргарита пиццасы', price: 350 },
    { id: 'pz6', category: 'pizza', name_ru: 'Пицца Мексикана', name_kg: 'Мексикана пиццасы', price: 420 },
    { id: 'pz7', category: 'pizza', name_ru: 'Пицца Цезарь', name_kg: 'Цезарь пиццасы', price: 410 },
    { id: 'pz8', category: 'pizza', name_ru: 'Мясная пицца', name_kg: 'Эттүү пицца', price: 450 },
    
    // --- ЗАКУСКИ ---
    { id: 'sn1', category: 'snacks', name_ru: 'Наггетсы (4 шт)', name_kg: 'Наггетстер (4 даана)', price: 90 },
    { id: 'sn2', category: 'snacks', name_ru: 'Наггетсы (6 шт)', name_kg: 'Наггетстер (6 даана)', price: 130 },
    { id: 'sn3', category: 'snacks', name_ru: 'Наггетсы (8 шт)', name_kg: 'Наггетстер (8 даана)', price: 180 },
    { id: 'sn4', category: 'snacks', name_ru: 'Наггетсы (10 шт)', name_kg: 'Наггетстер (10 даана)', price: 220 },
    { id: 'sn5', category: 'snacks', name_ru: 'Стрипсы Малая', name_kg: 'Стрипсы чакан', price: 204 },
    { id: 'sn6', category: 'snacks', name_ru: 'Стрипсы Стандарт', name_kg: 'Стрипсы стандарт', price: 339 },
    { id: 'sn7', category: 'snacks', name_ru: 'Стрипсы Большая', name_kg: 'Стрипсы чоң', price: 499 },
    { id: 'sn8', category: 'snacks', name_ru: 'Крылышки (3 шт)', name_kg: 'Канаттар (3 даана)', price: 189 },
    { id: 'sn9', category: 'snacks', name_ru: 'Крылышки (6 шт)', name_kg: 'Канаттар (6 даана)', price: 354 },
    { id: 'sn10', category: 'snacks', name_ru: 'Крылышки (9 шт)', name_kg: 'Канаттар (9 даана)', price: 524 },
    { id: 'sn11', category: 'snacks', name_ru: 'Крылышки (12 шт)', name_kg: 'Канаттар (12 даана)', price: 664 },
    { id: 'sn12', category: 'snacks', name_ru: 'Крылышки (18 шт)', name_kg: 'Канаттар (18 даана)', price: 979 },
    { id: 'sn13', category: 'snacks', name_ru: 'Картофель Фри 150г', name_kg: 'Фри картошкасы 150г', price: 120 },
    { id: 'sn14', category: 'snacks', name_ru: 'Картофельные шарики 150г', name_kg: 'Картошка топтору 150г', price: 150 },
    { id: 'sn15', category: 'snacks', name_ru: 'Сырные палочки (5 шт)', name_kg: 'Сыр таякчалары (5 даана)', price: 200 },
    { id: 'sn16', category: 'snacks', name_ru: 'Сырный соус', name_kg: 'Сыр соусу', price: 30 },
    { id: 'sn17', category: 'snacks', name_ru: 'Чесночный соус', name_kg: 'Сарымсак соусу', price: 30 },
    { id: 'sn18', category: 'snacks', name_ru: 'Барбекю соус', name_kg: 'Барбекю соусу', price: 30 },
    { id: 'sn19', category: 'snacks', name_ru: 'Кетчуп', name_kg: 'Кетчуп', price: 30 },
    { id: 'sn20', category: 'snacks', name_ru: 'Халапеньо', name_kg: 'Халапеньо', price: 30 },
    
    // --- НАПИТКИ ---
    { id: 'dr1', category: 'drinks', name_ru: 'Пиала 1л', name_kg: 'Пиала 1л', price: 85 },
    { id: 'dr2', category: 'drinks', name_ru: 'Пепси 1л', name_kg: 'Пепси 1л', price: 110 },
    { id: 'dr3', category: 'drinks', name_ru: 'Кола 1л', name_kg: 'Кола 1л', price: 110 },
    { id: 'dr4', category: 'drinks', name_ru: 'Фьюсти 1л', name_kg: 'Фьюсти 1л', price: 110 },
    { id: 'dr5', category: 'drinks', name_ru: 'Чалап 500г', name_kg: 'Чалап 500г', price: 60 },
    { id: 'dr6', category: 'drinks', name_ru: 'Нитро', name_kg: 'Нитро', price: 80 },
    { id: 'dr7', category: 'drinks', name_ru: 'Максым чай', name_kg: 'Максым чай', price: 115 },
    { id: 'dr8', category: 'drinks', name_ru: 'Пепси 0.5л', name_kg: 'Пепси 0.5л', price: 70 },
    { id: 'dr9', category: 'drinks', name_ru: 'Дюшес 0.5л', name_kg: 'Дюшес 0.5л', price: 70 },
    
    // --- КОМБО ---
    { id: 'cm1', category: 'combos', name_ru: 'Супер комбо (Пицца+2 Бургера+2 Шаурмы+Фри+Наггетсы+Пепси)', name_kg: 'Супер комбо топтому', price: 1499 },
    { id: 'cm2', category: 'combos', name_ru: 'Мега комбо (Пицца+2 Бургера+Шарики+Фьюсти)', name_kg: 'Мега комбо топтому', price: 899 },
    { id: 'cm3', category: 'combos', name_ru: 'Мини комбо (2 Шаурмы+Фри+2 Чалапа)', name_kg: 'Мини комбо топтому', price: 555 }
];

// Языковой словарь перевода интерфейса
const translations = {
    ru: {
        logo: "MIX BURGER", tags: "БУРГЕРЫ • ШАУРМА • ПИЦЦА", status: "• Открыто · принимаем заказы",
        heroTitle: "Голод? <br><span>MIX BURGER</span> уже жарит.",
        heroDesc: "Сочные бургеры, фирменная шаурма и хрустящая пицца. Закажи онлайн — забери сам или мы привезем.",
        btnMenu: "Открыть меню", btnQr: "QR-код заведения", infoPickup: "Самовывоз", infoDelivery: "Доставка",
        infoWa: "Через WhatsApp", topTitle: "Топ заказ", comboName: "Супер комбо", comboMeta: "Для компании 3–4 чел.",
        menuHeading: "Выбирайте и добавляйте", floatCart: "Корзина", cartTitle: "Ваш заказ",
        btnCheckout: "Оформить заказ", checkoutTitle: "Оформление заказа", pickupAddress: "Заберите заказ по адресу: г. Бишкек, ул. Примерная, 1",
        lblAddress: "Адрес доставки *", lblName: "Ваше имя *", lblPhone: "Телефон *", lblComment: "Сказать повару",
        qrTitle: "Оплата по QR", qrInstruction: "Отсканируйте QR-код в приложении банка и переведите сумму заказа. Затем прикрепите фото чека ниже.",
        lblReceipt: "Фото чека об оплате *", uploadBtn: "Загрузить фото чека",
        waNotice: "После нажатия «Отправить заказ» откроется WhatsApp с деталями. Прикрепите туда фото чека вручную и отправьте сообщение.",
        summaryItems: "Позиций", summaryTotal: "Итого", btnSend: "Отправить заказ в WHATSAPP",
        catShaurma: "Шаурма", catBurgers: "Бургеры", catPite: "Пите", catPizza: "Пицца", catSnacks: "Закуски", catDrinks: "Напитки", catCombos: "Комбо"
    },
    kg: {
        logo: "MIX BURGER", tags: "БУРГЕРДЕР • ШАУРМА • ПИЦЦА", status: "• Ачык · буйрутма алабыз",
        heroTitle: "Ач калдыңызбы? <br><span>MIX BURGER</span> азыр бышырат.",
        heroDesc: "Ширелүү бургерлер, өзгөчө шаурма жана кытырак пицца. Онлайн буйрутма бериңиз — өзүңүз алып кетиңиз же биз жеткиребиз.",
        btnMenu: "Менюну ачуу", btnQr: "Ишкананын QR-коду", infoPickup: "Өзүңүз алып кетүү", infoDelivery: "Жеткирүү",
        infoWa: "WhatsApp аркылуу", topTitle: "Топ буйрутма", comboName: "Супер комбо", comboMeta: "3–4 кишилик компания үчүн.",
        menuHeading: "Тандаңыз жана кошуңуз", floatCart: "Корзина", cartTitle: "Сиздин буйрутмаңыз",
        btnCheckout: "Буйрутманы тариздөө", checkoutTitle: "Буйрутманы тариздөө", pickupAddress: "Буйрутманы ушул дарек боюнча алыңыз: Бишкек ш., Примерная көч., 1",
        lblAddress: "Жеткирүү дареги *", lblName: "Сиздин атыңыз *", lblPhone: "Телефон *", lblComment: "Ашпозчуга билдирүү",
        qrTitle: "QR аркылуу төлөө", qrInstruction: "Банк тиркемесинен QR-кодду сканерлеп, буйрутма суммасын которуңуз. Андан кийин чектин сүрөтүн төмөндө тиркеңиз.",
        lblReceipt: "Төлөм чегинин сүрөтү *", uploadBtn: "Чек сүрөтүн жүктөө",
        waNotice: "«Буйрутманы жөнөтүү» баскычын баскандан кийин WhatsApp маалыматтары менен ачылат. Ал жерге чектин сүрөтүн өзүңүз тиркеп жөнөтүңүз.",
        summaryItems: "Позициялар", summaryTotal: "Жыйынтыгы", btnSend: "Буйрутманы WHATSAPP-ка жөнөтүү",
        catShaurma: "Шаурма", catBurgers: "Бургеры", catPite: "Пите", catPizza: "Пицца", catSnacks: "Закуски", catDrinks: "Напитки", catCombos: "Комбо"
    }
};
// Переменные состояния приложения
let currentLanguage = 'ru';
let currentCategory = 'shaurma';
let cart = {}; 
let deliveryMethod = 'pickup'; 
const whatsappPhoneNumber = "996504400448"; // Твой рабочий номер телефона приема заказов

window.onload = function() {
    renderMenu();
    updateCartUI();
};

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ru' ? 'kg' : 'ru';
    document.getElementById('lang-toggle-btn').innerText = currentLanguage.toUpperCase();
    
    const t = translations[currentLanguage];
    
    document.getElementById('lang-logo').innerText = t.logo;
    document.getElementById('lang-tags').innerText = t.tags;
    document.getElementById('lang-status').innerText = t.status;
    document.getElementById('lang-hero-title').innerHTML = t.heroTitle;
    document.getElementById('lang-hero-desc').innerText = t.heroDesc;
    document.getElementById('lang-btn-menu').innerText = t.btnMenu;
    document.getElementById('lang-btn-qr').innerText = t.btnQr;
    document.getElementById('lang-info-pickup').innerText = t.infoPickup;
    document.getElementById('lang-info-delivery').innerText = t.infoDelivery;
    document.getElementById('lang-info-wa').innerText = t.infoWa;
    document.getElementById('lang-top-title').innerText = t.topTitle;
    document.getElementById('lang-combo-name').innerText = t.comboName;
    document.getElementById('lang-combo-meta').innerText = t.comboMeta;
    document.getElementById('lang-menu-heading').innerText = t.menuHeading;
    document.getElementById('lang-float-cart').innerText = t.floatCart;
    document.getElementById('lang-cart-title').innerText = t.cartTitle;
    document.getElementById('lang-btn-checkout').innerText = t.btnCheckout;
    document.getElementById('lang-checkout-title').innerText = t.checkoutTitle;
    document.getElementById('lang-pickup-address').innerText = t.pickupAddress;
    document.getElementById('lang-lbl-address').innerText = t.lblAddress;
    document.getElementById('lang-lbl-name').innerText = t.lblName;
    document.getElementById('lang-lbl-phone').innerText = t.lblPhone;
    document.getElementById('lang-lbl-comment').innerText = t.lblComment;
    document.getElementById('lang-qr-payment-title').innerText = t.qrTitle;
    document.getElementById('lang-qr-instruction').innerText = t.qrInstruction;
    document.getElementById('lang-lbl-receipt').innerText = t.lblReceipt;
    document.getElementById('lang-upload-btn').innerText = t.uploadBtn;
    document.getElementById('lang-wa-notice').innerText = t.waNotice;
    document.getElementById('lang-summary-items').innerText = t.summaryItems;
    document.getElementById('lang-summary-total').innerText = t.summaryTotal;
    document.getElementById('lang-btn-send').innerText = t.btnSend;
    
    document.getElementById('cat-shaurma').innerText = t.catShaurma;
    document.getElementById('cat-burgers').innerText = t.catBurgers;
    document.getElementById('cat-pite').innerText = t.catPite;
    document.getElementById('cat-pizza').innerText = t.catPizza;
    document.getElementById('cat-snacks').innerText = t.catSnacks;
    document.getElementById('cat-drinks').innerText = t.catDrinks;
    document.getElementById('cat-combos').innerText = t.catCombos;

    renderMenu();
    renderCartModal();
}

function scrollToMenu() {
    document.getElementById('menu-anchor').scrollIntoView({ behavior: 'smooth' });
}

function switchCategory(catName, btnElement) {
    currentCategory = catName;
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    renderMenu();
}

function renderMenu() {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    
    const filtered = productsData.filter(p => p.category === currentCategory);
    
    filtered.forEach(p => {
        const count = cart[p.id] || 0;
        const name = currentLanguage === 'ru' ? p.name_ru : p.name_kg;
        
        let actionHTML = '';
        if (count === 0) {
            actionHTML = `<div class="stepper"><button class="add-btn-init" onclick="changeItemCount('${p.id}', 1)">+</button></div>`;
        } else {
            actionHTML = `
                <div class="stepper">
                    <button onclick="changeItemCount('${p.id}', -1)">-</button>
                    <span class="count">${count}</span>
                    <button onclick="changeItemCount('${p.id}', 1)">+</button>
                </div>
            `;
        }

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="prod-info">
                <h4>${name}</h4>
                <div class="price">${p.price}</div>
            </div>
            <div class="prod-actions">
                ${actionHTML}
            </div>
        `;
        container.appendChild(card);
    });
}

function changeItemCount(id, change) {
    if (!cart[id]) cart[id] = 0;
    cart[id] += change;
    if (cart[id] <= 0) delete cart[id];
    
    updateCartUI();
    renderMenu();
    renderCartModal();
}

function updateCartUI() {
    let totalCount = 0;
    let totalPrice = 0;

    for (let id in cart) {
        const prod = productsData.find(p => p.id === id);
        if (prod) {
            totalCount += cart[id];
            totalPrice += prod.price * cart[id];
        }
    }

    const badge = document.getElementById('cart-badge');
    if (totalCount > 0) {
        badge.innerText = totalCount;
        badge.style.display = 'block';
    } else {
        badge.style.display = 'none';
    }

    const floatCart = document.getElementById('floating-cart');
    if (totalCount > 0) {
        floatCart.style.display = 'flex';
        document.getElementById('floating-count').innerText = totalCount;
        document.getElementById('floating-total').innerText = totalPrice + ' С';
    } else {
        floatCart.style.display = 'none';
    }

    document.getElementById('cart-modal-total').innerText = totalPrice + ' С';
    document.getElementById('qr-total-display').innerText = totalPrice + ' С';
    document.getElementById('checkout-count-display').innerText = totalCount;
    document.getElementById('checkout-total-display').innerText = totalPrice + ' С';
}

function openCartModal() {
    document.getElementById('cart-modal').style.display = 'flex';
    renderCartModal();
}

function openCheckoutModal() {
    closeModal('cart-modal');
    document.getElementById('checkout-modal').style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

function renderCartModal() {
    const container = document.getElementById('cart-items-container');
    container.innerHTML = '';
    
    let hasItems = false;

    for (let id in cart) {
        hasItems = true;
        const p = productsData.find(prod => prod.id === id);
        const name = currentLanguage === 'ru' ? p.name_ru : p.name_kg;
        const count = cart[id];

        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
            <div>
                <div style="font-weight:700; font-size:14px; margin-bottom:4px;">${name}</div>
                <div style="color:var(--accent-color); font-weight:bold; font-size:14px;">${p.price * count} С</div>
            </div>
            <div class="cart-item-actions">
                <div class="stepper">
                    <button onclick="changeItemCount('${id}', -1)">-</button>
                    <span class="count">${count}</span>
                    <button onclick="changeItemCount('${id}', 1)">+</button>
                </div>
                <button class="trash-btn" onclick="removeItemCompletely('${id}')">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
            </div>
        `;
        container.appendChild(row);
    }

    if (!hasItems) {
        container.innerHTML = `<p style="text-align:center; color:var(--text-muted); padding:20px 0;">${currentLanguage === 'ru' ? 'Корзина пуста' : 'Корзина бош'}</p>`;
    }
}

function removeItemCompletely(id) {
    delete cart[id];
    updateCartUI();
    renderMenu();
    renderCartModal();
}

function setDeliveryMethod(method) {
    deliveryMethod = method;
    if (method === 'pickup') {
        document.getElementById('tab-pickup').classList.add('active');
        document.getElementById('tab-delivery').classList.remove('active');
        document.getElementById('pickup-info').style.display = 'flex';
        document.getElementById('address-field').style.display = 'none';
    } else {
        document.getElementById('tab-pickup').classList.remove('active');
        document.getElementById('tab-delivery').classList.add('active');
        document.getElementById('pickup-info').style.display = 'none';
        document.getElementById('address-field').style.display = 'block';
    }
}

function handleFileSelect(input) {
    if (input.files && input.files[0]) {
        const box = document.getElementById('upload-content-text');
        box.innerHTML = `🟢 <span style="color:#fff; font-weight:bold;">${input.files[0].name}</span>`;
    }
}

function sendOrderToWhatsApp() {
    const name = document.getElementById('input-name').value.trim();
    const phone = document.getElementById('input-phone').value.trim();
    const address = document.getElementById('input-address').value.trim();
    const comment = document.getElementById('input-comment').value.trim();
    const fileInput = document.getElementById('file-input');

    if (!name || phone === "+996 ") {
        alert(currentLanguage === 'ru' ? "Пожалуйста, заполните имя и номер телефона!" : "Сураныч, атыңызды жана телефон номериңизди толтуруңуз!");
        return;
    }

    if (deliveryMethod === 'delivery' && !address) {
        alert(currentLanguage === 'ru' ? "Укажите адрес доставки!" : "Жеткирүү дарегин көрсөтүңүз!");
        return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
        alert(currentLanguage === 'ru' ? "Прикрепите фото чека об оплате!" : "Төлөм чегинин сүрөтүн тиркеңиз!");
        return;
    }

    let message = `*Новый заказ в MIX BURGER* 🍔\n\n`;
    message += `👤 *Имя:* ${name}\n`;
    message += `📞 *Телефон:* ${phone}\n`;
    message += `📦 *Тип получения:* ${deliveryMethod === 'pickup' ? 'Самовывоз' : 'Доставка'}\n`;
    
    if (deliveryMethod === 'delivery') {
        message += `📍 *Адрес:* ${address}\n`;
    }
    if (comment) {
        message += `👨‍🍳 *Комментарий повару:* ${comment}\n`;
    }
    
    message += `\n🛒 *Позиции заказа:*\n`;
    
    let totalPrice = 0;
    for (let id in cart) {
        const p = productsData.find(prod => prod.id === id);
        const count = cart[id];
        const itemTotal = p.price * count;
        totalPrice += itemTotal;
        message += `• ${p.name_ru} x${count} (${itemTotal} С)\n`;
    }

    message += `\n💰 *Итого к оплате:* ${totalPrice} С\n`;
    message += `🧾 *Статус оплаты:* Скриншот чека прикреплен к сообщению ниже.`;

    const encodedText = encodeURIComponent(message);
    const waLink = `https://api.whatsapp.com/send?phone=${whatsappPhoneNumber}&text=${encodedText}`;
    
    window.open(waLink, '_blank');
}
