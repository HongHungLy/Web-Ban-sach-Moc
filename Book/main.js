/**
 * MỘC BOOKS — Hệ thống mã nguồn Javascript xử lý giao diện & lưu trữ LocalStorage
 * Đáp ứng đầy đủ 100% yêu cầu đề bài: End-user & Web-admin
 */

// ==========================================
// 1. DỮ LIỆU MẶC ĐỊNH & KHỞI TẠO LOCALSTORAGE
// ==========================================

const DEFAULT_BOOKS = [
  {
    id: 1,
    title: "Đi tìm lẽ sống",
    author: "Viktor E. Frankl",
    category: "Kỹ năng sống",
    price: 89000,
    oldPrice: 110000,
    coverClass: "cover-olive",
    tag: "Bán chạy",
    rating: 4.9,
    reviews: 128,
    publisher: "NXB Trẻ",
    coverType: "Bìa mềm",
    pages: "224 trang",
    desc: "Cuốn sách kể lại hành trình phi thường của Viktor Frankl trong trại tập trung, đồng thời chia sẻ một niềm tin giản dị: con người có thể tìm thấy ý nghĩa ngay cả trong những hoàn cảnh khó khăn nhất.",
    stock: 42,
    soldCount: 126,
    isHidden: false,
    image: null
  },
  {
    id: 2,
    title: "Nhà giả kim",
    author: "Paulo Coelho",
    category: "Văn học",
    price: 76000,
    oldPrice: 90000,
    coverClass: "cover-clay",
    tag: "Mới",
    rating: 5.0,
    reviews: 96,
    publisher: "NXB Hội Nhà Văn",
    coverType: "Bìa mềm",
    pages: "228 trang",
    desc: "Câu chuyện về chuyến phiêu lưu đi tìm kho báu của cậu bé chăn cừu Santiago, gửi gắm thông điệp sâu sắc về ước mơ và lắng nghe trái tim.",
    stock: 18,
    soldCount: 98,
    isHidden: false,
    image: null
  },
  {
    id: 3,
    title: "Tuổi trẻ đáng giá bao nhiêu",
    author: "Rosie Nguyễn",
    category: "Kỹ năng sống",
    price: 82000,
    oldPrice: 0,
    coverClass: "cover-blue",
    tag: "",
    rating: 4.8,
    reviews: 74,
    publisher: "NXB Nhã Nam",
    coverType: "Bìa mềm",
    pages: "292 trang",
    desc: "Cuốn sách dành cho những người trẻ đang băn khoăn về con đường tương lai, tiếp thêm ngọn lửa nhiệt huyết và thói quen tự học.",
    stock: 35,
    soldCount: 74,
    isHidden: false,
    image: null
  },
  {
    id: 4,
    title: "Mắt biếc",
    author: "Nguyễn Nhật Ánh",
    category: "Văn học",
    price: 102000,
    oldPrice: 120000,
    coverClass: "cover-gold",
    tag: "-15%",
    rating: 5.0,
    reviews: 201,
    publisher: "NXB Trẻ",
    coverType: "Bìa mềm",
    pages: "300 trang",
    desc: "Bản tình ca da diết về tình yêu đơn phương trong sáng và hoài niệm tuổi thơ dưới bóng cây bàng làng Đo Đo.",
    stock: 22,
    soldCount: 88,
    isHidden: false,
    image: null
  },
  {
    id: 5,
    title: "Rừng Na Uy",
    author: "Haruki Murakami",
    category: "Văn học",
    price: 128000,
    oldPrice: 0,
    coverClass: "cover-plum",
    tag: "",
    rating: 4.9,
    reviews: 66,
    publisher: "NXB Hội Nhà Văn",
    coverType: "Bìa mềm",
    pages: "552 trang",
    desc: "Tác phẩm kinh điển của văn học Nhật Bản hiện đại về sự mất mát, nỗi cô đơn và tình yêu tuổi trẻ.",
    stock: 15,
    soldCount: 66,
    isHidden: false,
    image: null
  },
  {
    id: 6,
    title: "Cây cam ngọt của tôi",
    author: "José Mauro de Vasconcelos",
    category: "Văn học",
    price: 95000,
    oldPrice: 0,
    coverClass: "cover-mint",
    tag: "Mới",
    rating: 4.9,
    reviews: 112,
    publisher: "NXB Hội Nhà Văn",
    coverType: "Bìa mềm",
    pages: "244 trang",
    desc: "Câu chuyện xúc động về cậu bé Zezé giàu trí tưởng tượng nhưng thiếu thốn tình thương, đã chạm tới trái tim hàng triệu bạn đọc trên toàn thế giới.",
    stock: 30,
    soldCount: 112,
    isHidden: false,
    image: null
  },
  {
    id: 7,
    title: "Lược sử thời gian",
    author: "Stephen Hawking",
    category: "Khoa học",
    price: 119000,
    oldPrice: 0,
    coverClass: "cover-blue",
    tag: "",
    rating: 4.7,
    reviews: 59,
    publisher: "NXB Trẻ",
    coverType: "Bìa mềm",
    pages: "288 trang",
    desc: "Cuốn sách khoa học phổ thông nổi tiếng nhất thời đại, giải thích nguồn gốc vũ trụ, lỗ đen và bản chất thời gian một cách dễ hiểu.",
    stock: 25,
    soldCount: 59,
    isHidden: false,
    image: null
  },
  {
    id: 8,
    title: "Hoàng tử bé",
    author: "Antoine de Saint-Exupéry",
    category: "Sách thiếu nhi",
    price: 59000,
    oldPrice: 0,
    coverClass: "cover-clay",
    tag: "",
    rating: 5.0,
    reviews: 143,
    publisher: "NXB Kim Đồng",
    coverType: "Bìa mềm",
    pages: "108 trang",
    desc: "Tác phẩm bất hủ về tình bạn, tình yêu và cái nhìn trong trẻo của trẻ thơ đối với thế giới người lớn.",
    stock: 50,
    soldCount: 143,
    isHidden: false,
    image: null
  },
  {
    id: 9,
    title: "Vũ trụ trong vỏ hạt dẻ",
    author: "Stephen Hawking",
    category: "Khoa học",
    price: 145000,
    oldPrice: 165000,
    coverClass: "cover-olive",
    tag: "Khoa học",
    rating: 4.8,
    reviews: 42,
    publisher: "NXB Trẻ",
    coverType: "Bìa cứng",
    pages: "230 trang",
    desc: "Khám phá những biên giới mới nhất của vật lý lý thuyết, từ thuyết siêu dây đến lý thuyết M trong hình minh họa rực rỡ.",
    stock: 12,
    soldCount: 35,
    isHidden: false,
    image: null
  },
  {
    id: 10,
    title: "Đắc nhân tâm",
    author: "Dale Carnegie",
    category: "Kỹ năng sống",
    price: 86000,
    oldPrice: 100000,
    coverClass: "cover-gold",
    tag: "Kinh điển",
    rating: 4.9,
    reviews: 310,
    publisher: "NXB Tổng Hợp TP.HCM",
    coverType: "Bìa mềm",
    pages: "320 trang",
    desc: "Nghệ thuật thu phục lòng người và xây dựng các mối quan hệ bền vững, cuốn sách tự lực bán chạy nhất mọi thời đại.",
    stock: 60,
    soldCount: 210,
    isHidden: false,
    image: null
  },
  {
    id: 11,
    title: "Dế Mèn phiêu lưu ký",
    author: "Tô Hoài",
    category: "Sách thiếu nhi",
    price: 68000,
    oldPrice: 0,
    coverClass: "cover-mint",
    tag: "Thiếu nhi",
    rating: 4.9,
    reviews: 180,
    publisher: "NXB Kim Đồng",
    coverType: "Bìa mềm",
    pages: "160 trang",
    desc: "Chuyến phiêu lưu hấp dẫn của chàng Dế Mèn dũng cảm đi khám phá thế giới muôn loài và học bài học về tình bác ái.",
    stock: 45,
    soldCount: 120,
    isHidden: false,
    image: null
  },
  {
    id: 12,
    title: "Búp sen xanh",
    author: "Sơn Tùng",
    category: "Văn học",
    price: 92000,
    oldPrice: 0,
    coverClass: "cover-plum",
    tag: "Mới ra mắt",
    rating: 4.9,
    reviews: 15,
    publisher: "NXB Kim Đồng",
    coverType: "Bìa mềm",
    pages: "364 trang",
    desc: "Tiểu thuyết tái hiện thời niên thiếu và con đường ra đi tìm đường cứu nước của Bác Hồ với lời văn mộc mạc và chân thành.",
    stock: 18,
    soldCount: 0, // Chưa bán cuốn nào -> để kiểm tra chức năng xóa sản phẩm hẳn
    isHidden: false,
    image: null
  }
];

