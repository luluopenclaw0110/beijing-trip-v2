/* ========================================
   Beijing Trip v2 - Main JavaScript
   ======================================== */

// ========================================
// Data
// ========================================
const spotsData = [
  {
    id: 'spot_01',
    name: '故宮紫禁城',
    enName: 'Forbidden City',
    location: '東城區景山前街4號',
    rating: 4.9,
    category: '宮殿',
    image: 'images/spots/spot_01_gugong.jpg',
    description: '故宮是明清兩代的皇家宮殿，被聯合國教科文組織列為世界文化遺產。這裡收藏了超過180萬件文物，是了解中國古代皇室文化的最佳去處。太和殿廣場、乾清宮、御花園等景點都不容錯過。',
    openTime: '08:30-17:00（週一休息）',
    ticket: '旺季60元，淡季40元',
    address: '北京市東城區景山前街4號'
  },
  {
    id: 'spot_02',
    name: '慕田峪長城',
    enName: 'Mutianyu Great Wall',
    location: '北京市懷柔區',
    rating: 4.8,
    category: '古蹟',
    image: 'images/spots/spot_02_mutianyu.jpg',
    description: '慕田峪長城是北京著名長城景點中保存最完好的一段，全長5400公尺。這裡的敵樓密集，風景秀麗，同時設有纜車，是家庭出遊的首選。',
    openTime: '07:30-18:00',
    ticket: '40元（纜車需另購）',
    address: '北京市懷柔區渤海鎮慕田峪村'
  },
  {
    id: 'spot_03',
    name: '頤和園',
    enName: 'Summer Palace',
    location: '北京市海淀區',
    rating: 4.8,
    category: '園林',
    image: 'images/spots/spot_03_yiheyuan.jpg',
    description: '頤和園是清代皇家的避暑行宮，以昆明湖、萬壽山為基礎，融合江南園林特色於1898年建成。園內的長廊、十七孔橋、石舫等都是經典景點。',
    openTime: '06:30-18:00',
    ticket: '旺季30元，淡季20元',
    address: '北京市海淀區宮門前街19號'
  },
  {
    id: 'spot_04',
    name: '天壇',
    enName: 'Temple of Heaven',
    location: '北京市東城區',
    rating: 4.7,
    category: '寺廟',
    image: 'images/spots/spot_04_tiantan.jpg',
    description: '天壇是明清兩代帝王祭天、祈雨的場所，被列為世界文化遺產。祈年殿的圓形藍色琉璃瓦頂是北京的重要地標。',
    openTime: '06:00-21:00',
    ticket: '旺季15元，淡季10元',
    address: '北京市東城區天壇內東里7號'
  },
  {
    id: 'spot_05',
    name: '鳥巢',
    enName: 'National Stadium',
    location: '北京市朝陽區',
    rating: 4.6,
    category: '現代建築',
    image: 'images/spots/spot_05_niaodao.jpg',
    description: '國家體育場俗稱「鳥巢」，是2008年北京奧運會的主場館。独特鋼結構外觀已成為北京現代地標，常舉辦大型體育賽事和演唱會。',
    openTime: '09:00-18:00',
    ticket: '100元',
    address: '北京市朝陽區國家體育場北路1號'
  },
  {
    id: 'spot_06',
    name: '水立方',
    enName: 'National Aquatics Center',
    location: '北京市朝陽區',
    rating: 4.5,
    category: '現代建築',
    image: 'images/spots/spot_06_shuilifang.jpg',
    description: '國家游泳中心俗稱「水立方」，是2008年北京奧運會游泳項目比賽場館。現在作為戲水樂園對外開放，是夏天消暑的好去處。',
    openTime: '10:00-18:00',
    ticket: '200元（含水上設施）',
    address: '北京市朝陽區天辰東路11號'
  },
  {
    id: 'spot_07',
    name: '天安門廣場',
    enName: 'Tiananmen Square',
    location: '北京市東城區',
    rating: 4.7,
    category: '廣場',
    image: 'images/spots/spot_07_tiananmen.jpg',
    description: '天安門廣場是世界上最大的城市廣場，見證了新中國的成立。廣場周圍有人民大會堂、中國國家博物館、人民英雄紀念碑等重要建築。',
    openTime: '全天開放',
    ticket: '免費',
    address: '北京市東城區西長安街'
  },
  {
    id: 'spot_08',
    name: '什剎海',
    enName: 'Shichahai',
    location: '北京市西城區',
    rating: 4.5,
    category: '歷史街區',
    image: 'images/spots/spot_08_shichahai.jpg',
    description: '什剎海由前海、後海、西海組成，是北京內城保存最完整的歷史街區。這裡有恭王府、宋慶齡故居，夜晚的什剎海酒吧街也非常熱鬧。',
    openTime: '全天開放',
    ticket: '免費',
    address: '北京市西城區什剎海附近'
  },
  {
    id: 'spot_09',
    name: '北海公園',
    enName: 'Beihai Park',
    location: '北京市西城區',
    rating: 4.5,
    category: '園林',
    image: 'images/spots/spot_09_beihai.jpg',
    description: '北海公園是中國古代皇家園林，有800多年歷史。公園以北海湖為主體，白塔是公園的標誌性建築。',
    openTime: '06:30-21:00',
    ticket: '旺季10元，淡季5元',
    address: '北京市西城區文津街1號'
  },
  {
    id: 'spot_10',
    name: '雍和宮',
    enName: 'Yonghe Temple',
    location: '北京市東城區',
    rating: 4.6,
    category: '寺廟',
    image: 'images/spots/spot_10_yonghegong.jpg',
    description: '雍和宮是北京最大的藏傳佛教寺廟，原為雍正皇帝府邸。寺內的乾隆木雕佛像高18米，非常壯觀。',
    openTime: '09:00-17:00',
    ticket: '25元',
    address: '北京市東城區雍和宮大街12號'
  },
  {
    id: 'spot_11',
    name: '潘家園',
    enName: 'Panjiayuan Market',
    location: '北京市朝陽區',
    rating: 4.3,
    category: '市集',
    image: 'images/spots/spot_11_panjiayuan.jpg',
    description: '潘家園舊貨市場是北京最大的古玩藝術品交易市場，每週六日開放。這裡可以找到各種古玩、珠寶、工藝品，是淘寶的好去處。',
    openTime: '週六日 08:00-18:00',
    ticket: '免費',
    address: '北京市朝陽區潘家園路'
  },
  {
    id: 'spot_12',
    name: '景山公園',
    enName: 'Jingshan Park',
    location: '北京市西城區',
    rating: 4.4,
    category: '公園',
    image: 'images/spots/spot_12_jingshan.jpg',
    description: '景山公園位於故宮北側，登上公園頂部的萬春亭可以俯瞰整個故宮全景，是北京最高的觀景點。',
    openTime: '06:00-21:00',
    ticket: '2元',
    address: '北京市西城區景山西街44號'
  }
];

