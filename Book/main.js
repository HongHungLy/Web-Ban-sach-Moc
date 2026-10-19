/**
 * MỘC BOOKS — Hệ thống mã nguồn Javascript xử lý giao diện & lưu trữ LocalStorage
 * Cấu trúc module hóa: End-user (trang chủ, chi tiết, tìm kiếm, giỏ hàng, tài khoản, lịch sử đơn)
 * và Web-admin (tách riêng từng trang: dashboard, orders, products, product-form, customers, stats)
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
    image: "images/di-tim-le-song.jpg"
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
    image: "images/Nha-gia-kim.jpg"
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
    image: "images/tuoi-tre-dang-gia-bao-nhieu.jpg"
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
    coverType: "Bìa cứng",
    pages: "300 trang",
    desc: "Bản tình ca da diết về tình yêu đơn phương trong sáng và hoài niệm tuổi thơ dưới bóng cây bàng làng Đo Đo.",
    stock: 22,
    soldCount: 88,
    isHidden: false,
    image: "images/mat-biec.jpg"
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
    image: "images/rung-na-uy.jpg"
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
    image: "images/cay-cam-ngot-cua-toi sach.jpg"
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
    image: "images/Luoc-su-thoi-gian.jpg"
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
    image: "images/hoang-tu-be-sach.jpg"
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
    image: "images/vu-tru-trong-vo-hat-de.jpg"
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
    image: "images/dac-nhan-tam.jpg"
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
    image: "images/de-men-phieu-luu-ky.jpg"
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
    coverType: "Bìa cứng",
    pages: "364 trang",
    desc: "Tiểu thuyết tái hiện thời niên thiếu và con đường ra đi tìm đường cứu nước của Bác Hồ với lời văn mộc mạc và chân thành.",
    stock: 18,
    soldCount: 0, // Chưa bán cuốn nào -> để kiểm tra chức năng xóa hẳn
    isHidden: false,
    image: "images/bup-sen-xanh.jpg"
  },
  {
    id: 13,
    title: "Hạt giống tâm hồn",
    author: "Jack Canfield & Mark Victor Hansen",
    category: "Kỹ năng sống",
    price: 75000,
    oldPrice: 88000,
    coverClass: "cover-gold",
    tag: "Ý nghĩa",
    rating: 4.8,
    reviews: 85,
    publisher: "NXB Tổng Hợp TP.HCM",
    coverType: "Bìa mềm",
    pages: "216 trang",
    desc: "Những câu chuyện nhỏ lay động lòng người, đem lại niềm tin, nghị lực và bài học yêu thương cuộc sống.",
    stock: 30,
    soldCount: 72,
    isHidden: false,
    image: "images/hat-giong-tam-hon.jpg"
  },
  {
    id: 14,
    title: "Dám bị ghét",
    author: "Kishimi Ichiro & Koga Fumitake",
    category: "Kỹ năng sống",
    price: 96000,
    oldPrice: 115000,
    coverClass: "cover-clay",
    tag: "Bán chạy",
    rating: 4.9,
    reviews: 140,
    publisher: "NXB Nhã Nam",
    coverType: "Bìa mềm",
    pages: "336 trang",
    desc: "Dưới hình thức đối thoại giữa chàng thanh niên và triết gia, cuốn sách giải mã tâm lý học Adler giúp bạn dũng cảm sống cuộc đời tự do của chính mình.",
    stock: 28,
    soldCount: 135,
    isHidden: false,
    image: "images/dam-bi-ghet.jpg"
  },
  {
    id: 15,
    title: "Sapiens: Lược sử loài người",
    author: "Yuval Noah Harari",
    category: "Khoa học",
    price: 175000,
    oldPrice: 205000,
    coverClass: "cover-olive",
    tag: "Đặc sắc",
    rating: 5.0,
    reviews: 215,
    publisher: "NXB Tri Thức",
    coverType: "Bìa cứng",
    pages: "560 trang",
    desc: "Công trình kinh điển bao quát toàn bộ tiến trình lịch sử sinh học và xã hội của loài người từ thời kỳ đồ đá cho đến kỷ nguyên hiện đại.",
    stock: 20,
    soldCount: 180,
    isHidden: false,
    image: "images/sapiens-luoc-su-ve-loai-nguoi.jpg"
  },
  {
    id: 16,
    title: "Nguồn gốc các loài",
    author: "Charles Darwin",
    category: "Khoa học",
    price: 135000,
    oldPrice: 0,
    coverClass: "cover-mint",
    tag: "Kinh điển",
    rating: 4.8,
    reviews: 48,
    publisher: "NXB Thế Giới",
    coverType: "Bìa mềm",
    pages: "480 trang",
    desc: "Tác phẩm đặt nền móng vĩ đại cho thuyết tiến hóa và sinh học hiện đại qua cơ chế chọn lọc tự nhiên.",
    stock: 16,
    soldCount: 42,
    isHidden: false,
    image: "images/nguon-goc-cac-loai.jpg"
  },
  {
    id: 17,
    title: "Bản thiết kế vĩ đại",
    author: "Stephen Hawking & Leonard Mlodinow",
    category: "Khoa học",
    price: 115000,
    oldPrice: 130000,
    coverClass: "cover-blue",
    tag: "",
    rating: 4.7,
    reviews: 38,
    publisher: "NXB Trẻ",
    coverType: "Bìa mềm",
    pages: "260 trang",
    desc: "Giải thích nguồn gốc của vũ trụ và bản chất của hiện thực thông qua lý thuyết M và những khám phá vật lý lượng tử tiên tiến.",
    stock: 22,
    soldCount: 38,
    isHidden: false,
    image: "images/ban-thiet-ke-vi-dai.jpg"
  },
  {
    id: 18,
    title: "Khu vườn bí mật",
    author: "Frances Hodgson Burnett",
    category: "Sách thiếu nhi",
    price: 85000,
    oldPrice: 98000,
    coverClass: "cover-plum",
    tag: "Kinh điển",
    rating: 4.9,
    reviews: 95,
    publisher: "NXB Kim Đồng",
    coverType: "Bìa mềm",
    pages: "312 trang",
    desc: "Câu chuyện kỳ diệu về một khu vườn bị lãng quên và sức mạnh chữa lành kỳ diệu của thiên nhiên, tình bạn dành cho trẻ thơ.",
    stock: 35,
    soldCount: 90,
    isHidden: false,
    image: "images/khu-vuon-bi-mat.jpg"
  },
  {
    id: 19,
    title: "Góc sân và khoảng trời",
    author: "Trần Đăng Khoa",
    category: "Sách thiếu nhi",
    price: 62000,
    oldPrice: 0,
    coverClass: "cover-gold",
    tag: "Thơ hay",
    rating: 4.9,
    reviews: 110,
    publisher: "NXB Kim Đồng",
    coverType: "Bìa mềm",
    pages: "140 trang",
    desc: "Tập thơ hồn nhiên, trong trẻo vẽ nên bức tranh làng quê Việt Nam thân thương qua đôi mắt của cậu bé Trần Đăng Khoa.",
    stock: 40,
    soldCount: 105,
    isHidden: false,
    image: "images/Goc_san_va_khoang_troi.jpg"
  },
  {
    id: 20,
    title: "Không gia đình",
    author: "Hector Malot",
    category: "Sách thiếu nhi",
    price: 110000,
    oldPrice: 135000,
    coverClass: "cover-olive",
    tag: "-18%",
    rating: 5.0,
    reviews: 165,
    publisher: "NXB Kim Đồng",
    coverType: "Bìa cứng",
    pages: "580 trang",
    desc: "Hành trình phiêu bạt đầy chông gai nhưng ngập tràn lòng dũng cảm, tình người và nghị lực phi thường của cậu bé Rémi.",
    stock: 25,
    soldCount: 160,
    isHidden: false,
    image: "images/khong-gia-dinh.jpg"
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
  if (localStorage.getItem("mb_userLoggedIn") === null) {
    localStorage.setItem("mb_userLoggedIn", "false");
  }
}

initStorage();

function isUserLoggedIn() {
  return localStorage.getItem("mb_userLoggedIn") === "true";
}

function getBooks() {
  const books = JSON.parse(localStorage.getItem("mb_books") || "[]");
  if (books.length === 0) {
    saveBooks(DEFAULT_BOOKS);
    return DEFAULT_BOOKS;
  }
  // Tự động đồng bộ đường dẫn ảnh từ DEFAULT_BOOKS khi người dùng chỉnh sửa trong code
  let hasChange = false;
  DEFAULT_BOOKS.forEach(defBook => {
    const existing = books.find(b => b.id === defBook.id);
    if (!existing) {
      books.push(defBook);
      hasChange = true;
    } else if (defBook.image !== undefined && existing.image !== defBook.image) {
      existing.image = defBook.image;
      hasChange = true;
    }
  });
  if (hasChange) {
    saveBooks(books);
  }
  return books;
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

function formatVND(num) {
  return Number(num || 0).toLocaleString("vi-VN") + "đ";
}

// Format input giá tiền tự động khi gõ (VD: 100000 -> 100.000)
function bindPriceFormatting() {
  const priceInputs = document.querySelectorAll(".price-format");
  priceInputs.forEach(input => {
    input.addEventListener("input", function() {
      const rawValue = this.value.replace(/\D/g, "");
      if (rawValue) {
        this.value = Number(rawValue).toLocaleString("vi-VN");
      } else {
        this.value = "";
      }
    });
  });
}

function parsePriceNumber(str) {
  if (!str) return 0;
  return Number(String(str).replace(/\D/g, "")) || 0;
}

// Xác định đường dẫn tương đối để link đúng dù đang ở root hay trong user/ hay admin/
function getBasePath() {
  const p = window.location.pathname;
  if (p.includes("/user/") || p.includes("/admin/")) {
    return "../";
  }
  return "./";
}

function getUserPath() {
  const p = window.location.pathname;
  if (p.includes("/user/")) return "";
  if (p.includes("/admin/")) return "../user/";
  return "user/";
}

// Giúp ảnh hiển thị chính xác ở mọi trang (dù ở trang chủ hay các trang trong user/ và admin/)
function resolveImagePath(img) {
  if (!img) return "";
  if (img.startsWith("http://") || img.startsWith("https://") || img.startsWith("data:") || img.startsWith("/")) {
    return img;
  }
  const isSubFolder = window.location.pathname.includes("/user/") || window.location.pathname.includes("/admin/");
  if (isSubFolder) {
    if (!img.startsWith("../")) {
      return "../" + img;
    }
  } else {
    if (img.startsWith("../")) {
      return img.replace(/^\.\.\//, "");
    }
  }
  return img;
}

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

function updateHeaderStats() {
  const cart = getCart();
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll("#header-cart-count").forEach(b => {
    b.textContent = totalCount;
    b.style.display = totalCount > 0 ? "inline-block" : "none";
  });

  const loggedIn = isUserLoggedIn();
  const currentUser = getCurrentUser();
  const isInsideUserFolder = window.location.pathname.includes("/user/");

  // Nếu chưa đăng nhập: Hiển thị đúng chữ "Tài khoản"
  // Nếu đã đăng nhập: Hiển thị tên người dùng
  document.querySelectorAll("#header-user-name").forEach(span => {
    span.textContent = (loggedIn && currentUser && currentUser.name) ? currentUser.name : "Tài khoản";
  });

  // Cập nhật link khi bấm vào nút Tài khoản:
  // Chưa đăng nhập -> chuyển sang trang login.html
  // Đã đăng nhập -> chuyển sang trang account.html
  document.querySelectorAll("#header-account-link").forEach(link => {
    if (loggedIn) {
      link.href = isInsideUserFolder ? "account.html" : "user/account.html";
      link.title = `Tài khoản: ${currentUser ? currentUser.name : ''}`;
    } else {
      link.href = isInsideUserFolder ? "login.html" : "user/login.html";
      link.title = "Đăng nhập / Tạo tài khoản";
    }
  });
}

function bindGlobalQuickSearch() {
  const quickSearchForm = document.getElementById("quick-search-form");
  if (quickSearchForm) {
    quickSearchForm.addEventListener("submit", e => {
      e.preventDefault();
      const q = document.getElementById("quick-search-input")?.value.trim() || "";
      const isInsideUser = window.location.pathname.includes("/user/");
      const target = isInsideUser ? "search.html" : "user/search.html";
      window.location.href = `${target}?q=${encodeURIComponent(q)}`;
    });
  }
}

// Thêm vào giỏ hàng dùng chung: Buộc phải có tài khoản mới được đặt hàng, chưa có chỉ được xem
window.addToCart = function(bookId) {
  if (!isUserLoggedIn()) {
    const wantLogin = confirm("⚠️ Thông báo mua hàng:\nBạn cần có tài khoản và đăng nhập để đặt mua sách!\n(Người dùng chưa đăng nhập chỉ được xem sản phẩm)\n\nNhấn 'OK' để chuyển sang trang Đăng nhập / Tạo tài khoản.");
    if (wantLogin) {
      const isInsideUser = window.location.pathname.includes("/user/");
      window.location.href = isInsideUser ? "login.html" : "user/login.html";
    }
    return;
  }

  const books = getBooks();
  const book = books.find(b => b.id === Number(bookId));
  if (!book) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === Number(bookId));
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: Number(bookId), qty: 1 });
  }
  saveCart(cart);
  showToast(`Đã thêm <strong>"${book.title}"</strong> vào giỏ hàng!`);
};

// ==========================================
// 2. TRANG CHỦ (INDEX.HTML) LOGIC
// ==========================================

let homeFilter = {
  keyword: "",
  category: "",
  minPrice: 0,
  maxPrice: 0
};
let homeCurrentPage = 1;
const HOME_PER_PAGE = 8;

function initIndexPage() {
  const productListEl = document.getElementById("product-list");
  if (!productListEl) return;

  // Lắng nghe click các danh mục
  const categoryCards = document.querySelectorAll(".category-card");
  categoryCards.forEach(card => {
    card.addEventListener("click", e => {
      e.preventDefault();
      const cat = card.getAttribute("data-category");
      categoryCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      const catSelect = document.getElementById("category-select");
      if (catSelect) catSelect.value = cat;
      homeFilter.category = cat;
      homeCurrentPage = 1;
      renderHomeProducts();

      document.getElementById("sach-moi")?.scrollIntoView({ behavior: "smooth" });
    });
  });

  const viewAllCatsBtn = document.getElementById("view-all-cats");
  if (viewAllCatsBtn) {
    viewAllCatsBtn.addEventListener("click", e => {
      e.preventDefault();
      categoryCards.forEach(c => c.classList.remove("active"));
      const catSelect = document.getElementById("category-select");
      if (catSelect) catSelect.value = "";
      homeFilter.category = "";
      homeCurrentPage = 1;
      renderHomeProducts();
      document.getElementById("sach-moi")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Bộ lọc tìm kiếm trên trang chủ
  const searchInput = document.getElementById("search-input");
  const categorySelect = document.getElementById("category-select");
  const minPriceInput = document.getElementById("min-price");
  const maxPriceInput = document.getElementById("max-price");
  const searchBtn = document.getElementById("search-submit-btn");

  function triggerHomeSearch() {
    homeFilter.keyword = searchInput ? searchInput.value.trim().toLowerCase() : "";
    homeFilter.category = categorySelect ? categorySelect.value : "";
    homeFilter.minPrice = minPriceInput ? parsePriceNumber(minPriceInput.value) : 0;
    homeFilter.maxPrice = maxPriceInput ? parsePriceNumber(maxPriceInput.value) : 0;
    homeCurrentPage = 1;
    renderHomeProducts();
  }

  if (searchBtn) searchBtn.addEventListener("click", triggerHomeSearch);
  [searchInput, minPriceInput, maxPriceInput].forEach(inp => {
    if (inp) {
      inp.addEventListener("keydown", e => {
        if (e.key === "Enter") {
          e.preventDefault();
          triggerHomeSearch();
        }
      });
    }
  });

  // Tìm kiếm cơ bản trên thanh header nếu có
  const quickSearchForm = document.getElementById("quick-search-form");
  if (quickSearchForm) {
    quickSearchForm.addEventListener("submit", e => {
      e.preventDefault();
      const q = document.getElementById("quick-search-input")?.value.trim() || "";
      window.location.href = `user/search.html?q=${encodeURIComponent(q)}`;
    });
  }

  renderHomeProducts();
}

function renderHomeProducts() {
  const productListEl = document.getElementById("product-list");
  if (!productListEl) return;

  const allBooks = getBooks().filter(b => !b.isHidden);

  const filtered = allBooks.filter(book => {
    const matchKeyword = !homeFilter.keyword ||
      book.title.toLowerCase().includes(homeFilter.keyword) ||
      book.author.toLowerCase().includes(homeFilter.keyword);

    const matchCategory = !homeFilter.category || book.category === homeFilter.category;

    const matchMin = !homeFilter.minPrice || book.price >= homeFilter.minPrice;
    const matchMax = !homeFilter.maxPrice || book.price <= homeFilter.maxPrice;

    return matchKeyword && matchCategory && matchMin && matchMax;
  });

  const resultsInfo = document.getElementById("search-results-info");
  if (resultsInfo) {
    if (homeFilter.keyword || homeFilter.category || homeFilter.minPrice || homeFilter.maxPrice) {
      resultsInfo.innerHTML = `Tìm thấy <strong>${filtered.length}</strong> cuốn sách phù hợp.`;
    } else {
      resultsInfo.textContent = "Sách hay được tìm thấy từ một lần dừng chân.";
    }
  }

  if (filtered.length === 0) {
    productListEl.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 45px 20px; background: white; border-radius: 16px; border: 1px solid var(--line);">
        <p style="font-size: 15px; color: var(--muted); margin-bottom: 12px">Không tìm thấy cuốn sách nào khớp với điều kiện tìm kiếm.</p>
        <button class="button button-small" onclick="resetHomeFilter()">Xem tất cả sách</button>
      </div>
    `;
    renderHomePagination(0);
    return;
  }

  // Phân trang
  const totalPages = Math.ceil(filtered.length / HOME_PER_PAGE);
  if (homeCurrentPage > totalPages) homeCurrentPage = totalPages;
  const startIndex = (homeCurrentPage - 1) * HOME_PER_PAGE;
  const pageItems = filtered.slice(startIndex, startIndex + HOME_PER_PAGE);

  const userPath = getUserPath();

  productListEl.innerHTML = pageItems.map(book => {
    const coverHtml = book.image
      ? `<img src="${resolveImagePath(book.image)}" alt="${book.title}">`
      : `<div class="cover-title">${book.title.toUpperCase()}<small>${book.author.toUpperCase()}</small></div>`;

    return `
      <article class="product-card" data-id="${book.id}">
        <a href="${userPath}detail.html?id=${book.id}" class="book-card-link">
          <div class="product-cover ${book.coverClass || 'cover-olive'}">
            ${book.tag ? `<span class="tag">${book.tag}</span>` : ""}
            ${coverHtml}
          </div>
          <p class="category-name">${book.category.toUpperCase()} · <span style="color:#78817a">${book.coverType || "Bìa mềm"}</span></p>
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

  renderHomePagination(totalPages);
}

function resetHomeFilter() {
  const searchInput = document.getElementById("search-input");
  const categorySelect = document.getElementById("category-select");
  const minPriceInput = document.getElementById("min-price");
  const maxPriceInput = document.getElementById("max-price");
  if (searchInput) searchInput.value = "";
  if (categorySelect) categorySelect.value = "";
  if (minPriceInput) minPriceInput.value = "";
  if (maxPriceInput) maxPriceInput.value = "";
  document.querySelectorAll(".category-card").forEach(c => c.classList.remove("active"));
  homeFilter = { keyword: "", category: "", minPrice: 0, maxPrice: 0 };
  homeCurrentPage = 1;
  renderHomeProducts();
}

function renderHomePagination(totalPages) {
  const paginEl = document.getElementById("product-pagination");
  if (!paginEl) return;
  // Phân trang chỉ là giao diện minh họa theo yêu cầu, bấm vào không làm gì cả
  paginEl.innerHTML = `
    <span class="page-number active" style="cursor:default">1</span>
    <span class="page-number" style="cursor:default">2</span>
  `;
}

window.goToHomePage = function(page) {
  // Giao diện minh họa - không đổi trang
};

// ==========================================
// 3. TRANG TÌM KIẾM (USER/SEARCH.HTML) LOGIC
// ==========================================

let searchFilter = {
  keyword: "",
  category: "",
  minPrice: 0,
  maxPrice: 0
};
let searchCurrentPage = 1;
const SEARCH_PER_PAGE = 8;

function initSearchPage() {
  const resultsContainer = document.getElementById("search-results-list");
  if (!resultsContainer) return;

  // Lấy các tham số từ URL
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q") || "";
  const cat = params.get("category") || "";
  const min = params.get("min") || "";
  const max = params.get("max") || "";

  const searchInput = document.getElementById("search-input");
  const categorySelect = document.getElementById("category-select");
  const minPriceInput = document.getElementById("min-price");
  const maxPriceInput = document.getElementById("max-price");
  const searchSubmitBtn = document.getElementById("search-submit-btn");

  if (searchInput) searchInput.value = q;
  if (categorySelect) categorySelect.value = cat;
  if (minPriceInput && min) minPriceInput.value = Number(min).toLocaleString("vi-VN");
  if (maxPriceInput && max) maxPriceInput.value = Number(max).toLocaleString("vi-VN");

  searchFilter.keyword = q.toLowerCase();
  searchFilter.category = cat;
  searchFilter.minPrice = parsePriceNumber(min);
  searchFilter.maxPrice = parsePriceNumber(max);

  function executeSearch() {
    searchFilter.keyword = searchInput ? searchInput.value.trim().toLowerCase() : "";
    searchFilter.category = categorySelect ? categorySelect.value : "";
    searchFilter.minPrice = minPriceInput ? parsePriceNumber(minPriceInput.value) : 0;
    searchFilter.maxPrice = maxPriceInput ? parsePriceNumber(maxPriceInput.value) : 0;
    searchCurrentPage = 1;
    renderSearchResults();
  }

  if (searchSubmitBtn) searchSubmitBtn.addEventListener("click", executeSearch);
  [searchInput, minPriceInput, maxPriceInput].forEach(inp => {
    if (inp) {
      inp.addEventListener("keydown", e => {
        if (e.key === "Enter") {
          e.preventDefault();
          executeSearch();
        }
      });
    }
  });

  renderSearchResults();
}

function renderSearchResults() {
  const container = document.getElementById("search-results-list");
  const countEl = document.getElementById("search-results-count");
  if (!container) return;

  const allBooks = getBooks().filter(b => !b.isHidden);

  const filtered = allBooks.filter(book => {
    const matchKeyword = !searchFilter.keyword ||
      book.title.toLowerCase().includes(searchFilter.keyword) ||
      book.author.toLowerCase().includes(searchFilter.keyword);

    const matchCategory = !searchFilter.category || book.category === searchFilter.category;
    const matchMin = !searchFilter.minPrice || book.price >= searchFilter.minPrice;
    const matchMax = !searchFilter.maxPrice || book.price <= searchFilter.maxPrice;

    return matchKeyword && matchCategory && matchMin && matchMax;
  });

  if (countEl) {
    countEl.innerHTML = `Tìm thấy <strong>${filtered.length}</strong> kết quả phù hợp.`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; background: white; border-radius: 16px; border: 1px solid var(--line);">
        <h3>Không tìm thấy cuốn sách nào</h3>
        <p style="color:var(--muted);font-size:13px;margin:8px 0 16px">Hãy thử đổi từ khóa tìm kiếm hoặc mở rộng khoảng giá.</p>
        <button class="button button-small" onclick="resetSearchPage()">Xóa bộ lọc tìm kiếm</button>
      </div>
    `;
    renderSearchPagination(0);
    return;
  }

  const totalPages = Math.ceil(filtered.length / SEARCH_PER_PAGE);
  if (searchCurrentPage > totalPages) searchCurrentPage = totalPages;
  const startIndex = (searchCurrentPage - 1) * SEARCH_PER_PAGE;
  const pageItems = filtered.slice(startIndex, startIndex + SEARCH_PER_PAGE);

  container.innerHTML = pageItems.map(book => {
    const coverHtml = book.image
      ? `<img src="${resolveImagePath(book.image)}" alt="${book.title}">`
      : `<div class="cover-title">${book.title.toUpperCase()}<small>${book.author.toUpperCase()}</small></div>`;

    return `
      <article class="product-card" data-id="${book.id}">
        <a href="detail.html?id=${book.id}" class="book-card-link">
          <div class="product-cover ${book.coverClass || 'cover-olive'}">
            ${book.tag ? `<span class="tag">${book.tag}</span>` : ""}
            ${coverHtml}
          </div>
          <p class="category-name">${book.category.toUpperCase()} · <span style="color:#78817a">${book.coverType || "Bìa mềm"}</span></p>
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

  renderSearchPagination(totalPages);
}

function renderSearchPagination(totalPages) {
  const paginEl = document.getElementById("search-pagination");
  if (!paginEl) return;
  // Phân trang chỉ là giao diện minh họa theo yêu cầu, bấm vào không làm gì cả
  paginEl.innerHTML = `
    <span class="page-number active" style="cursor:default">1</span>
    <span class="page-number" style="cursor:default">2</span>
  `;
}

window.goToSearchPage = function(page) {
  // Giao diện minh họa - không đổi trang
};

window.resetSearchPage = function() {
  document.getElementById("search-input").value = "";
  document.getElementById("category-select").value = "";
  document.getElementById("min-price").value = "";
  document.getElementById("max-price").value = "";
  searchFilter = { keyword: "", category: "", minPrice: 0, maxPrice: 0 };
  searchCurrentPage = 1;
  renderSearchResults();
};

// ==========================================
// 4. TRANG CHI TIẾT SÁCH (USER/DETAIL.HTML) LOGIC
// ==========================================

function initDetailPage() {
  const detailPanel = document.getElementById("book-detail-container");
  if (!detailPanel) return;

  const params = new URLSearchParams(window.location.search);
  const bookId = Number(params.get("id")) || 1;

  const books = getBooks();
  const book = books.find(b => b.id === bookId) || books[0];
  if (!book) return;

  // Điền dữ liệu chi tiết sách
  document.title = `${book.title} — Mộc Books`;
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
  const stockEl = document.getElementById("detail-stock");

  if (coverBox) {
    coverBox.innerHTML = `
      <div class="product-cover ${book.coverClass || 'cover-olive'}" style="width:260px;height:370px">
        ${book.image ? `<img src="${resolveImagePath(book.image)}" alt="${book.title}">` : `<div class="cover-title">${book.title.toUpperCase()}<small>${book.author.toUpperCase()}</small></div>`}
      </div>
    `;
  }
  if (catEl) catEl.textContent = book.category;
  if (titleEl) titleEl.textContent = book.title;
  if (ratingEl) ratingEl.innerHTML = `★★★★★ <span>${book.rating || 5.0} · ${book.reviews || 100} đánh giá bạn đọc</span>`;
  if (priceEl) {
    priceEl.innerHTML = `${formatVND(book.price)} ${book.oldPrice ? `<span class="old-price">${formatVND(book.oldPrice)}</span>` : ""}`;
  }
  if (descEl) descEl.textContent = book.desc;
  if (authorEl) authorEl.textContent = book.author;
  if (pubEl) pubEl.textContent = book.publisher || "NXB Trẻ";
  if (coverTypeEl) coverTypeEl.textContent = book.coverType || "Bìa mềm";
  if (pagesEl) pagesEl.textContent = book.pages || "250 trang";
  if (stockEl) stockEl.textContent = `${book.stock || 20} cuốn có sẵn`;

  // Nút Thêm vào giỏ
  const addBtn = document.getElementById("detail-add-btn");
  if (addBtn) {
    addBtn.onclick = () => {
      addToCart(book.id);
    };
  }

  // Nút Mua ngay
  const buyNowBtn = document.getElementById("detail-buy-now-btn");
  if (buyNowBtn) {
    buyNowBtn.onclick = () => {
      if (!isUserLoggedIn()) {
        alert("⚠️ Thông báo:\nBạn cần có tài khoản và đăng nhập để đặt mua sách!\n(Người dùng chưa có tài khoản chỉ được xem sản phẩm)");
        window.location.href = `login.html?redirect=cart.html`;
        return;
      }
      addToCart(book.id);
      window.location.href = "cart.html";
    };
  }

  // Hiển thị sách liên quan (cùng danh mục)
  const relatedContainer = document.getElementById("related-books-grid");
  if (relatedContainer) {
    const related = books.filter(b => b.id !== book.id && b.category === book.category && !b.isHidden).slice(0, 4);
    if (related.length > 0) {
      relatedContainer.innerHTML = related.map(b => `
        <article class="product-card">
          <a href="detail.html?id=${b.id}">
            <div class="product-cover ${b.coverClass || 'cover-olive'}">
              ${b.image ? `<img src="${b.image}" alt="${b.title}">` : `<div class="cover-title">${b.title.toUpperCase()}</div>`}
            </div>
            <p class="category-name">${b.category}</p>
            <h3>${b.title}</h3>
          </a>
          <div class="price-row">
            <div class="price">${formatVND(b.price)}</div>
            <button class="add-button" type="button" onclick="addToCart(${b.id})">+</button>
          </div>
        </article>
      `).join("");
    } else {
      relatedContainer.closest("section")?.remove();
    }
  }
}

// ==========================================
// 5. TRANG LỊCH SỬ ĐƠN HÀNG (USER/ORDERS.HTML) LOGIC
// ==========================================

function initOrdersPage() {
  const container = document.getElementById("orders-history-container");
  if (!container) return;

  if (!isUserLoggedIn()) {
    container.innerHTML = `
      <div style="padding: 50px 30px; text-align: center; background: white; border-radius: 20px; border: 1px solid var(--line); box-shadow: 0 4px 20px rgba(0,0,0,0.03); max-width: 620px; margin: 20px auto;">
        <div style="width: 64px; height: 64px; border-radius: 50%; background: #eaf1eb; color: var(--green); display: grid; place-items: center; font-size: 28px; margin: 0 auto 16px;">
          🔒
        </div>
        <h2 style="font-size: 22px; margin: 0 0 10px; color: var(--ink);">Bạn chưa đăng nhập tài khoản</h2>
        <p style="font-size: 14px; color: var(--muted); max-width: 440px; margin: 0 auto 24px; line-height: 1.6;">
          Người dùng chưa có tài khoản chỉ được xem sản phẩm. Vui lòng đăng nhập hoặc tạo tài khoản để xem lại các đơn hàng đã đặt.
        </p>
        <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
          <a class="button" href="login.html?redirect=orders.html" style="height: 44px; padding: 0 24px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; font-weight: 700;">
            Đăng nhập tài khoản ngay →
          </a>
          <a class="button button-light" href="register.html?redirect=orders.html" style="height: 44px; padding: 0 20px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; font-weight: 700; border: 1px solid #dce0da;">
            Tạo tài khoản mới
          </a>
        </div>
      </div>
    `;
    const readerBadge = document.getElementById("orders-reader-badge");
    if (readerBadge) readerBadge.textContent = "Chưa đăng nhập";
    return;
  }

  const currentUser = getCurrentUser();
  const allOrders = getOrders();

  // Lọc đơn của người dùng
  const userOrders = allOrders.filter(o =>
    (currentUser.email && o.email === currentUser.email) ||
    o.customerName === currentUser.name ||
    currentUser.name === "Nguyễn Minh Anh"
  );

  const readerBadge = document.getElementById("orders-reader-badge");
  if (readerBadge) readerBadge.textContent = `Bạn đọc: ${currentUser.name}`;

  if (userOrders.length === 0) {
    container.innerHTML = `
      <div style="padding: 50px 30px; text-align: center; background: white; border-radius: 20px; border: 1px solid var(--line); box-shadow: 0 4px 20px rgba(0,0,0,0.03); max-width: 620px; margin: 20px auto;">
        <div style="width: 64px; height: 64px; border-radius: 50%; background: #f5f7f3; color: var(--green); display: grid; place-items: center; font-size: 28px; margin: 0 auto 16px;">
          📚
        </div>
        <h2 style="font-size: 20px; margin: 0 0 8px; color: var(--ink);">Bạn chưa có đơn đặt sách nào</h2>
        <p style="font-size: 14px; color: var(--muted); max-width: 400px; margin: 0 auto 22px; line-height: 1.6;">
          Hãy khám phá tủ sách Mộc Books để chọn cho mình những cuốn sách yêu thích.
        </p>
        <a class="button" href="../index.html#sach-moi" style="height: 44px; padding: 0 24px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; font-weight: 700;">
          Khám phá tủ sách Mộc →
        </a>
      </div>
    `;
    return;
  }

  container.innerHTML = userOrders.map(order => {
    const statusClass = order.status === "Đã giao" ? "status-green"
      : order.status === "Đã hủy" ? "status-red"
      : order.status === "Đã xác nhận" ? "status-blue" : "";

    const itemsHtml = order.items.map(i => `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: #fafbfa; border-radius: 10px; border: 1px solid #f0f2ee;">
        <span style="font-size: 13px; color: var(--ink);">📖 <strong>${i.title}</strong> <span style="color: var(--muted); margin-left: 8px;">x${i.qty}</span></span>
        <span style="font-size: 13px; font-weight: 700; color: #354a3c;">${formatVND(i.price * i.qty)}</span>
      </div>
    `).join("");

    return `
      <article class="order-card" style="padding: 24px; border: 1px solid var(--line); border-radius: 18px; background: white; margin-bottom: 20px; box-shadow: 0 2px 14px rgba(0,0,0,0.02);">
        <!-- Hàng đầu: Mã đơn, Thời gian & Trạng thái -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: 16px; border-bottom: 1px solid var(--line); gap: 16px; flex-wrap: wrap;">
          <div>
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
              <strong style="font-size: 16px; color: var(--ink);">Đơn hàng #${order.id}</strong>
              <span style="font-size: 12px; color: var(--muted);">· Ngày đặt: ${order.date}</span>
            </div>
            <div style="font-size: 13px; color: #58645a; line-height: 1.5;">
              <span>📍 <strong>Giao đến:</strong> ${order.fullAddress || order.location}</span>
              <span style="margin: 0 8px; color: #d0d6ce;">|</span>
              <span>💳 <strong>Hình thức:</strong> ${order.paymentMethod}</span>
            </div>
          </div>
          <div>
            <span class="status ${statusClass}" style="padding: 6px 14px; font-size: 12px; border-radius: 20px;">${order.status}</span>
          </div>
        </div>

        <!-- Danh sách sách -->
        <div style="padding: 16px 0; border-bottom: 1px solid var(--line); display: grid; gap: 8px;">
          ${itemsHtml}
        </div>

        <!-- Hàng cuối: Phí vận chuyển & Tổng tiền -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 14px; font-size: 13px;">
          <span style="color: var(--muted);">Phí vận chuyển: <strong style="color: #49544c;">${order.shippingFee ? formatVND(order.shippingFee) : "Miễn phí"}</strong></span>
          <div style="display: flex; align-items: baseline; gap: 8px;">
            <span style="color: var(--muted); font-size: 13px;">Tổng thanh toán:</span>
            <span style="font-size: 18px; font-weight: 700; color: var(--green);">${formatVND(order.total)}</span>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// ==========================================
// 6. TRANG GIỎ HÀNG (USER/CART.HTML) LOGIC
// ==========================================

function initCartPage() {
  const container = document.getElementById("cart-items-container");
  if (!container) return;

  const isLogged = isUserLoggedIn();
  const currentUser = getCurrentUser();

  const cartUserName = document.getElementById("cart-user-name");
  const cartUserEmail = document.getElementById("cart-user-email");
  const cartUserPhone = document.getElementById("cart-user-phone");
  const defaultAddressInfo = document.getElementById("cart-default-address-info");
  const warningBox = document.getElementById("cart-guest-warning");
  const checkoutBtn = document.getElementById("checkout-btn");

  if (isLogged) {
    if (warningBox) warningBox.style.display = "none";
    if (cartUserName) cartUserName.textContent = currentUser.name;
    if (cartUserEmail) cartUserEmail.textContent = currentUser.email;
    if (cartUserPhone) cartUserPhone.textContent = currentUser.phone;
    if (defaultAddressInfo) {
      defaultAddressInfo.innerHTML = `${currentUser.name} · ${currentUser.phone}<br>${currentUser.address}`;
    }
    if (checkoutBtn) {
      checkoutBtn.textContent = "Xác nhận đặt hàng";
      checkoutBtn.style.background = "";
      checkoutBtn.onclick = handleCheckout;
    }
  } else {
    if (warningBox) warningBox.style.display = "block";
    if (cartUserName) cartUserName.textContent = "Chưa đăng nhập (Khách chỉ xem)";
    if (cartUserEmail) cartUserEmail.textContent = "Chưa có tài khoản";
    if (cartUserPhone) cartUserPhone.textContent = "---";
    if (defaultAddressInfo) {
      defaultAddressInfo.innerHTML = `<span style="color:#b25846">Chưa có thông tin. Vui lòng đăng nhập tài khoản để chọn địa chỉ đặt hàng.</span>`;
    }
    if (checkoutBtn) {
      checkoutBtn.textContent = "🔒 Đăng nhập để đặt hàng";
      checkoutBtn.style.background = "#496352";
      checkoutBtn.onclick = () => {
        alert("⚠️ Thông báo:\nNgười dùng chưa có tài khoản chỉ được xem sản phẩm.\nVui lòng đăng nhập hoặc tạo tài khoản để tiến hành đặt hàng!");
        window.location.href = "login.html?redirect=cart.html";
      };
    }
  }

  // Toggle địa chỉ
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

  // Toggle thanh toán
  const paymentRadios = document.querySelectorAll('input[name="payment"]');
  paymentRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      document.querySelectorAll(".payment-options .payment-choice").forEach(l => l.classList.remove("selected"));
      radio.closest("label")?.classList.add("selected");
    });
  });

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
        <a class="button button-small" href="../index.html#sach-moi" style="margin-top:8px">Khám phá sách ngay</a>
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
      ? `<img src="${resolveImagePath(book.image)}" alt="${book.title}">`
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
  if (!isUserLoggedIn()) {
    alert("⚠️ Bạn chưa đăng nhập!\nTheo quy định, người dùng buộc phải có tài khoản mới được đặt hàng.\n(Khách chưa đăng nhập chỉ được xem sản phẩm)\n\nVui lòng đăng nhập hoặc tạo tài khoản để hoàn tất đơn hàng.");
    window.location.href = "login.html?redirect=cart.html";
    return;
  }

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

  saveCart([]);

  alert(`🎉 Đặt hàng thành công!\nMã đơn hàng: ${newOrder.id}\nTổng thanh toán: ${formatVND(total)}\n\nĐơn hàng đã được lưu vào Lịch sử đơn hàng.`);
  window.location.href = "orders.html";
}

// ==========================================
// 7. TRANG ĐĂNG NHẬP, ĐĂNG KÝ, TÀI KHOẢN (USER) LOGIC
// ==========================================

function initUserLoginPage() {
  const form = document.getElementById("user-login-form");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const userInput = document.getElementById("login-username")?.value.trim();
    let currentUser = getCurrentUser();

    if (userInput) {
      const users = getUsers();
      const matched = users.find(u => 
        (u.username && u.username.toLowerCase() === userInput.toLowerCase()) || 
        (u.email && u.email.toLowerCase() === userInput.toLowerCase())
      );

      if (matched) {
        currentUser = { ...matched };
      } else {
        let displayName = userInput;
        if (userInput.includes("@")) {
          displayName = userInput.split("@")[0];
        }
        currentUser = {
          name: displayName,
          username: userInput.includes("@") ? userInput.split("@")[0] : userInput,
          email: userInput.includes("@") ? userInput : `${displayName.toLowerCase()}@example.com`,
          phone: currentUser.phone || "0903 123 456",
          address: currentUser.address || "Quận 1, TP. Hồ Chí Minh"
        };
      }
    } else {
      currentUser = {
        name: "Nguyễn Minh Anh",
        username: "minhanh",
        email: "minhanh@example.com",
        phone: "0903 123 456",
        address: "12 Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh"
      };
    }

    saveCurrentUser(currentUser);
    localStorage.setItem("mb_userLoggedIn", "true");
    updateHeaderStats();
    showToast(`Đăng nhập thành công! Chào mừng <strong>${currentUser.name}</strong>`);

    setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      const redirect = params.get("redirect");
      if (redirect) {
        window.location.href = redirect;
      } else {
        window.location.href = "../index.html";
      }
    }, 500);
  });
}

function initUserRegisterPage() {
  const form = document.getElementById("user-register-form");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const fullName = document.getElementById("reg-name")?.value.trim() || "Bạn đọc mới";
    const username = document.getElementById("reg-username")?.value.trim() || ("user_" + Date.now().toString().slice(-4));
    const regEmail = document.getElementById("reg-email")?.value.trim() || "user@example.com";
    const regPhone = document.getElementById("reg-phone")?.value.trim() || "0900 123 456";
    const regAddr = document.getElementById("reg-address")?.value.trim() || "Quận 1, TP. Hồ Chí Minh";

    const newUser = {
      name: fullName,
      username: username,
      email: regEmail,
      phone: regPhone,
      address: regAddr
    };

    saveCurrentUser(newUser);
    localStorage.setItem("mb_userLoggedIn", "true");
    updateHeaderStats();

    const users = getUsers();
    users.push({
      id: Date.now(),
      name: fullName,
      username: username,
      email: regEmail,
      phone: regPhone,
      address: regAddr,
      ordersCount: 0,
      isLocked: false
    });
    saveUsers(users);

    showToast(`Tạo tài khoản thành công! Xin chào <strong>${fullName}</strong>`);

    setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      const redirect = params.get("redirect");
      if (redirect) {
        window.location.href = redirect;
      } else {
        window.location.href = "../index.html";
      }
    }, 500);
  });
}

function initAccountPage() {
  const isLogged = isUserLoggedIn();
  if (!isLogged) {
    window.location.href = "login.html";
    return;
  }

  const currentUser = getCurrentUser();
  const displayNameEl = document.getElementById("current-user-display-name");
  const usernameEl = document.getElementById("account-username-display");
  const emailEl = document.getElementById("account-email-display");
  const phoneEl = document.getElementById("account-phone-display");
  const addrEl = document.getElementById("account-address-display");

  if (displayNameEl) displayNameEl.textContent = currentUser.name;
  if (usernameEl) usernameEl.textContent = currentUser.username || (currentUser.email ? currentUser.email.split('@')[0] : "minhanh");
  if (emailEl) emailEl.textContent = currentUser.email || "Chưa cập nhật";
  if (phoneEl) phoneEl.textContent = currentUser.phone || "Chưa cập nhật";
  if (addrEl) addrEl.textContent = currentUser.address || "Chưa cập nhật";

  const logoutBtn = document.getElementById("user-logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.setItem("mb_userLoggedIn", "false");
      updateHeaderStats();
      showToast("Đã đăng xuất tài khoản!");
      setTimeout(() => {
        window.location.href = "../index.html";
      }, 500);
    });
  }
}

// ==========================================
// 8. CÁC TRANG QUẢN TRỊ ADMIN (ADMIN/...) LOGIC
// ==========================================

// Trang đăng nhập Admin
function initAdminLoginPage() {
  const form = document.getElementById("admin-login-form");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    localStorage.setItem("mb_adminLoggedIn", "true");
    showToast("Đăng nhập quản trị viên thành công!");
    window.location.href = "dashboard.html";
  });
}

// Kiểm tra quyền Admin chung cho các trang admin
function checkAdminAuth() {
  const isAdmin = localStorage.getItem("mb_adminLoggedIn") === "true";
  if (!isAdmin && !window.location.pathname.includes("login.html")) {
    window.location.href = "login.html";
    return false;
  }

  const logoutBtn = document.getElementById("admin-logout-btn");
  if (logoutBtn) {
    logoutBtn.onclick = (e) => {
      e.preventDefault();
      localStorage.setItem("mb_adminLoggedIn", "false");
      window.location.href = "login.html";
    };
  }
  return true;
}

// Trang Admin Dashboard
function initAdminDashboardPage() {
  const orders = getOrders();
  const books = getBooks();
  const users = getUsers();

  const totalRev = orders.filter(o => o.status !== "Đã hủy").reduce((s, o) => s + (o.total || 0), 0);
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

  const topBooksContainer = document.getElementById("admin-top-books");
  if (topBooksContainer) {
    const sorted = [...books].sort((a, b) => (b.soldCount || 0) - (a.soldCount || 0)).slice(0, 5);
    topBooksContainer.innerHTML = sorted.map((b, index) => `
      <div class="mini-row" style="display:flex;align-items:center;gap:12px;padding:12px 6px;border-bottom:1px solid #f0f2ee">
        <span style="display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:6px;background:#eef2eb;color:#354a3c;font-weight:700;font-size:11px;flex-shrink:0">#${index + 1}</span>
        <div style="flex:1;min-width:0">
          <div style="font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:13px;color:var(--ink)" title="${b.title}">${b.title}</div>
          <div style="font-size:11px;color:var(--muted);margin-top:2px">${b.author || b.category}</div>
          <div style="font-size:11px;color:#7a857b;margin-top:2px">${b.soldCount || 0} lượt bán</div>
        </div>
        <b style="margin-left:auto;text-align:right;font-size:13px;color:#354a3c;white-space:nowrap;flex-shrink:0">${formatVND((b.soldCount || 0) * b.price)}</b>
      </div>
    `).join("");
  }
}

// Trang Quản lý Đơn hàng (Orders)
function initAdminOrdersPage() {
  renderAdminOrdersList();

  const statusFilter = document.getElementById("admin-order-status-filter");
  const fromDate = document.getElementById("admin-order-from-date");
  const toDate = document.getElementById("admin-order-to-date");
  const locationFilter = document.getElementById("admin-order-location-filter");
  const resetBtn = document.getElementById("admin-order-reset-filter");

  if (statusFilter) statusFilter.onchange = renderAdminOrdersList;
  if (fromDate) fromDate.onchange = renderAdminOrdersList;
  if (toDate) toDate.onchange = renderAdminOrdersList;
  if (locationFilter) locationFilter.onchange = renderAdminOrdersList;
  if (resetBtn) {
    resetBtn.onclick = () => {
      if (statusFilter) statusFilter.value = "";
      if (fromDate) fromDate.value = "";
      if (toDate) toDate.value = "";
      if (locationFilter) locationFilter.value = "";
      renderAdminOrdersList();
    };
  }
}

function renderAdminOrdersList() {
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
        <td class="text-right"><strong>${formatVND(order.total)}</strong></td>
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

  const allowed = {
    "Chưa xác nhận": ["Đã xác nhận", "Đã hủy"],
    "Đã xác nhận": ["Đã giao", "Đã hủy"]
  };

  if (!allowed[order.status] || !allowed[order.status].includes(newStatus)) {
    alert("Lỗi: Trạng thái đơn hàng chỉ có thể cập nhật xuôi, không cho phép cập nhật ngược!");
    renderAdminOrdersList();
    return;
  }

  order.status = newStatus;
  saveOrders(orders);
  showToast(`Đã chuyển đơn hàng <strong>#${orderId}</strong> sang <strong>"${newStatus}"</strong>`);
  renderAdminOrdersList();
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
        <span class="text-right" style="font-weight:600">${formatVND(item.price * item.qty)}</span>
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
        <span>Tạm tính:</span> <span class="text-right">${formatVND(order.subtotal || order.total)}</span>
      </div>
      <div style="display:flex;justify-content:space-between">
        <span>Phí vận chuyển:</span> <span class="text-right">${formatVND(order.shippingFee || 0)}</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:15px;font-weight:700;margin-top:8px;padding-top:8px;border-top:1px solid var(--line);color:var(--green)">
        <span>Tổng thanh toán:</span> <span class="text-right">${formatVND(order.total)}</span>
      </div>
    `;
  }

  if (modal) modal.classList.add("open");
};

window.closeOrderDetailModal = function() {
  const modal = document.getElementById("order-detail-modal");
  if (modal) modal.classList.remove("open");
};

// Trang Quản lý Sản phẩm (Products)
// Theo yêu cầu: "bỏ chức năng lọc sản phẩm sách trong admin (chỉ là giao diện chứ ko có chức năng)"
function initAdminProductsPage() {
  renderAdminProductsTable();
}

function renderAdminProductsTable() {
  const tbody = document.getElementById("admin-books-tbody");
  if (!tbody) return;

  const books = getBooks();
  tbody.innerHTML = books.map(b => {
    const isSold = (b.soldCount || 0) > 0;
    const statusText = b.isHidden ? "Đã ẩn" : "Đang bán";
    const statusClass = b.isHidden ? "status-red" : "status-green";

    return `
      <tr>
        <td>
          <div class="table-book">
            <div class="cart-mini-cover ${b.coverClass || 'cover-olive'}" style="overflow:hidden">
              ${b.image ? `<img src="${resolveImagePath(b.image)}" alt="${b.title}">` : b.title.substring(0, 6).toUpperCase()}
            </div>
            <div>
              <strong>${b.title}</strong>
              <div style="font-size:9px;color:var(--muted)">${b.author}</div>
            </div>
          </div>
        </td>
        <td>${b.category}</td>
        <td><span style="font-weight:600;color:#354a3c">${b.coverType || "Bìa mềm"}</span></td>
        <td class="text-right"><strong>${formatVND(b.price)}</strong></td>
        <td class="text-right">${b.stock || 0}</td>
        <td class="text-right">${b.soldCount || 0}</td>
        <td class="text-center"><span class="status ${statusClass}">${statusText}</span></td>
        <td>
          <a class="table-action" href="product-form.html?id=${b.id}">Sửa</a>
          <span style="color:#dce4d9"> · </span>
          <a class="table-action" href="javascript:void(0)" style="color:#a6624e" onclick="handleDeleteOrHideBook(${b.id})">
            ${isSold ? (b.isHidden ? "Mở lại" : "Ẩn") : "Xóa"}
          </a>
        </td>
      </tr>
    `;
  }).join("");
}

window.handleDeleteOrHideBook = function(bookId) {
  let books = getBooks();
  const book = books.find(b => b.id === bookId);
  if (!book) return;

  const orders = getOrders();
  const hasSoldInOrders = orders.some(o => o.items && o.items.some(i => i.id === bookId));
  const isSold = (book.soldCount || 0) > 0 || hasSoldInOrders;

  if (isSold) {
    if (book.isHidden) {
      book.isHidden = false;
      saveBooks(books);
      showToast(`Đã mở lại hiển thị sách <strong>"${book.title}"</strong> trên cửa hàng.`);
    } else {
      alert(`ℹ Thông báo nghiệp vụ:\nSách "${book.title}" đã được bán ra (${book.soldCount} lượt bán).\nTheo quy định, hệ thống sẽ ẨN sản phẩm này khỏi cửa hàng thay vì xóa vĩnh viễn.`);
      book.isHidden = true;
      saveBooks(books);
      showToast(`Đã ẩn sách <strong>"${book.title}"</strong> khỏi cửa hàng bạn đọc.`);
    }
  } else {
    const confirmed = confirm(`Sách "${book.title}" chưa phát sinh đơn bán nào.\nBạn có chắc chắn muốn XÓA VĨNH VIỄN sản phẩm này không?`);
    if (confirmed) {
      books = books.filter(b => b.id !== bookId);
      saveBooks(books);
      showToast(`Đã xóa vĩnh viễn sách <strong>"${book.title}"</strong>!`);
    }
  }

  renderAdminProductsTable();
};

// Trang Form Sản phẩm (Product Form)
// Yêu cầu:
// 1. Thiếu hình thức -> Có trường chọn "Hình thức" (Bìa mềm, Bìa cứng)
// 2. Bỏ chức năng thêm hình -> chỉ là giao diện
// 3. Bỏ chức năng lưu -> chỉ là giao diện (bấm lưu thông báo và quay về)
function initAdminProductFormPage() {
  const form = document.getElementById("product-edit-form");
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const bookId = Number(params.get("id"));

  if (bookId) {
    const book = getBooks().find(b => b.id === bookId);
    if (book) {
      const heading = document.getElementById("product-form-heading");
      if (heading) heading.textContent = `Chỉnh sửa: ${book.title}`;

      document.getElementById("pf-title").value = book.title;
      document.getElementById("pf-category").value = book.category;
      document.getElementById("pf-cover-type").value = book.coverType || "Bìa mềm";
      document.getElementById("pf-price").value = Number(book.price).toLocaleString("vi-VN");
      document.getElementById("pf-author").value = book.author;
      document.getElementById("pf-stock").value = book.stock || 20;
      document.getElementById("pf-desc").value = book.desc || "";
    }
  }

  // Nút Lưu chỉ là giao diện
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("✅ Lưu thông tin sản phẩm thành công (Giao diện minh họa).");
    window.location.href = "products.html";
  });
}

// Trang Quản lý Khách hàng (Customers)
function initAdminCustomersPage() {
  renderAdminUsersList();

  const searchInput = document.getElementById("admin-user-search");
  if (searchInput) {
    searchInput.oninput = renderAdminUsersList;
  }

  const addUserBtn = document.getElementById("admin-add-user-btn");
  if (addUserBtn) {
    addUserBtn.onclick = () => {
      const name = prompt("Nhập họ và tên khách hàng mới:");
      if (!name || !name.trim()) return;

      const email = prompt("Nhập email khách hàng:", `${name.toLowerCase().replace(/\s+/g, "")}@example.com`) || "user@example.com";
      const phone = prompt("Nhập số điện thoại:", "0900 123 456") || "0900 123 456";

      const users = getUsers();
      users.unshift({
        id: Date.now(),
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        address: "TP. Hồ Chí Minh",
        ordersCount: 0,
        isLocked: false
      });
      saveUsers(users);
      showToast(`Đã thêm bạn đọc <strong>${name.trim()}</strong>!`);
      renderAdminUsersList();
    };
  }
}

function renderAdminUsersList() {
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

window.editUserPrompt = function(userId) {
  const users = getUsers();
  const u = users.find(item => item.id === userId);
  if (!u) return;

  const newName = prompt("Chỉnh sửa họ tên khách hàng:", u.name);
  if (newName !== null && newName.trim()) u.name = newName.trim();
  const newPhone = prompt("Chỉnh sửa số điện thoại:", u.phone || "");
  if (newPhone !== null) u.phone = newPhone.trim();

  saveUsers(users);
  showToast(`Đã cập nhật bạn đọc <strong>${u.name}</strong>!`);
  renderAdminUsersList();
};

window.toggleUserLock = function(userId) {
  const users = getUsers();
  const u = users.find(item => item.id === userId);
  if (!u) return;

  u.isLocked = !u.isLocked;
  saveUsers(users);
  showToast(`Đã ${u.isLocked ? "KHÓA" : "MỞ KHÓA"} tài khoản <strong>${u.name}</strong>.`);
  renderAdminUsersList();
};

// Trang Thống kê Top 5 Khách hàng (Stats)
function initAdminStatsPage() {
  const runBtn = document.getElementById("stat-run-btn");
  const resetBtn = document.getElementById("stat-reset-btn");

  if (runBtn) runBtn.onclick = calculateTop5Customers;
  if (resetBtn) {
    resetBtn.onclick = () => {
      document.getElementById("stat-from-date").value = "";
      document.getElementById("stat-to-date").value = "";
      calculateTop5Customers();
    };
  }

  calculateTop5Customers();
}

function calculateTop5Customers() {
  const tbody = document.getElementById("admin-top5-tbody");
  if (!tbody) return;

  const orders = getOrders();
  const fromDate = document.getElementById("stat-from-date")?.value;
  const toDate = document.getElementById("stat-to-date")?.value;

  const validOrders = orders.filter(o => {
    if (o.status === "Đã hủy") return false;
    if (fromDate && o.date < fromDate) return false;
    if (toDate && o.date > toDate) return false;
    return true;
  });

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
        <td class="text-center">${cust.orders.length}</td>
        <td>${latestOrderStr}</td>
        <td class="text-right"><strong style="color:var(--green)">${formatVND(cust.totalSpent)}</strong></td>
        <td class="text-center">
          <a class="table-action" href="customer-orders.html?customer=${encodeURIComponent(cust.name)}">Xem đơn (${cust.orders.length}) →</a>
        </td>
      </tr>
    `;
  }).join("");
}

window.viewCustomerOrders = function(customerName) {
  window.location.href = `customer-orders.html?customer=${encodeURIComponent(customerName)}`;
};

function initAdminCustomerOrdersPage() {
  const params = new URLSearchParams(window.location.search);
  const rawCustomer = params.get("customer") || "";
  let customerName = rawCustomer;
  try {
    customerName = decodeURIComponent(rawCustomer).trim();
  } catch (e) {
    customerName = rawCustomer.trim();
  }

  const headingName = document.getElementById("co-heading-name");
  const headingDesc = document.getElementById("co-heading-desc");
  const summaryName = document.getElementById("co-summary-name");
  const summaryEmail = document.getElementById("co-summary-email");
  const summaryCount = document.getElementById("co-summary-count");
  const summaryTotal = document.getElementById("co-summary-total");
  const summaryLatest = document.getElementById("co-summary-latest");
  const summaryDate = document.getElementById("co-summary-date");
  const tbody = document.getElementById("co-orders-tbody");

  if (!customerName) {
    if (headingName) headingName.textContent = "Chưa chọn khách hàng";
    if (tbody) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:32px;color:var(--muted)">Vui lòng chọn khách hàng từ <a href="stats.html" style="color:var(--green);font-weight:700">Báo cáo Thống kê Top 5</a>.</td></tr>`;
    }
    return;
  }

  const allOrders = getOrders();
  const targetName = customerName.toLowerCase();
  const customerOrders = allOrders.filter(o => {
    const oName = (o.customerName || "").trim().toLowerCase();
    const oEmail = (o.email || "").trim().toLowerCase();
    return oName === targetName || (targetName.includes("@") && oEmail === targetName);
  });

  const users = getUsers();
  const user = users.find(u => (u.name || "").trim().toLowerCase() === targetName || (u.email || "").toLowerCase() === targetName);
  const email = (user && user.email) || (customerOrders[0] && customerOrders[0].email) || "Chưa cập nhật email";
  const displayName = (user && user.name) || (customerOrders[0] && customerOrders[0].customerName) || customerName;

  if (headingName) headingName.textContent = `Lịch sử đơn của: ${displayName}`;
  if (headingDesc) headingDesc.textContent = `Hiển thị danh sách toàn bộ ${customerOrders.length} đơn hàng đã mua của khách hàng "${displayName}".`;
  if (summaryName) summaryName.textContent = displayName;
  if (summaryEmail) summaryEmail.textContent = email;
  if (summaryCount) summaryCount.textContent = `${customerOrders.length} đơn`;

  const validOrders = customerOrders.filter(o => o.status !== "Đã hủy");
  const totalSpent = validOrders.reduce((sum, o) => sum + (o.total || 0), 0);
  if (summaryTotal) summaryTotal.textContent = formatVND(totalSpent);

  const latestOrder = customerOrders[0];
  if (summaryLatest) summaryLatest.textContent = latestOrder ? latestOrder.status : "Chưa có";
  if (summaryDate) summaryDate.textContent = latestOrder ? `Đơn gần nhất: ${latestOrder.date}` : "";

  if (!tbody) return;

  if (customerOrders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:32px;color:var(--muted)">Khách hàng "${displayName}" hiện chưa phát sinh đơn hàng nào trong hệ thống.</td></tr>`;
    return;
  }

  tbody.innerHTML = customerOrders.map(o => {
    let statusClass = "status-green";
    if (o.status === "Chưa xác nhận") statusClass = "status-blue";
    if (o.status === "Đã hủy") statusClass = "status-red";

    const itemsSummary = o.items && o.items.length > 0
      ? o.items.map(i => `<div style="font-size:11px;margin-bottom:3px">📖 <strong>${i.title}</strong> <span style="color:var(--muted)">x${i.qty}</span> <span style="color:#354a3c;font-weight:600">(${formatVND(i.price * i.qty)})</span></div>`).join("")
      : "Không có thông tin";

    return `
      <tr>
        <td><strong>#${o.id}</strong></td>
        <td>${o.date}</td>
        <td><div style="max-width:240px;white-space:normal;font-size:11px;line-height:1.4">${o.fullAddress || o.location || "Tại cửa hàng"}</div></td>
        <td>${itemsSummary}</td>
        <td class="text-right"><strong>${formatVND(o.total)}</strong></td>
        <td class="text-center"><span class="status ${statusClass}">${o.status}</span></td>
      </tr>
    `;
  }).join("");
}

// ==========================================
// 8. TRANG TỦ SÁCH VÀ DANH MỤC RIÊNG (USER)
// ==========================================

function initBookshelfPage() {
  const container = document.getElementById("bookshelf-list");
  if (!container) return;

  const keywordInput = document.getElementById("bookshelf-keyword");
  const categorySelect = document.getElementById("bookshelf-category");
  const minPriceInput = document.getElementById("bookshelf-min-price");
  const maxPriceInput = document.getElementById("bookshelf-max-price");
  const submitBtn = document.getElementById("bookshelf-submit-btn");

  const urlParams = new URLSearchParams(window.location.search);
  const qCat = urlParams.get("category");
  if (qCat && categorySelect) {
    categorySelect.value = qCat;
  }

  function render() {
    const keyword = keywordInput ? keywordInput.value.trim().toLowerCase() : "";
    const category = categorySelect ? categorySelect.value : "";
    const minPrice = minPriceInput ? parsePriceNumber(minPriceInput.value) : 0;
    const maxPrice = maxPriceInput ? parsePriceNumber(maxPriceInput.value) : 0;

    const allBooks = getBooks().filter(b => !b.isHidden);
    const filtered = allBooks.filter(book => {
      const matchKeyword = !keyword ||
        book.title.toLowerCase().includes(keyword) ||
        book.author.toLowerCase().includes(keyword);
      const matchCategory = !category || book.category === category;
      const matchMin = !minPrice || book.price >= minPrice;
      const matchMax = !maxPrice || book.price <= maxPrice;
      return matchKeyword && matchCategory && matchMin && matchMax;
    });

    const infoEl = document.getElementById("bookshelf-info");
    if (infoEl) {
      infoEl.innerHTML = `Đang hiển thị <strong>${filtered.length}</strong> tựa sách tuyển chọn trong tủ sách.`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 45px 20px; background: white; border-radius: 16px; border: 1px solid var(--line);">
          <p style="font-size: 15px; color: var(--muted); margin-bottom: 12px">Không có cuốn sách nào khớp với điều kiện lọc.</p>
          <button class="button button-small" onclick="window.location.href='books.html'">Xem tất cả sách</button>
        </div>
      `;
      const pag = document.getElementById("bookshelf-pagination");
      if (pag) pag.innerHTML = "";
      return;
    }

    container.innerHTML = filtered.map(book => {
      const coverHtml = book.image
        ? `<img src="${resolveImagePath(book.image)}" alt="${book.title}">`
        : `<div class="cover-title">${book.title.toUpperCase()}<small>${book.author.toUpperCase()}</small></div>`;

      return `
        <article class="product-card" data-id="${book.id}">
          <a href="detail.html?id=${book.id}" class="book-card-link">
            <div class="product-cover ${book.coverClass || 'cover-olive'}">
              ${book.tag ? `<span class="tag">${book.tag}</span>` : ""}
              ${coverHtml}
            </div>
            <div class="category-name">${book.category || 'Mộc Books'}</div>
            <h3>${book.title}</h3>
          </a>
          <div class="rating">★★★★★ <span>(${book.reviews || 12})</span></div>
          <div class="price-row">
            <div>
              <span class="price">${formatVND(book.price)}</span>
              ${book.oldPrice ? `<span class="old-price">${formatVND(book.oldPrice)}</span>` : ""}
            </div>
            <button class="add-button" onclick="addToCart(${book.id})" title="Thêm vào giỏ" aria-label="Thêm vào giỏ">+</button>
          </div>
        </article>
      `;
    }).join("");

    const pag = document.getElementById("bookshelf-pagination");
    if (pag) {
      pag.innerHTML = `
        <span class="page-number active" style="cursor:default">1</span>
        <span class="page-number" style="cursor:default">2</span>
      `;
    }
  }

  if (submitBtn) submitBtn.addEventListener("click", render);
  [keywordInput, minPriceInput, maxPriceInput].forEach(inp => {
    if (inp) {
      inp.addEventListener("keydown", e => {
        if (e.key === "Enter") {
          e.preventDefault();
          render();
        }
      });
    }
  });
  if (categorySelect) categorySelect.addEventListener("change", render);

  render();
}

function initCategoriesPage() {
  const container = document.getElementById("category-book-list");
  if (!container) return;

  const allBooks = getBooks().filter(b => !b.isHidden);

  const countAll = document.getElementById("count-all");
  const countVanHoc = document.getElementById("count-van-hoc");
  const countKyNang = document.getElementById("count-ky-nang");
  const countKhoaHoc = document.getElementById("count-khoa-hoc");
  const countThieuNhi = document.getElementById("count-thieu-nhi");

  const vanHocCount = allBooks.filter(b => b.category === "Văn học").length;
  const kyNangCount = allBooks.filter(b => b.category === "Kỹ năng sống").length;
  const khoaHocCount = allBooks.filter(b => b.category === "Khoa học").length;
  const thieuNhiCount = allBooks.filter(b => b.category === "Sách thiếu nhi").length;

  if (countAll) countAll.textContent = `${allBooks.length} cuốn sách`;
  if (countVanHoc) countVanHoc.textContent = `${vanHocCount} cuốn sách`;
  if (countKyNang) countKyNang.textContent = `${kyNangCount} cuốn sách`;
  if (countKhoaHoc) countKhoaHoc.textContent = `${khoaHocCount} cuốn sách`;
  if (countThieuNhi) countThieuNhi.textContent = `${thieuNhiCount} cuốn sách`;

  let selectedCategory = "";

  const urlParams = new URLSearchParams(window.location.search);
  const qCat = urlParams.get("cat");
  if (qCat) selectedCategory = qCat;

  function renderCategoryBooks() {
    const cards = document.querySelectorAll(".category-card");
    cards.forEach(c => {
      const cat = c.getAttribute("data-category") || "";
      if (cat === selectedCategory) c.classList.add("active");
      else c.classList.remove("active");
    });

    const titleEl = document.getElementById("cat-section-title");
    const descEl = document.getElementById("cat-section-desc");
    if (titleEl) {
      titleEl.textContent = selectedCategory ? `Đang xem: ${selectedCategory}` : "Đang xem: Tất cả thể loại";
    }

    const filtered = selectedCategory
      ? allBooks.filter(b => b.category === selectedCategory)
      : allBooks;

    if (descEl) {
      descEl.innerHTML = `Có <strong>${filtered.length}</strong> cuốn sách thuộc phân loại này.`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 45px 20px; background: white; border-radius: 16px; border: 1px solid var(--line);">
          <p style="font-size: 15px; color: var(--muted); margin-bottom: 12px">Chưa có cuốn sách nào thuộc thể loại này.</p>
        </div>
      `;
      const pag = document.getElementById("category-pagination");
      if (pag) pag.innerHTML = "";
      return;
    }

    container.innerHTML = filtered.map(book => {
      const coverHtml = book.image
        ? `<img src="${resolveImagePath(book.image)}" alt="${book.title}">`
        : `<div class="cover-title">${book.title.toUpperCase()}<small>${book.author.toUpperCase()}</small></div>`;

      return `
        <article class="product-card" data-id="${book.id}">
          <a href="detail.html?id=${book.id}" class="book-card-link">
            <div class="product-cover ${book.coverClass || 'cover-olive'}">
              ${book.tag ? `<span class="tag">${book.tag}</span>` : ""}
              ${coverHtml}
            </div>
            <div class="category-name">${book.category || 'Mộc Books'}</div>
            <h3>${book.title}</h3>
          </a>
          <div class="rating">★★★★★ <span>(${book.reviews || 12})</span></div>
          <div class="price-row">
            <div>
              <span class="price">${formatVND(book.price)}</span>
              ${book.oldPrice ? `<span class="old-price">${formatVND(book.oldPrice)}</span>` : ""}
            </div>
            <button class="add-button" onclick="addToCart(${book.id})" title="Thêm vào giỏ" aria-label="Thêm vào giỏ">+</button>
          </div>
        </article>
      `;
    }).join("");

    const pag = document.getElementById("category-pagination");
    if (pag) {
      pag.innerHTML = `
        <span class="page-number active" style="cursor:default">1</span>
        <span class="page-number" style="cursor:default">2</span>
      `;
    }
  }

  document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", e => {
      e.preventDefault();
      selectedCategory = card.getAttribute("data-category") || "";
      renderCategoryBooks();
      document.getElementById("cat-section-title")?.scrollIntoView({ behavior: "smooth" });
    });
  });

  const viewAllBtn = document.getElementById("cat-view-all-btn");
  if (viewAllBtn) {
    viewAllBtn.addEventListener("click", e => {
      e.preventDefault();
      selectedCategory = "";
      renderCategoryBooks();
      document.getElementById("cat-section-title")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  renderCategoryBooks();
}

// ==========================================
// 9. KHỞI CHẠY HỆ THỐNG
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  bindPriceFormatting();
  bindGlobalQuickSearch();
  updateHeaderStats();

  const path = window.location.pathname;

  if (path.includes("/admin/")) {
    if (path.includes("login.html")) {
      initAdminLoginPage();
    } else if (checkAdminAuth()) {
      if (path.includes("customer-orders.html")) initAdminCustomerOrdersPage();
      else if (path.includes("dashboard.html")) initAdminDashboardPage();
      else if (path.includes("orders.html")) initAdminOrdersPage();
      else if (path.includes("product-form.html")) initAdminProductFormPage();
      else if (path.includes("products.html")) initAdminProductsPage();
      else if (path.includes("customers.html")) initAdminCustomersPage();
      else if (path.includes("stats.html")) initAdminStatsPage();
    }
  } else if (path.includes("/user/")) {
    if (path.includes("login.html")) initUserLoginPage();
    else if (path.includes("register.html")) initUserRegisterPage();
    else if (path.includes("detail.html")) initDetailPage();
    else if (path.includes("search.html")) initSearchPage();
    else if (path.includes("orders.html")) initOrdersPage();
    else if (path.includes("cart.html")) initCartPage();
    else if (path.includes("account.html")) initAccountPage();
    else if (path.includes("books.html")) initBookshelfPage();
    else if (path.includes("categories.html")) initCategoriesPage();
  } else {
    // Trang chủ index.html ở ngoài cùng
    initIndexPage();
  }
});