const DEFAULT_USERS = [
  { id: 1, name: "Nguyễn Minh Anh", email: "minhanh@example.com", phone: "0903 456 789", address: "12 Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh", ordersCount: 3, isLocked: false },
  { id: 2, name: "Trần Hoàng Nam", email: "namtran@example.com", phone: "0912 345 678", address: "45 Xô Viết Nghệ Tĩnh, Quận Bình Thạnh, TP. Hồ Chí Minh", ordersCount: 8, isLocked: false },
  { id: 3, name: "Lê Thu Hà", email: "thuha@example.com", phone: "0938 112 233", address: "20 Võ Văn Ngân, Thành phố Thủ Đức", ordersCount: 5, isLocked: true },
  { id: 4, name: "Phạm Gia Bảo", email: "giabao@example.com", phone: "0977 445 566", address: "88 Lê Lợi, Quận 1, TP. Hồ Chí Minh", ordersCount: 4, isLocked: false },
  { id: 5, name: "Võ Bảo Ngọc", email: "baongoc@example.com", phone: "0908 998 877", address: "123 Cách Mạng Tháng 8, Quận 3, TP. Hồ Chí Minh", ordersCount: 3, isLocked: false }
];

const DEFAULT_ORDERS = [
  {
    id: "MB-2025-0148",
    customerName: "Nguyễn Minh Anh",
    email: "minhanh@example.com",
    phone: "0903 456 789",
    date: "2025-05-18",
    location: "Quận 3",
    fullAddress: "12 Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh",
    items: [
      { id: 1, title: "Đi tìm lẽ sống", price: 89000, qty: 1 },
      { id: 2, title: "Nhà giả kim", price: 76000, qty: 1 }
    ],
    subtotal: 165000,
    shippingFee: 25000,
    total: 190000,
    paymentMethod: "Tiền mặt khi nhận hàng",
    status: "Chưa xác nhận"
  },
  {
    id: "MB-2025-0147",
    customerName: "Trần Hoàng Nam",
    email: "namtran@example.com",
    phone: "0912 345 678",
    date: "2025-05-18",
    location: "Bình Thạnh",
    fullAddress: "45 Xô Viết Nghệ Tĩnh, Quận Bình Thạnh, TP. Hồ Chí Minh",
    items: [
      { id: 4, title: "Mắt biếc", price: 102000, qty: 1 },
      { id: 5, title: "Rừng Na Uy", price: 128000, qty: 1 }
    ],
    subtotal: 230000,
    shippingFee: 45000,
    total: 275000,
    paymentMethod: "Thanh toán trực tuyến",
    status: "Đã xác nhận"
  },
  {
    id: "MB-2025-0146",
    customerName: "Lê Thu Hà",
    email: "thuha@example.com",
    phone: "0938 112 233",
    date: "2025-05-17",
    location: "Thủ Đức",
    fullAddress: "20 Võ Văn Ngân, Thành phố Thủ Đức",
    items: [
      { id: 7, title: "Lược sử thời gian", price: 119000, qty: 1 }
    ],
    subtotal: 119000,
    shippingFee: 19000,
    total: 138000,
    paymentMethod: "Tiền mặt khi nhận hàng",
    status: "Đã giao"
  },
  {
    id: "MB-2025-0145",
    customerName: "Phạm Gia Bảo",
    email: "giabao@example.com",
    phone: "0977 445 566",
    date: "2025-05-17",
    location: "Quận 1",
    fullAddress: "88 Lê Lợi, Quận 1, TP. Hồ Chí Minh",
    items: [
      { id: 9, title: "Vũ trụ trong vỏ hạt dẻ", price: 145000, qty: 2 }
    ],
    subtotal: 290000,
    shippingFee: 30000,
    total: 320000,
    paymentMethod: "Tiền mặt khi nhận hàng",
    status: "Đã hủy"
  },
  {
    id: "MB-2025-0142",
    customerName: "Võ Bảo Ngọc",
    email: "baongoc@example.com",
    phone: "0908 998 877",
    date: "2025-05-16",
    location: "Quận 3",
    fullAddress: "123 Cách Mạng Tháng 8, Quận 3, TP. Hồ Chí Minh",
    items: [
      { id: 10, title: "Đắc nhân tâm", price: 86000, qty: 5 },
      { id: 8, title: "Hoàng tử bé", price: 59000, qty: 5 }
    ],
    subtotal: 725000,
    shippingFee: 215000,
    total: 940000,
    paymentMethod: "Thanh toán trực tuyến",
    status: "Đã giao"
  },
  {
    id: "MB-2025-0092",
    customerName: "Nguyễn Minh Anh",
    email: "minhanh@example.com",
    phone: "0903 456 789",
    date: "2025-04-02",
    location: "Quận 3",
    fullAddress: "12 Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh",
    items: [
      { id: 4, title: "Mắt biếc", price: 102000, qty: 1 }
    ],
    subtotal: 102000,
    shippingFee: 0,
    total: 102000,
    paymentMethod: "Tiền mặt khi nhận hàng",
    status: "Đã giao"
  },
  {
    id: "MB-2025-0031",
    customerName: "Nguyễn Minh Anh",
    email: "minhanh@example.com",
    phone: "0903 456 789",
    date: "2025-02-12",
    location: "Quận 3",
    fullAddress: "12 Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh",
    items: [
      { id: 8, title: "Hoàng tử bé", price: 59000, qty: 1 },
      { id: 5, title: "Rừng Na Uy", price: 128000, qty: 1 }
    ],
    subtotal: 187000,
    shippingFee: 0,
    total: 187000,
    paymentMethod: "Tiền mặt khi nhận hàng",
    status: "Đã giao"
  }
];

const DEFAULT_CART = [
  { id: 1, qty: 1 },
  { id: 2, qty: 1 }
];

const DEFAULT_USER = {
  name: "Nguyễn Minh Anh",
  email: "minhanh@example.com",
  phone: "0903 456 789",
  address: "12 Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh"
};

// Khởi tạo lưu trữ nếu chưa có
function initStorage() {
  if (!localStorage.getItem("mb_books")) {
    localStorage.setItem("mb_books", JSON.stringify(DEFAULT_BOOKS));
  }
  if (!localStorage.getItem("mb_users")) {
    localStorage.setItem("mb_users", JSON.stringify(DEFAULT_USERS));
  }
  if (!localStorage.getItem("mb_orders")) {
    localStorage.setItem("mb_orders", JSON.stringify(DEFAULT_ORDERS));
  }
  if (!localStorage.getItem("mb_cart")) {
    localStorage.setItem("mb_cart", JSON.stringify(DEFAULT_CART));
  }
  if (!localStorage.getItem("mb_currentUser")) {
    localStorage.setItem("mb_currentUser", JSON.stringify(DEFAULT_USER));
  }
  if (!localStorage.getItem("mb_adminLoggedIn")) {
    localStorage.setItem("mb_adminLoggedIn", "true");
  }
}

initStorage();

// Helpers truy xuất dữ liệu
function getBooks() {
  return JSON.parse(localStorage.getItem("mb_books") || "[]");
}
function saveBooks(books) {
  localStorage.setItem("mb_books", JSON.stringify(books));
}
function getUsers() {
  return JSON.parse(localStorage.getItem("mb_users") || "[]");
}
function saveUsers(users) {
  localStorage.setItem("mb_users", JSON.stringify(users));
}
function getOrders() {
  return JSON.parse(localStorage.getItem("mb_orders") || "[]");
}
function saveOrders(orders) {
  localStorage.setItem("mb_orders", JSON.stringify(orders));
}
function getCart() {
  return JSON.parse(localStorage.getItem("mb_cart") || "[]");
}
function saveCart(cart) {
  localStorage.setItem("mb_cart", JSON.stringify(cart));
  updateHeaderStats();
}
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("mb_currentUser") || JSON.stringify(DEFAULT_USER));
}
function saveCurrentUser(u) {
  localStorage.setItem("mb_currentUser", JSON.stringify(u));
  updateHeaderStats();
}

// Format tiền tệ VNĐ
function formatVND(num) {
  return Number(num || 0).toLocaleString("vi-VN") + "đ";
}

// ==========================================
// 2. TOAST THÔNG BÁO VÀ TIỆN ÍCH CHUNG
// ==========================================

function showToast(message, type = "success") {
  let container = document.querySelector(".mb-toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "mb-toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = `mb-toast ${type === "error" ? "toast-error" : type === "info" ? "toast-info" : ""}`;
  toast.innerHTML = `<span>${type === "error" ? "⚠" : "✓"}</span> <div>${message}</div>`;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 350);
  }, 2800);
}