const foodData = [
  {
    id: 'food_01',
    name: '全聚德烤鴨',
    cuisine: '京菜',
    priceRange: '¥150-200',
    location: '東城區帥府園路1號',
    rating: 4.5,
    image: 'images/food/food_01_quanjude.jpg',
    description: '創於1864年的北京烤鴨老字號，以「掛爐烤鴨」聞名。皮脆肉嫩，配以蔥段、黃瓜、甜麵醬，用薄餅包裹食用。',
    openTime: '11:00-13:30, 17:00-19:30'
  },
  {
    id: 'food_02',
    name: '東來順',
    cuisine: '火鍋',
    priceRange: '¥100-150',
    location: '東城區鼓樓大街',
    rating: 4.4,
    image: 'images/food/food_02_donglaishun.jpg',
    description: '創於1903年的老字號涮羊肉店，以手切羊肉聞名。羊肉片薄如紙，涮入銅火鍋配上麻醬，極盡鮮美。',
    openTime: '10:00-22:00'
  },
  {
    id: 'food_03',
    name: '炸醬麵',
    cuisine: '小吃',
    priceRange: '¥25-40',
    location: '各區連鎖店',
    rating: 4.3,
    image: 'images/food/food_03_zajiangmian.jpg',
    description: '北京最具代表性的麵食，炸醬使用黃醬和五花肉炸製，配上黃瓜絲、黃豆芽、心裡美蘿蔔絲等麵碼，口感豐富���',
    openTime: '06:00-21:00'
  },
  {
    id: 'food_04',
    name: '羊蝎子火鍋',
    cuisine: '火鍋',
    priceRange: '¥80-120',
    location: '各區連鎖店',
    rating: 4.4,
    image: 'images/food/food_04_yangxiezi.jpg',
    description: '羊蝎子即羊脊椎骨，因形似蝎子而得名。用藥膳湯底慢燉，肉質鮮嫩，是北京冬天最受歡迎的暖身美食。',
    openTime: '16:00-02:00'
  },
  {
    id: 'food_05',
    name: '銅鍋涮肉',
    cuisine: '火鍋',
    priceRange: '¥80-120',
    location: '各區連鎖店',
    rating: 4.3,
    image: 'images/food/food_05_tongguoshuanyuro.jpg',
    description: '傳統北京火鍋，使用炭火銅鍋，湯底清水加蔥薑。羊肉講究「文武火」，肉片入湯即熟，蘸上麻醬、韭菜花、腐乳調成的調料。',
    openTime: '11:00-23:00'
  },
  {
    id: 'food_06',
    name: '京味小吃',
    cuisine: '小吃',
    priceRange: '¥20-50',
    location: '各區連鎖店',
    rating: 4.2,
    image: 'images/food/food_06_jingweixiaochi.jpg',
    description: '包括驢打滾、艾窩窩、糖耳朵、爆肚、焦圈等傳統北京小吃。在小吃店可以一次品嚐多種經典北京味道。',
    openTime: '07:00-20:00'
  }
];