// Cập nhật Header: Tên người dùng và số lượng giỏ hàng
function updateHeaderStats() {
  const cart = getCart();
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCountBadges = document.querySelectorAll("#header-cart-count");
  cartCountBadges.forEach(b => {
    b.textContent = totalCount;
    b.style.display = totalCount > 0 ? "inline-block" : "none";
  });

  const currentUser = getCurrentUser();
  const userHeaderNames = document.querySelectorAll("#header-user-name");
  userHeaderNames.forEach(span => {
    span.textContent = currentUser ? currentUser.name : "Tài khoản";
  });
}

// ==========================================
// 3. TRANG CHỦ (INDEX.HTML) LOGIC
// ==========================================

let currentFilter = {
  keyword: "",
  category: "",
  price: ""
};
let currentPage = 1;
const ITEMS_PER_PAGE = 8;

function initIndexPage() {
  const productListEl = document.getElementById("product-list");
  if (!productListEl) return;

  // Lắng nghe sự kiện click danh mục phía trên
  const categoryCards = document.querySelectorAll(".category-card");
  categoryCards.forEach(card => {
    card.addEventListener("click", e => {
      e.preventDefault();
      const cat = card.getAttribute("data-category");
      categoryCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      const catSelect = document.getElementById("category");
      if (catSelect) catSelect.value = cat;
      currentFilter.category = cat;
      currentPage = 1;
      renderProducts();

      // Cuộn mượt đến danh sách sách
      const sachMoiSection = document.getElementById("sach-moi");
      if (sachMoiSection) sachMoiSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  const viewAllCatsBtn = document.getElementById("view-all-cats");
  if (viewAllCatsBtn) {
    viewAllCatsBtn.addEventListener("click", e => {
      e.preventDefault();
      categoryCards.forEach(c => c.classList.remove("active"));
      const catSelect = document.getElementById("category");
      if (catSelect) catSelect.value = "";
      currentFilter.category = "";
      currentPage = 1;
      renderProducts();
      document.getElementById("sach-moi").scrollIntoView({ behavior: "smooth" });
    });
  }

  // Bộ lọc nâng cao: Tìm kiếm theo tên + danh mục + khoảng giá
  const searchInput = document.getElementById("search");
  const categorySelect = document.getElementById("category");
  const priceSelect = document.getElementById("price");
  const filterBtn = document.getElementById("filter-btn");

  function triggerFilter() {
    currentFilter.keyword = searchInput ? searchInput.value.trim().toLowerCase() : "";
    currentFilter.category = categorySelect ? categorySelect.value : "";
    currentFilter.price = priceSelect ? priceSelect.value : "";
    currentPage = 1;
    renderProducts();
  }

  if (filterBtn) filterBtn.addEventListener("click", triggerFilter);
  if (searchInput) searchInput.addEventListener("input", triggerFilter);
  if (categorySelect) categorySelect.addEventListener("change", triggerFilter);
  if (priceSelect) priceSelect.addEventListener("change", triggerFilter);

  // Nút thêm vào giỏ ở phần Chi tiết
  const detailAddBtn = document.getElementById("detail-add-btn");
  if (detailAddBtn) {
    detailAddBtn.addEventListener("click", () => {
      const activeBookId = detailAddBtn.getAttribute("data-book-id") || 1;
      addToCart(Number(activeBookId));
    });
  }

  renderProducts();
  // Khởi tạo sách chi tiết mẫu cuốn đầu tiên
  const firstBook = getBooks().find(b => !b.isHidden) || getBooks()[0];
  if (firstBook) selectBookForDetail(firstBook);
}

function renderProducts() {
  const productListEl = document.getElementById("product-list");
  if (!productListEl) return;

  const allBooks = getBooks().filter(b => !b.isHidden);

  // Lọc đa điều kiện
  const filtered = allBooks.filter(book => {
    // 1. Tên sách hoặc tác giả tương đối
    const matchKeyword = !currentFilter.keyword ||
      book.title.toLowerCase().includes(currentFilter.keyword) ||
      book.author.toLowerCase().includes(currentFilter.keyword);

    // 2. Phân loại danh mục
    const matchCategory = !currentFilter.category || book.category === currentFilter.category;

    // 3. Khoảng giá
    let matchPrice = true;
    if (currentFilter.price === "under100") {
      matchPrice = book.price < 100000;
    } else if (currentFilter.price === "100to200") {
      matchPrice = book.price >= 100000 && book.price <= 200000;
    } else if (currentFilter.price === "above200") {
      matchPrice = book.price > 200000;
    }

    return matchKeyword && matchCategory && matchPrice;
  });

  const resultsInfo = document.getElementById("search-results-info");
  if (resultsInfo) {
    if (currentFilter.keyword || currentFilter.category || currentFilter.price) {
      resultsInfo.innerHTML = `Tìm thấy <strong>${filtered.length}</strong> cuốn sách phù hợp.`;
    } else {
      resultsInfo.textContent = "Sách hay được tìm thấy từ một lần dừng chân.";
    }
  }

  if (filtered.length === 0) {
    productListEl.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 45px 20px; background: white; border-radius: 16px; border: 1px solid var(--line);">
        <p style="font-size: 16px; color: var(--muted); margin-bottom: 12px">Không tìm thấy tựa sách nào khớp với điều kiện tìm kiếm.</p>
        <button class="button button-small" onclick="resetFilters()">Xem tất cả sách</button>
      </div>
    `;
    renderPagination(0);
    return;
  }

  // Phân trang
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  if (currentPage > totalPages) currentPage = totalPages;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  productListEl.innerHTML = pageItems.map(book => {
    const coverHtml = book.image
      ? `<img src="${book.image}" alt="${book.title}">`
      : `<div class="cover-title">${book.title.toUpperCase()}<small>${book.author.toUpperCase()}</small></div>`;

    return `
      <article class="product-card" data-id="${book.id}">
        <a href="#chi-tiet" class="book-card-link" data-id="${book.id}">
          <div class="product-cover ${book.coverClass || 'cover-olive'}">
            ${book.tag ? `<span class="tag">${book.tag}</span>` : ""}
            ${coverHtml}
          </div>
          <p class="category-name">${book.category.toUpperCase()}</p>
          <h3 title="${book.title}">${book.title}</h3>
        </a>
        <div class="rating">★★★★★ <span>(${book.reviews || 99} đánh giá)</span></div>
        <div class="price-row">
          <div class="price">${formatVND(book.price)} ${book.oldPrice ? `<span class="old-price">${formatVND(book.oldPrice)}</span>` : ""}</div>
          <button class="add-button" type="button" aria-label="Thêm vào giỏ" onclick="addToCart(${book.id})">+</button>
        </div>
      </article>
    `;
  }).join("");

  // Bắt sự kiện click mở chi tiết sách
  const bookLinks = productListEl.querySelectorAll(".book-card-link");
  bookLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const id = Number(link.getAttribute("data-id"));
      const book = getBooks().find(b => b.id === id);
      if (book) {
        selectBookForDetail(book);
        const detailSection = document.getElementById("chi-tiet");
        if (detailSection) detailSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  renderPagination(totalPages);
}

function resetFilters() {
  const searchInput = document.getElementById("search");
  const categorySelect = document.getElementById("category");
  const priceSelect = document.getElementById("price");
  if (searchInput) searchInput.value = "";
  if (categorySelect) categorySelect.value = "";
  if (priceSelect) priceSelect.value = "";
  document.querySelectorAll(".category-card").forEach(c => c.classList.remove("active"));
  currentFilter = { keyword: "", category: "", price: "" };
  currentPage = 1;
  renderProducts();
}

function renderPagination(totalPages) {
  const paginEl = document.getElementById("product-pagination");
  if (!paginEl) return;
  if (totalPages <= 1) {
    paginEl.innerHTML = "";
    return;
  }
  let html = "";
  for (let i = 1; i <= totalPages; i++) {
    html += `<span class="page-number ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</span>`;
  }
  paginEl.innerHTML = html;
}

window.goToPage = function(page) {
  currentPage = page;
  renderProducts();
  document.getElementById("sach-moi").scrollIntoView({ behavior: "smooth" });
};

// Hiển thị chi tiết sách vào section #chi-tiet
function selectBookForDetail(book) {
  const coverBox = document.getElementById("detail-cover-box");
  const catEl = document.getElementById("detail-category");
  const titleEl = document.getElementById("detail-title");
  const ratingEl = document.getElementById("detail-rating");
  const priceEl = document.getElementById("detail-price");
  const descEl = document.getElementById("detail-desc");
  const authorEl = document.getElementById("detail-author");
  const pubEl = document.getElementById("detail-publisher");
  const coverTypeEl = document.getElementById("detail-cover-type");
  const pagesEl = document.getElementById("detail-pages");
  const addBtn = document.getElementById("detail-add-btn");

  if (!titleEl) return;

  if (coverBox) {
    coverBox.innerHTML = `
      <div class="product-cover ${book.coverClass || 'cover-olive'}">
        ${book.image ? `<img src="${book.image}" alt="${book.title}">` : `<div class="cover-title">${book.title.toUpperCase()}<small>${book.author.toUpperCase()}</small></div>`}
      </div>
    `;
  }
  if (catEl) catEl.textContent = book.category;
  if (titleEl) titleEl.textContent = book.title;
  if (ratingEl) ratingEl.innerHTML = `★★★★★ <span>${book.rating || 4.9} · ${book.reviews || 100} đánh giá</span>`;
  if (priceEl) {
    priceEl.innerHTML = `${formatVND(book.price)} ${book.oldPrice ? `<span class="old-price">${formatVND(book.oldPrice)}</span>` : ""}`;
  }
  if (descEl) descEl.textContent = book.desc || "Một tác phẩm đáng đọc dành cho những người yêu sách.";
  if (authorEl) authorEl.textContent = book.author;
  if (pubEl) pubEl.textContent = book.publisher || "NXB Trẻ";
  if (coverTypeEl) coverTypeEl.textContent = book.coverType || "Bìa mềm";
  if (pagesEl) pagesEl.textContent = book.pages || "250 trang";
  if (addBtn) addBtn.setAttribute("data-book-id", book.id);
}

// Thêm vào giỏ hàng
window.addToCart = function(bookId) {
  const books = getBooks();
  const book = books.find(b => b.id === bookId);
  if (!book) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === bookId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: bookId, qty: 1 });
  }
  saveCart(cart);
  showToast(`Đã thêm <strong>"${book.title}"</strong> vào giỏ hàng!`);
};

// ==========================================
// 4. GIỎ HÀNG (CART.HTML) LOGIC
// ==========================================

function initCartPage() {
  const cartContainer = document.getElementById("cart-items-container");
  if (!cartContainer) return;

  const currentUser = getCurrentUser();

  // Điền thông tin người đăng nhập
  const cartUserName = document.getElementById("cart-user-name");
  const cartUserEmail = document.getElementById("cart-user-email");
  const cartUserPhone = document.getElementById("cart-user-phone");
  const defaultAddressInfo = document.getElementById("cart-default-address-info");

  if (cartUserName) cartUserName.textContent = currentUser.name;
  if (cartUserEmail) cartUserEmail.textContent = currentUser.email;
  if (cartUserPhone) cartUserPhone.textContent = currentUser.phone;
  if (defaultAddressInfo) {
    defaultAddressInfo.innerHTML = `${currentUser.name} · ${currentUser.phone}<br>${currentUser.address}`;
  }

  // Chuyển đổi chọn địa chỉ: Địa chỉ tài khoản vs Nhập địa chỉ mới
  const addressRadios = document.querySelectorAll('input[name="address_choice"]');
  const newAddressForm = document.getElementById("new-address-form");
  const labelDefault = document.getElementById("label-address-default");
  const labelNew = document.getElementById("label-address-new");

  addressRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "new") {
        if (newAddressForm) newAddressForm.style.display = "grid";
        if (labelDefault) labelDefault.classList.remove("selected");
        if (labelNew) labelNew.classList.add("selected");
      } else {
        if (newAddressForm) newAddressForm.style.display = "none";
        if (labelDefault) labelDefault.classList.add("selected");
        if (labelNew) labelNew.classList.remove("selected");
      }
    });
  });

  // Chuyển đổi hình thức thanh toán (highlight choice)
  const paymentRadios = document.querySelectorAll('input[name="payment"]');
  paymentRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      document.querySelectorAll(".payment-options .payment-choice").forEach(l => l.classList.remove("selected"));
      radio.closest("label").classList.add("selected");
    });
  });

  // Nút xác nhận đặt hàng
  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", handleCheckout);
  }

  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById("cart-items-container");
  if (!container) return;

  const cart = getCart();
  const books = getBooks();
  const countLabel = document.getElementById("cart-count-label");
  const summaryCount = document.getElementById("summary-items-count");
  const summarySubtotal = document.getElementById("summary-subtotal");
  const summaryShipping = document.getElementById("summary-shipping");
  const summaryTotal = document.getElementById("summary-total");

  let totalQty = 0;
  let subtotal = 0;

  const validCartItems = [];

  cart.forEach(item => {
    const book = books.find(b => b.id === item.id);
    if (book) {
      validCartItems.push({ book, qty: item.qty });
      totalQty += item.qty;
      subtotal += book.price * item.qty;
    }
  });

  if (countLabel) countLabel.textContent = `(${totalQty} sản phẩm)`;
  if (summaryCount) summaryCount.textContent = totalQty;

  const shippingFee = subtotal >= 300000 || totalQty === 0 ? 0 : 25000;
  const total = subtotal + shippingFee;

  if (summarySubtotal) summarySubtotal.textContent = formatVND(subtotal);
  if (summaryShipping) summaryShipping.textContent = shippingFee === 0 ? (totalQty === 0 ? "0đ" : "Miễn phí") : formatVND(shippingFee);
  if (summaryTotal) summaryTotal.textContent = formatVND(total);

  if (validCartItems.length === 0) {
    container.innerHTML = `
      <div style="text-align:center;padding:35px 20px">
        <p style="color:var(--muted);font-size:14px">Giỏ hàng của bạn đang trống.</p>
        <a class="button button-small" href="index.html#sach-moi" style="margin-top:8px">Khám phá sách ngay</a>
      </div>
    `;
    const checkoutBtn = document.getElementById("checkout-btn");
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) checkoutBtn.disabled = false;

  container.innerHTML = validCartItems.map(({ book, qty }) => {
    const coverHtml = book.image
      ? `<img src="${book.image}" alt="${book.title}">`
      : book.title.toUpperCase();

    return `
      <article class="cart-item">
        <div class="cart-mini-cover ${book.coverClass || 'cover-olive'}">
          ${coverHtml}
        </div>
        <div>
          <h3>${book.title}</h3>
          <p>${book.author} · ${book.coverType || 'Bìa mềm'}</p>
          <div class="qty">
            <span style="cursor:pointer" onclick="changeCartQty(${book.id}, -1)">−</span>
            <strong>${qty}</strong>
            <span style="cursor:pointer" onclick="changeCartQty(${book.id}, 1)">+</span>
          </div>
        </div>
        <div>
          <strong>${formatVND(book.price * qty)}</strong>
          <div style="text-align:right;margin-top:6px">
            <a href="javascript:void(0)" onclick="changeCartQty(${book.id}, -999)" style="font-size:11px;color:#a6624e">Xóa</a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

window.changeCartQty = function(bookId, delta) {
  let cart = getCart();
  const item = cart.find(i => i.id === bookId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== bookId);
  }
  saveCart(cart);
  renderCartItems();
};

function handleCheckout() {
  const cart = getCart();
  const books = getBooks();
  if (cart.length === 0) {
    alert("Giỏ hàng của bạn đang trống!");
    return;
  }

  const currentUser = getCurrentUser();
  const addressChoice = document.querySelector('input[name="address_choice"]:checked')?.value || "default";

  let finalRecipient = currentUser.name;
  let finalPhone = currentUser.phone;
  let finalAddress = currentUser.address;
  let locationGuess = "Quận 1";

  if (addressChoice === "new") {
    const newName = document.getElementById("new-recipient-name")?.value.trim();
    const newPhone = document.getElementById("new-recipient-phone")?.value.trim();
    const newAddr = document.getElementById("new-recipient-address")?.value.trim();

    if (newName) finalRecipient = newName;
    if (newPhone) finalPhone = newPhone;
    if (newAddr) finalAddress = newAddr;
  }

  // Đoán vị trí quận từ địa chỉ
  if (finalAddress.includes("Quận 3") || finalAddress.includes("Q3")) locationGuess = "Quận 3";
  else if (finalAddress.includes("Thủ Đức")) locationGuess = "Thủ Đức";
  else if (finalAddress.includes("Bình Thạnh")) locationGuess = "Bình Thạnh";
  else if (finalAddress.includes("Hà Nội")) locationGuess = "Hà Nội";
  else if (finalAddress.includes("Quận 1") || finalAddress.includes("Q1")) locationGuess = "Quận 1";

  const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value || "Tiền mặt khi nhận hàng";

  let subtotal = 0;
  const items = [];
  cart.forEach(item => {
    const book = books.find(b => b.id === item.id);
    if (book) {
      items.push({ id: book.id, title: book.title, price: book.price, qty: item.qty });
      subtotal += book.price * item.qty;
      book.soldCount = (book.soldCount || 0) + item.qty;
      book.stock = Math.max(0, (book.stock || 20) - item.qty);
    }
  });

  saveBooks(books);

  const shippingFee = subtotal >= 300000 ? 0 : 25000;
  const total = subtotal + shippingFee;

  const newOrderNumber = Math.floor(100 + Math.random() * 900);
  const now = new Date();
  const dateStr = now.toISOString().split("T")[0];

  const newOrder = {
    id: `MB-2025-0${newOrderNumber}`,
    customerName: finalRecipient,
    email: currentUser.email,
    phone: finalPhone,
    date: dateStr,
    location: locationGuess,
    fullAddress: finalAddress,
    items,
    subtotal,
    shippingFee,
    total,
    paymentMethod,
    status: "Chưa xác nhận"
  };

  const orders = getOrders();
  orders.unshift(newOrder);
  saveOrders(orders);

  // Xóa giỏ hàng
  saveCart([]);

  alert(`🎉 Đặt hàng thành công!\nMã đơn hàng của bạn: ${newOrder.id}\nTổng thanh toán: ${formatVND(total)}\n\nĐơn hàng đã được ghi nhận vào lịch sử đơn hàng.`);
  window.location.href = "account.html#lich-su";
}

// ==========================================
// 5. TÀI KHOẢN (ACCOUNT.HTML) LOGIC
// ==========================================

function initAccountPage() {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const ordersListEl = document.getElementById("account-orders-list");

  // Xử lý đăng nhập (cho phép nhập bất kỳ hoặc để trống theo yêu cầu)
  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      const emailInput = document.getElementById("login-email")?.value.trim();
      const currentUser = getCurrentUser();
      if (emailInput) {
        currentUser.email = emailInput;
        currentUser.name = emailInput.split("@")[0] || "Bạn đọc Mộc";
      }
      saveCurrentUser(currentUser);
      showToast(`Chào mừng bạn đọc <strong>${currentUser.name}</strong> đã đăng nhập!`);
      updateAccountUI();
    });
  }

  // Xử lý đăng ký bạn đọc
  if (registerForm) {
    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      const fullName = document.getElementById("full-name")?.value.trim() || "Bạn đọc mới";
      const regEmail = document.getElementById("register-email")?.value.trim() || "user@example.com";
      const regPhone = document.getElementById("register-phone")?.value.trim() || "0900 000 000";

      const newUser = {
        name: fullName,
        email: regEmail,
        phone: regPhone,
        address: "Quận 1, TP. Hồ Chí Minh"
      };
      saveCurrentUser(newUser);

      // Thêm vào danh sách user hệ thống nếu chưa có
      const users = getUsers();
      users.push({
        id: Date.now(),
        name: fullName,
        email: regEmail,
        phone: regPhone,
        address: newUser.address,
        ordersCount: 0,
        isLocked: false
      });
      saveUsers(users);

      showToast(`Tạo tài khoản thành công! Xin chào <strong>${fullName}</strong>`);
      updateAccountUI();
    });
  }

  // Nút đăng xuất
  const logoutBtn = document.getElementById("user-logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      saveCurrentUser({
        name: "Khách vãng lai",
        email: "guest@example.com",
        phone: "",
        address: ""
      });
      showToast("Đã đăng xuất tài khoản!");
      updateAccountUI();
    });
  }

  updateAccountUI();
}

function updateAccountUI() {
  const currentUser = getCurrentUser();
  const displayNameEl = document.getElementById("current-user-display-name");
  const readerBadgeEl = document.getElementById("account-reader-badge");

  if (displayNameEl) displayNameEl.textContent = currentUser.name;
  if (readerBadgeEl) readerBadgeEl.textContent = `Bạn đọc: ${currentUser.name}`;

  renderUserOrderHistory();
}

function renderUserOrderHistory() {
  const ordersListEl = document.getElementById("account-orders-list");
  if (!ordersListEl) return;

  const currentUser = getCurrentUser();
  const allOrders = getOrders();

  // Lọc các đơn của user hiện tại (hoặc hiển thị đơn mẫu nếu là người dùng mặc định)
  const userOrders = allOrders.filter(o =>
    (currentUser.email && o.email === currentUser.email) ||
    o.customerName === currentUser.name ||
    currentUser.name === "Nguyễn Minh Anh"
  );

  if (userOrders.length === 0) {
    ordersListEl.innerHTML = `
      <div style="padding:30px;text-align:center;background:white;border-radius:12px;border:1px solid var(--line)">
        <p style="color:var(--muted);font-size:13px;margin:0">Bạn chưa có đơn hàng nào.</p>
        <a class="button button-small" href="index.html#sach-moi" style="margin-top:12px">Mua sách ngay</a>
      </div>
    `;
    return;
  }

  ordersListEl.innerHTML = userOrders.map(order => {
    const statusClass = order.status === "Đã giao" ? "status-green"
      : order.status === "Đã hủy" ? "status-red"
      : order.status === "Đã xác nhận" ? "status-blue" : "";

    const itemsSummary = order.items.map(i => `${i.title} (${i.qty})`).join(", ");
    const totalItems = order.items.reduce((s, i) => s + i.qty, 0);

    return `
      <article class="order-card">
        <div class="order-top">
          <div>
            <strong>Đơn hàng #${order.id}</strong>
            <p>Ngày đặt: ${order.date} · Giao đến: ${order.fullAddress || order.location} · Hình thức: ${order.paymentMethod}</p>
          </div>
          <span class="status ${statusClass}">${order.status}</span>
        </div>
        <div class="order-body">
          <span>${itemsSummary} <strong>· ${totalItems} sản phẩm</strong></span>
          <strong>${formatVND(order.total)}</strong>
        </div>
      </article>
    `;
  }).join("");
}

// ==========================================
// 6. QUẢN TRỊ VIÊN (ADMIN.HTML & ADMIN-LOGIN.HTML) LOGIC
// ==========================================

function initAdminLoginPage() {
  const form = document.getElementById("admin-login-form");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    localStorage.setItem("mb_adminLoggedIn", "true");
    showToast("Đăng nhập quản trị viên thành công!");
    window.location.href = "admin.html";
  });
}

function initAdminPage() {
  const adminContent = document.getElementById("tong-quan");
  if (!adminContent) return;

  // Kiểm tra đăng nhập URL riêng biệt
  const isAdmin = localStorage.getItem("mb_adminLoggedIn") === "true";
  if (!isAdmin) {
    window.location.href = "admin-login.html";
    return;
  }

  // Đăng xuất Admin
  const logoutBtn = document.getElementById("admin-logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", e => {
      e.preventDefault();
      localStorage.setItem("mb_adminLoggedIn", "false");
      window.location.href = "admin-login.html";
    });
  }

  // Nút mở thêm sách nhanh
  const topAddBtn = document.getElementById("top-add-product-btn");
  const openAddBtn = document.getElementById("admin-open-add-book-btn");
  const formResetBtn = document.getElementById("product-form-reset-btn");

  function scrollToProductForm(isNew = true) {
    if (isNew) resetProductForm();
    const formSection = document.getElementById("form-san-pham");
    if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
  }

  if (topAddBtn) topAddBtn.addEventListener("click", () => scrollToProductForm(true));
  if (openAddBtn) openAddBtn.addEventListener("click", () => scrollToProductForm(true));
  if (formResetBtn) formResetBtn.addEventListener("click", () => resetProductForm());

  // Form Thêm / Sửa sản phẩm
  const productForm = document.getElementById("product-edit-form");
  if (productForm) {
    productForm.addEventListener("submit", handleSaveProduct);
  }

  // Upload hình ảnh xem trước (FileReader)
  const fileInput = document.getElementById("pf-file");
  if (fileInput) {
    fileInput.addEventListener("change", handleImageUploadPreview);
  }

  // Lọc sản phẩm Admin
  const searchBookInput = document.getElementById("admin-book-search");
  const catBookSelect = document.getElementById("admin-book-cat-filter");
  if (searchBookInput) searchBookInput.addEventListener("input", renderAdminBooks);
  if (catBookSelect) catBookSelect.addEventListener("change", renderAdminBooks);

  // Lọc đơn hàng Admin
  const statusOrderSelect = document.getElementById("admin-order-status-filter");
  const fromDateOrder = document.getElementById("admin-order-from-date");
  const toDateOrder = document.getElementById("admin-order-to-date");
  const locationOrder = document.getElementById("admin-order-location-filter");
  const resetOrderFilterBtn = document.getElementById("admin-order-reset-filter");

  if (statusOrderSelect) statusOrderSelect.addEventListener("change", renderAdminOrders);
  if (fromDateOrder) fromDateOrder.addEventListener("change", renderAdminOrders);
  if (toDateOrder) toDateOrder.addEventListener("change", renderAdminOrders);
  if (locationOrder) locationOrder.addEventListener("change", renderAdminOrders);
  if (resetOrderFilterBtn) {
    resetOrderFilterBtn.addEventListener("click", () => {
      if (statusOrderSelect) statusOrderSelect.value = "";
      if (fromDateOrder) fromDateOrder.value = "";
      if (toDateOrder) toDateOrder.value = "";
      if (locationOrder) locationOrder.value = "";
      renderAdminOrders();
    });
  }

  // Quản lý User Admin
  const userSearchInput = document.getElementById("admin-user-search");
  const addUserBtn = document.getElementById("admin-add-user-btn");
  if (userSearchInput) userSearchInput.addEventListener("input", renderAdminUsers);
  if (addUserBtn) addUserBtn.addEventListener("click", handleAdminAddUser);

  // Thống kê Top 5 khách hàng mua nhiều nhất
  const statRunBtn = document.getElementById("stat-run-btn");
  const statResetBtn = document.getElementById("stat-reset-btn");
  if (statRunBtn) statRunBtn.addEventListener("click", calculateTop5Customers);
  if (statResetBtn) statResetBtn.addEventListener("click", () => {
    const fromInput = document.getElementById("stat-from-date");
    const toInput = document.getElementById("stat-to-date");
    if (fromInput) fromInput.value = "";
    if (toInput) toInput.value = "";
    calculateTop5Customers();
  });

  // Render tất cả dữ liệu
  renderAdminOverviewStats();
  renderAdminOrders();
  renderAdminBooks();
  renderAdminUsers();
  calculateTop5Customers();
}

function renderAdminOverviewStats() {
  const orders = getOrders();
  const books = getBooks();
  const users = getUsers();

  const totalRev = orders
    .filter(o => o.status !== "Đã hủy")
    .reduce((sum, o) => sum + (o.total || 0), 0);

  const activeBooks = books.filter(b => !b.isHidden).length;

  const revEl = document.getElementById("stat-total-revenue");
  const ordersEl = document.getElementById("stat-total-orders");
  const booksEl = document.getElementById("stat-active-products");
  const custEl = document.getElementById("stat-total-customers");
  const sidebarOrderCount = document.getElementById("sidebar-order-count");

  if (revEl) revEl.textContent = formatVND(totalRev);
  if (ordersEl) ordersEl.textContent = orders.length;
  if (booksEl) booksEl.textContent = activeBooks;
  if (custEl) custEl.textContent = users.length;
  if (sidebarOrderCount) sidebarOrderCount.textContent = orders.filter(o => o.status === "Chưa xác nhận").length;

  // Mini rows sách yêu thích
  const topBooksContainer = document.getElementById("admin-top-books");
  if (topBooksContainer) {
    const sorted = [...books].sort((a, b) => (b.soldCount || 0) - (a.soldCount || 0)).slice(0, 3);
    topBooksContainer.innerHTML = sorted.map(b => `
      <div class="mini-row">
        <div class="cart-mini-cover ${b.coverClass || 'cover-olive'}">${b.title.substring(0, 8).toUpperCase()}</div>
        <div>
          <strong>${b.title}</strong>
          <span>${b.soldCount || 0} lượt bán</span>
        </div>
        <b style="margin-left:auto">${formatVND((b.soldCount || 0) * b.price)}</b>
      </div>
    `).join("");
  }
}

// ----------------------------------------------------
// QUẢN LÝ ĐƠN HÀNG (CẬP NHẬT CHỈ ĐI XUÔI)
// ----------------------------------------------------

function renderAdminOrders() {
  const tbody = document.getElementById("admin-orders-tbody");
  if (!tbody) return;

  const orders = getOrders();
  const statusFilter = document.getElementById("admin-order-status-filter")?.value;
  const fromDate = document.getElementById("admin-order-from-date")?.value;
  const toDate = document.getElementById("admin-order-to-date")?.value;
  const locationFilter = document.getElementById("admin-order-location-filter")?.value;

  const filtered = orders.filter(o => {
    if (statusFilter && o.status !== statusFilter) return false;
    if (fromDate && o.date < fromDate) return false;
    if (toDate && o.date > toDate) return false;
    if (locationFilter && !o.location?.toLowerCase().includes(locationFilter.toLowerCase()) && !o.fullAddress?.toLowerCase().includes(locationFilter.toLowerCase())) {
      return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:24px;color:var(--muted)">Không có đơn hàng nào khớp với điều kiện lọc.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(order => {
    const statusClass = order.status === "Đã giao" ? "status-green"
      : order.status === "Đã hủy" ? "status-red"
      : order.status === "Đã xác nhận" ? "status-blue" : "";

    // Nút cập nhật chỉ đi xuôi:
    // Chưa xác nhận -> có thể thành: "Đã xác nhận" hoặc "Hủy đơn"
    // Đã xác nhận -> có thể thành: "Đã giao" hoặc "Hủy đơn"
    // Đã giao / Đã hủy -> Hoàn tất, không cho cập nhật ngược lại!
    let updateActionHtml = "";
    if (order.status === "Chưa xác nhận") {
      updateActionHtml = `
        <select onchange="handleAdvanceOrderStatus('${order.id}', this.value)" style="font-size:10px;padding:3px 6px">
          <option value="" disabled selected>Cập nhật xuôi...</option>
          <option value="Đã xác nhận">→ Đã xác nhận</option>
          <option value="Đã hủy">✕ Hủy đơn</option>
        </select>
      `;
    } else if (order.status === "Đã xác nhận") {
      updateActionHtml = `
        <select onchange="handleAdvanceOrderStatus('${order.id}', this.value)" style="font-size:10px;padding:3px 6px">
          <option value="" disabled selected>Cập nhật xuôi...</option>
          <option value="Đã giao">→ Đã giao hàng</option>
          <option value="Đã hủy">✕ Hủy đơn</option>
        </select>
      `;
    } else {
      updateActionHtml = `<span style="color:#89928a;font-size:10px">✓ Đã đóng (Không thể đổi ngược)</span>`;
    }

    return `
      <tr>
        <td><strong>#${order.id}</strong></td>
        <td>${order.customerName}</td>
        <td>${order.date}</td>
        <td>${order.location || order.fullAddress}</td>
        <td><strong>${formatVND(order.total)}</strong></td>
        <td><span class="status ${statusClass}">${order.status}</span></td>
        <td>${updateActionHtml}</td>
        <td><a class="table-action" href="javascript:void(0)" onclick="viewOrderDetail('${order.id}')">Chi tiết →</a></td>
      </tr>
    `;
  }).join("");
}

window.handleAdvanceOrderStatus = function(orderId, newStatus) {
  if (!newStatus) return;
  const orders = getOrders();
  const order = orders.find(o => o.id === orderId);
  if (!order) return;

  // Kiểm tra quy tắc chỉ cập nhật xuôi
  const allowed = {
    "Chưa xác nhận": ["Đã xác nhận", "Đã hủy"],
    "Đã xác nhận": ["Đã giao", "Đã hủy"]
  };

  if (!allowed[order.status] || !allowed[order.status].includes(newStatus)) {
    alert("Lỗi: Trạng thái đơn hàng chỉ có thể cập nhật xuôi, không cho phép cập nhật ngược!");
    renderAdminOrders();
    return;
  }

  order.status = newStatus;
  saveOrders(orders);
  showToast(`Đã chuyển đơn hàng <strong>#${orderId}</strong> sang <strong>"${newStatus}"</strong>`);
  renderAdminOrders();
  renderAdminOverviewStats();
};

window.viewOrderDetail = function(orderId) {
  const order = getOrders().find(o => o.id === orderId);
  if (!order) return;

  const modal = document.getElementById("order-detail-modal");
  const modalId = document.getElementById("modal-order-id");
  const modalContent = document.getElementById("modal-order-content");

  if (modalId) modalId.textContent = `Đơn hàng #${order.id}`;
  if (modalContent) {
    const itemsListHtml = order.items.map(item => `
      <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #f0f1ee">
        <span>${item.title} <strong>x${item.qty}</strong></span>
        <span>${formatVND(item.price * item.qty)}</span>
      </div>
    `).join("");

    modalContent.innerHTML = `
      <div style="background:#f8f9f6;padding:12px;border-radius:10px;margin-bottom:14px">
        <div><strong>Người nhận:</strong> ${order.customerName} (${order.phone || "Không có SĐT"})</div>
        <div><strong>Email:</strong> ${order.email || "Chưa có"}</div>
        <div><strong>Địa chỉ:</strong> ${order.fullAddress || order.location}</div>
        <div><strong>Ngày đặt:</strong> ${order.date}</div>
        <div><strong>Hình thức thanh toán:</strong> ${order.paymentMethod}</div>
        <div><strong>Trạng thái:</strong> <span class="status">${order.status}</span></div>
      </div>
      <div><strong>Danh sách sản phẩm:</strong></div>
      <div style="margin:8px 0 14px">${itemsListHtml}</div>
      <div style="display:flex;justify-content:space-between;padding-top:8px">
        <span>Tạm tính:</span> <span>${formatVND(order.subtotal || order.total)}</span>
      </div>
      <div style="display:flex;justify-content:space-between">
        <span>Phí vận chuyển:</span> <span>${formatVND(order.shippingFee || 0)}</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:15px;font-weight:700;margin-top:8px;padding-top:8px;border-top:1px solid var(--line);color:var(--green)">
        <span>Tổng thanh toán:</span> <span>${formatVND(order.total)}</span>
      </div>
    `;
  }

  if (modal) modal.classList.add("open");
};

window.closeOrderDetailModal = function() {
  const modal = document.getElementById("order-detail-modal");
  if (modal) modal.classList.remove("open");
};

// ----------------------------------------------------
// QUẢN LÝ SẢN PHẨM (THÊM, SỬA, ẨN/XÓA, UPLOAD ẢNH)
// ----------------------------------------------------

let uploadedBase64Image = null;

function handleImageUploadPreview(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    uploadedBase64Image = evt.target.result;
    const previewInner = document.getElementById("pf-preview-inner");
    if (previewInner) {
      previewInner.innerHTML = `
        <div class="cart-mini-cover" style="width:75px;height:100px;margin:0 auto 8px;overflow:hidden">
          <img src="${uploadedBase64Image}" alt="Xem trước" style="width:100%;height:100%;object-fit:cover">
        </div>
        <span style="color:var(--green);font-weight:700">✓ Đã tải ảnh lên</span>
      `;
    }
  };
  reader.readAsDataURL(file);
}

function resetProductForm() {
  document.getElementById("pf-id").value = "";
  document.getElementById("pf-title").value = "";
  document.getElementById("pf-category").value = "Văn học";
  document.getElementById("pf-price").value = "";
  document.getElementById("pf-author").value = "";
  document.getElementById("pf-stock").value = "20";
  document.getElementById("pf-desc").value = "";
  document.getElementById("pf-file").value = "";
  uploadedBase64Image = null;

  const previewInner = document.getElementById("pf-preview-inner");
  if (previewInner) {
    previewInner.innerHTML = `
      <div class="cart-mini-cover cover-olive" style="margin:0 auto 8px">BÌA SÁCH</div>
      <span>Xem trước hình ảnh bìa</span>
    `;
  }

  const heading = document.getElementById("product-form-heading");
  if (heading) heading.textContent = "Thêm sản phẩm sách mới";
}

function handleSaveProduct(e) {
  e.preventDefault();

  const idVal = document.getElementById("pf-id").value;
  const title = document.getElementById("pf-title").value.trim();
  const category = document.getElementById("pf-category").value;
  const price = Number(document.getElementById("pf-price").value);
  const author = document.getElementById("pf-author").value.trim();
  const stock = Number(document.getElementById("pf-stock").value) || 0;
  const desc = document.getElementById("pf-desc").value.trim();

  if (!title || !price || !author) {
    alert("Vui lòng điền đầy đủ Tên sách, Giá bán và Tác giả!");
    return;
  }

  const books = getBooks();

  if (idVal) {
    // Sửa sản phẩm
    const book = books.find(b => b.id === Number(idVal));
    if (book) {
      book.title = title;
      book.category = category;
      book.price = price;
      book.author = author;
      book.stock = stock;
      book.desc = desc;
      if (uploadedBase64Image) {
        book.image = uploadedBase64Image;
      }
      saveBooks(books);
      showToast(`Đã cập nhật thông tin sách <strong>"${title}"</strong>!`);
    }
  } else {
    // Thêm sản phẩm mới
    const colors = ["cover-olive", "cover-clay", "cover-blue", "cover-gold", "cover-plum", "cover-mint"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newBook = {
      id: Date.now(),
      title,
      author,
      category,
      price,
      oldPrice: 0,
      coverClass: randomColor,
      tag: "Mới",
      rating: 5.0,
      reviews: 0,
      publisher: "NXB Trẻ",
      coverType: "Bìa mềm",
      pages: "250 trang",
      desc: desc || "Tác phẩm mới được bổ sung vào tủ sách Mộc Books.",
      stock,
      soldCount: 0,
      isHidden: false,
      image: uploadedBase64Image
    };
    books.unshift(newBook);
    saveBooks(books);
    showToast(`Đã thêm sách <strong>"${title}"</strong> vào danh mục <em>${category}</em>!`);
  }

  resetProductForm();
  renderAdminBooks();
  renderAdminOverviewStats();
}

function renderAdminBooks() {
  const tbody = document.getElementById("admin-books-tbody");
  if (!tbody) return;

  const books = getBooks();
  const search = document.getElementById("admin-book-search")?.value.trim().toLowerCase() || "";
  const catFilter = document.getElementById("admin-book-cat-filter")?.value || "";

  const filtered = books.filter(b => {
    const matchSearch = !search || b.title.toLowerCase().includes(search) || b.author.toLowerCase().includes(search);
    const matchCat = !catFilter || b.category === catFilter;
    return matchSearch && matchCat;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:24px;color:var(--muted)">Không có sách nào khớp với tìm kiếm.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(b => {
    const isSold = (b.soldCount || 0) > 0;
    const statusText = b.isHidden ? "Đã ẩn" : "Đang bán";
    const statusClass = b.isHidden ? "status-red" : "status-green";

    return `
      <tr>
        <td>
          <div class="table-book">
            <div class="cart-mini-cover ${b.coverClass || 'cover-olive'}" style="overflow:hidden">
              ${b.image ? `<img src="${b.image}" alt="${b.title}">` : b.title.substring(0, 6).toUpperCase()}
            </div>
            <div>
              <strong>${b.title}</strong>
              <div style="font-size:9px;color:var(--muted)">${b.author}</div>
            </div>
          </div>
        </td>
        <td>${b.category}</td>
        <td><strong>${formatVND(b.price)}</strong></td>
        <td>${b.stock || 0}</td>
        <td>${b.soldCount || 0}</td>
        <td><span class="status ${statusClass}">${statusText}</span></td>
        <td>
          <a class="table-action" href="javascript:void(0)" onclick="loadBookToEdit(${b.id})">Sửa</a>
          <span style="color:#dce4d9"> · </span>
          <a class="table-action" href="javascript:void(0)" style="color:#a6624e" onclick="handleDeleteOrHideBook(${b.id})">
            ${isSold ? (b.isHidden ? "Mở lại" : "Ẩn") : "Xóa"}
          </a>
        </td>
      </tr>
    `;
  }).join("");
}

window.loadBookToEdit = function(bookId) {
  const books = getBooks();
  const book = books.find(b => b.id === bookId);
  if (!book) return;

  document.getElementById("pf-id").value = book.id;
  document.getElementById("pf-title").value = book.title;
  document.getElementById("pf-category").value = book.category;
  document.getElementById("pf-price").value = book.price;
  document.getElementById("pf-author").value = book.author;
  document.getElementById("pf-stock").value = book.stock || 0;
  document.getElementById("pf-desc").value = book.desc || "";

  uploadedBase64Image = book.image || null;
  const previewInner = document.getElementById("pf-preview-inner");
  if (previewInner) {
    if (book.image) {
      previewInner.innerHTML = `
        <div class="cart-mini-cover" style="width:75px;height:100px;margin:0 auto 8px;overflow:hidden">
          <img src="${book.image}" alt="Xem trước" style="width:100%;height:100%;object-fit:cover">
        </div>
        <span style="color:var(--green)">Ảnh hiện tại</span>
      `;
    } else {
      previewInner.innerHTML = `
        <div class="cart-mini-cover ${book.coverClass || 'cover-olive'}" style="margin:0 auto 8px">${book.title.substring(0, 8).toUpperCase()}</div>
        <span>Bìa màu mặc định</span>
      `;
    }
  }

  const heading = document.getElementById("product-form-heading");
  if (heading) heading.textContent = `Chỉnh sửa: ${book.title}`;

  document.getElementById("form-san-pham").scrollIntoView({ behavior: "smooth" });
};

// Đề bài yêu cầu:
// "kiểm tra nếu sản phẩm đã được bán ra thì ẩn sản phẩm hiển thị trên web, nếu sản phẩm chưa được bán ra thì hỏi lại và tiến hành xoá sản phẩm đó."
window.handleDeleteOrHideBook = function(bookId) {
  let books = getBooks();
  const book = books.find(b => b.id === bookId);
  if (!book) return;

  const orders = getOrders();
  // Kiểm tra xem sản phẩm đã từng nằm trong đơn hàng nào hoặc có soldCount > 0
  const hasSoldInOrders = orders.some(o => o.items && o.items.some(i => i.id === bookId));
  const isSold = (book.soldCount || 0) > 0 || hasSoldInOrders;

  if (isSold) {
    // ĐÃ BÁN RA -> ẨN / MỞ LẠI
    if (book.isHidden) {
      book.isHidden = false;
      saveBooks(books);
      showToast(`Đã mở lại hiển thị sách <strong>"${book.title}"</strong> trên cửa hàng.`);
    } else {
      alert(`ℹ Thông báo nghiệp vụ:\nSách "${book.title}" đã được bán ra (${book.soldCount} lượt bán trong đơn hàng).\nTheo quy định, hệ thống sẽ ẨN sản phẩm này khỏi cửa hàng thay vì xóa vĩnh viễn để bảo toàn lịch sử đơn hàng.`);
      book.isHidden = true;
      saveBooks(books);
      showToast(`Đã ẩn sách <strong>"${book.title}"</strong> khỏi cửa hàng bạn đọc.`);
    }
  } else {
    // CHƯA BÁN RA -> HỎI LẠI VÀ TIẾN HÀNH XÓA
    const confirmed = confirm(`Sách "${book.title}" chưa phát sinh đơn bán nào.\nBạn có chắc chắn muốn XÓA VĨNH VIỄN sản phẩm này khỏi hệ thống không?`);
    if (confirmed) {
      books = books.filter(b => b.id !== bookId);
      saveBooks(books);
      showToast(`Đã xóa vĩnh viễn sách <strong>"${book.title}"</strong>!`);
    }
  }

  renderAdminBooks();
  renderAdminOverviewStats();
};

// ----------------------------------------------------
// QUẢN LÝ USER (THÊM, SỬA, KHÓA / MỞ KHÓA USER)
// ----------------------------------------------------

function renderAdminUsers() {
  const tbody = document.getElementById("admin-users-tbody");
  if (!tbody) return;

  const users = getUsers();
  const search = document.getElementById("admin-user-search")?.value.trim().toLowerCase() || "";

  const filtered = users.filter(u =>
    !search || u.name.toLowerCase().includes(search) || u.email.toLowerCase().includes(search)
  );

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:20px;color:var(--muted)">Không tìm thấy khách hàng.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(u => {
    const statusText = u.isLocked ? "Đã khóa" : "Hoạt động";
    const statusClass = u.isLocked ? "status-red" : "status-green";

    return `
      <tr>
        <td><strong>${u.name}</strong></td>
        <td>${u.email}<br><span style="font-size:9px;color:var(--muted)">${u.phone || "Chưa có SĐT"}</span></td>
        <td>${u.ordersCount || 0}</td>
        <td><span class="status ${statusClass} clickable" onclick="toggleUserLock(${u.id})">${statusText}</span></td>
        <td>
          <a class="table-action" href="javascript:void(0)" onclick="editUserPrompt(${u.id})">Sửa</a>
          <span style="color:#dce4d9"> · </span>
          <a class="table-action" href="javascript:void(0)" style="color:${u.isLocked ? 'var(--green)' : '#a6624e'}" onclick="toggleUserLock(${u.id})">
            ${u.isLocked ? "Mở khóa" : "Khóa"}
          </a>
        </td>
      </tr>
    `;
  }).join("");
}