// ========================================
// Utility Functions
// ========================================
function getFavorites() {
  const stored = localStorage.getItem('beijing_favorites');
  return stored ? JSON.parse(stored) : [];
}

function saveFavorites(favorites) {
  localStorage.setItem('beijing_favorites', JSON.stringify(favorites));
}

function toggleFavorite(id, type) {
  const favorites = getFavorites();
  const index = favorites.findIndex(f => f.id === id && f.type === type);
  
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push({ id, type });
  }
  
  saveFavorites(favorites);
  return index === -1;
}

function isFavorite(id, type) {
  const favorites = getFavorites();
  return favorites.some(f => f.id === id && f.type === type);
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// ========================================
// Scroll Effects
// ========================================
function initScrollEffects() {
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Fade in on scroll
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));
}

// ========================================
// Mobile Navigation
// ========================================
function initNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      navToggle.innerHTML = nav.classList.contains('open') 
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="18" y1="18" x2="6" y2="6"></line></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });

    // Close nav when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
        nav.classList.remove('open');
        navToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
      }
    });
  }
}

// ========================================
// Weather Widget
// ========================================
async function fetchWeather(location = 'Beijing') {
  try {
    const response = await fetch(`https://wttr.in/${location}?format=j1`);
    const data = await response.json();
    return data.current_condition[0];
  } catch (error) {
    console.error('Weather fetch error:', error);
    return null;
  }
}

async function initWeatherWidget() {
  const widget = document.querySelector('.weather-widget');
  if (!widget) return;

  const weather = await fetchWeather();
  
  if (weather) {
    widget.innerHTML = `
      <div class="weather-widget-close" onclick="this.parentElement.remove()">✕</div>
      <div class="weather-location">北京</div>
      <div class="weather-temp">${weather.temp_C}°C</div>
      <div class="weather-condition">${weather.weatherDesc[0].value}</div>
    `;
  }

  // Auto-refresh every hour
  setInterval(async () => {
    const weather = await fetchWeather();
    if (weather) {
      const tempEl = widget.querySelector('.weather-temp');
      const condEl = widget.querySelector('.weather-condition');
      if (tempEl && condEl) {
        tempEl.textContent = `${weather.temp_C}°C`;
        condEl.textContent = weather.weatherDesc[0].value;
      }
    }
  }, 3600000);
}

// ========================================
// Filter Functions
// ========================================
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ========================================
// Detail Page Init
// ========================================
function getImagePath(image) {
  const path = window.location.pathname;
  if (path.includes('/attractions/')) return '../' + image;
  if (path.includes('/food/')) return '../' + image;
  return image;
}

function initDetailPage() {
  const id = getQueryParam('id');
  const type = getQueryParam('type');
  
  if (!id || !type) return;
  
  const data = type === 'spot' ? spotsData.find(s => s.id === id) : foodData.find(f => f.id === id);
  if (!data) return;

  // Update page content
  const titleEl = document.querySelector('.detail-title');
  const heroEl = document.querySelector('.detail-hero-bg');
  const descEl = document.querySelector('.detail-description');
  const badgeEl = document.querySelector('.card-badge');
  
  if (titleEl) titleEl.textContent = data.name;
  if (heroEl && data.image) heroEl.style.backgroundImage = `url(${getImagePath(data.image)})`;
  if (badgeEl) badgeEl.textContent = data.category;
  
  // Build info boxes
  const infoGrid = document.querySelector('.detail-info');
  if (infoGrid) {
    if (type === 'spot') {
      infoGrid.innerHTML = `
        <div class="info-box">
          <div class="info-box-label">開放時間</div>
          <div class="info-box-value">${data.openTime}</div>
        </div>
        <div class="info-box">
          <div class="info-box-label">門票</div>
          <div class="info-box-value">${data.ticket}</div>
        </div>
        <div class="info-box">
          <div class="info-box-label">地址</div>
          <div class="info-box-value">${data.address}</div>
        </div>
        <div class="info-box">
          <div class="info-box-label">評分</div>
          <div class="info-box-value">⭐ ${data.rating}</div>
        </div>
      `;
    } else {
      infoGrid.innerHTML = `
        <div class="info-box">
          <div class="info-box-label">營業時間</div>
          <div class="info-box-value">${data.openTime}</div>
        </div>
        <div class="info-box">
          <div class="info-box-label">人均消費</div>
          <div class="info-box-value">${data.priceRange}</div>
        </div>
        <div class="info-box">
          <div class="info-box-label">地址</div>
          <div class="info-box-value">${data.location}</div>
        </div>
        <div class="info-box">
          <div class="info-box-label">評分</div>
          <div class="info-box-value">⭐ ${data.rating}</div>
        </div>
      `;
    }
  }

  // Description
  if (descEl) {
    descEl.innerHTML = `<h3>關於 ${data.name}</h3><p>${data.description}</p>`;
  }

  // Favorite button
  const favBtn = document.querySelector('.favorite-btn');
  if (favBtn) {
    favBtn.addEventListener('click', () => {
      const isFav = toggleFavorite(id, type);
      favBtn.classList.toggle('active', isFav);
      favBtn.innerHTML = isFav 
        ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
    });

    // Check if already favorited
    if (isFavorite(id, type)) {
      favBtn.classList.add('active');
      favBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
    }
  }
}