function handleAdminAddUser() {
  const name = prompt("Nhập họ và tên khách hàng mới:");
  if (!name || !name.trim()) return;

  const email = prompt("Nhập email khách hàng:", `${name.toLowerCase().replace(/\s+/g, "")}@example.com`) || "user@example.com";
  const phone = prompt("Nhập số điện thoại:", "0900 123 456") || "0900 123 456";

  const users = getUsers();
  const newUser = {
    id: Date.now(),
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    address: "TP. Hồ Chí Minh",
    ordersCount: 0,
    isLocked: false
  };

  users.unshift(newUser);
  saveUsers(users);
  showToast(`Đã thêm bạn đọc <strong>${newUser.name}</strong> vào hệ thống!`);
  renderAdminUsers();
  renderAdminOverviewStats();
}

window.editUserPrompt = function(userId) {
  const users = getUsers();
  const u = users.find(item => item.id === userId);
  if (!u) return;

  const newName = prompt("Chỉnh sửa họ tên khách hàng:", u.name);
  if (newName !== null && newName.trim()) {
    u.name = newName.trim();
  }
  const newPhone = prompt("Chỉnh sửa số điện thoại:", u.phone || "");
  if (newPhone !== null) {
    u.phone = newPhone.trim();
  }

  saveUsers(users);
  showToast(`Đã cập nhật thông tin bạn đọc <strong>${u.name}</strong>!`);
  renderAdminUsers();
};

window.toggleUserLock = function(userId) {
  const users = getUsers();
  const u = users.find(item => item.id === userId);
  if (!u) return;

  u.isLocked = !u.isLocked;
  saveUsers(users);
  showToast(`Đã ${u.isLocked ? "KHÓA" : "MỞ KHÓA"} tài khoản <strong>${u.name}</strong>.`);
  renderAdminUsers();
};

// ----------------------------------------------------
// THỐNG KÊ TOP 5 KHÁCH HÀNG CÓ TỔNG TIỀN MUA CAO NHẤT
// ----------------------------------------------------

function calculateTop5Customers() {
  const tbody = document.getElementById("admin-top5-tbody");
  if (!tbody) return;

  const orders = getOrders();
  const fromDate = document.getElementById("stat-from-date")?.value;
  const toDate = document.getElementById("stat-to-date")?.value;

  // Lọc các đơn hợp lệ (loại đơn hủy) trong khoảng ngày được chọn
  const validOrders = orders.filter(o => {
    if (o.status === "Đã hủy") return false;
    if (fromDate && o.date < fromDate) return false;
    if (toDate && o.date > toDate) return false;
    return true;
  });

  // Gom nhóm theo khách hàng
  const customerMap = {};

  validOrders.forEach(order => {
    const key = order.customerName || order.email || "Khách vãng lai";
    if (!customerMap[key]) {
      customerMap[key] = {
        name: key,
        email: order.email,
        phone: order.phone,
        totalSpent: 0,
        orders: []
      };
    }
    customerMap[key].totalSpent += order.total || 0;
    customerMap[key].orders.push(order);
  });

  // Chuyển thành mảng và sắp xếp GIẢM DẦN theo tổng tiền mua
  const sortedCustomers = Object.values(customerMap).sort((a, b) => b.totalSpent - a.totalSpent);
  const top5 = sortedCustomers.slice(0, 5);

  if (top5.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:24px;color:var(--muted)">Không có đơn hàng thành công nào trong khoảng thời gian đã chọn.</td></tr>`;
    return;
  }

  tbody.innerHTML = top5.map((cust, index) => {
    const rankStr = `0${index + 1}`;
    const latestOrder = cust.orders[0];
    const latestOrderStr = latestOrder ? `#${latestOrder.id} · ${latestOrder.date}` : "Chưa có";

    return `
      <tr>
        <td><strong>${rankStr}</strong></td>
        <td>
          <strong>${cust.name}</strong>
          <div style="font-size:9px;color:var(--muted)">${cust.email || ""}</div>
        </td>
        <td>${cust.orders.length}</td>
        <td>${latestOrderStr}</td>
        <td><strong style="color:var(--green)">${formatVND(cust.totalSpent)}</strong></td>
        <td>
          <a class="table-action" href="javascript:void(0)" onclick="viewCustomerOrders('${cust.name}')">Xem đơn (${cust.orders.length}) →</a>
        </td>
      </tr>
    `;
  }).join("");
}