// ========================================
// Home Page
// ========================================
function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/attractions/')) return '../';
  if (path.includes('/food/')) return '../';
  return '';
}

function initHomePage() {
  // Render spot cards
  const spotGrid = document.querySelector('#spot-grid');
  if (spotGrid) {
    const topSpots = spotsData.slice(0, 4);
    const base = getBasePath();
    spotGrid.innerHTML = topSpots.map(spot => `
      <div class="card fade-in" data-category="${spot.category}" onclick="window.location.href='${base}attractions/detail.html?id=${spot.id}&type=spot'">
        <div class="card-image">
          <img src="${spot.image}" alt="${spot.name}" loading="lazy">
          <span class="card-badge">${spot.category}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${spot.name}</h3>
          <div class="card-location">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            ${spot.location}
          </div>
          <div class="card-footer">
            <div class="card-rating">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
              ${spot.rating}
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render food cards
  const foodList = document.querySelector('#food-list');
  if (foodList) {
    const base = getBasePath();
    foodList.innerHTML = foodData.slice(0, 3).map(food => `
      <div class="food-card" onclick="window.location.href='${base}food/detail.html?id=${food.id}&type=food'">
        <div class="food-card-image">
          <img src="${base}${food.image}" alt="${food.name}" loading="lazy">
        </div>
        <div class="food-card-body">
          <h3 class="food-card-title">${food.name}</h3>
          <div class="food-card-type">${food.cuisine}</div>
          <div class="food-card-price">${food.priceRange}</div>
        </div>
      </div>
    `).join('');
  }
}

// ========================================
// Attractions/Food List Page
// ========================================
function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/attractions/')) return '../';
  if (path.includes('/food/')) return '../';
  return '';
}

function getImageBase() {
  const path = window.location.pathname;
  if (path.includes('/attractions/')) return '../';
  if (path.includes('/food/')) return '../';
  return '';
}

function initListPage() {
  const path = window.location.pathname;
  const isAttractions = path.includes('attractions');
  const isFood = path.includes('food');
  const grid = document.querySelector('.card-grid');
  
  if (!grid) return;
  
  const data = isAttractions ? spotsData : foodData;
  const imgBase = getImageBase();
  const detailPage = isAttractions ? 'detail.html' : 'detail.html';
  const type = isAttractions ? 'spot' : 'food';
  
  grid.innerHTML = data.map(item => `
    <div class="card fade-in" data-category="${item.category || item.cuisine}" onclick="window.location.href='${detailPage}?id=${item.id}&type=${type}'">
      <div class="card-image">
        <img src="${imgBase}${item.image}" alt="${item.name}" loading="lazy">
        <span class="card-badge">${item.category || item.cuisine}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.name}</h3>
        <div class="card-location">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          ${item.location}
        </div>
        <div class="card-footer">
          <div class="card-rating">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
            ${item.rating}
          </div>
          <span class="card-price">${item.ticket || item.priceRange || ''}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ========================================
// Initialize
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  initScrollEffects();
  initNavigation();
  initFilters();
  
  // Page-specific init
  const page = document.body.dataset.page;
  
  switch(page) {
    case 'home':
      initHomePage();
      initWeatherWidget();
      break;
    case 'detail':
      initDetailPage();
      break;
    case 'attractions':
    case 'food':
      initListPage();
      break;
  }
});

// Export for global use
window.getFavorites = getFavorites;
window.toggleFavorite = toggleFavorite;
window.isFavorite = isFavorite;