window.viewCustomerOrders = function(customerName) {
  const orders = getOrders().filter(o => o.customerName === customerName);
  if (orders.length === 0) return;

  const modal = document.getElementById("order-detail-modal");
  const modalId = document.getElementById("modal-order-id");
  const modalContent = document.getElementById("modal-order-content");

  if (modalId) modalId.textContent = `Lịch sử đơn của: ${customerName}`;
  if (modalContent) {
    modalContent.innerHTML = `
      <p style="margin-top:0;color:var(--muted)">Tổng cộng có <strong>${orders.length}</strong> đơn hàng đã được ghi nhận:</p>
      <div style="display:grid;gap:10px;max-height:55vh;overflow-y:auto;padding-right:6px">
        ${orders.map(o => `
          <div style="padding:12px;border:1px solid var(--line);border-radius:10px;background:#fbfaf6">
            <div style="display:flex;justify-content:space-between;margin-bottom:6px">
              <strong>#${o.id}</strong>
              <span class="status">${o.status}</span>
            </div>
            <div style="font-size:11px;color:var(--muted)">Ngày: ${o.date} · Đ/c: ${o.fullAddress || o.location}</div>
            <div style="margin:6px 0;font-size:12px">Sách: ${o.items.map(i => `${i.title} (x${i.qty})`).join(", ")}</div>
            <div style="text-align:right;font-weight:700;color:var(--green)">Tổng: ${formatVND(o.total)}</div>
          </div>
        `).join("")}
      </div>
    `;
  }

  if (modal) modal.classList.add("open");
};

// ==========================================
// 7. KHỞI CHẠY HỆ THỐNG KHI TRANG TẢI
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  updateHeaderStats();
  initIndexPage();
  initCartPage();
  initAccountPage();
  initAdminLoginPage();
  initAdminPage();
});
