// Toggle hamburger menu
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.toggle("active");
});

// Keranjang belanja - hitung item
let cartCount = 0;
const cartCountEl = document.getElementById("cart-count");
const cartButtons = document.querySelectorAll("button:nth-of-type(2)"); // Tombol "+ Keranjang"

cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountEl.textContent = cartCount;
    alert("Produk ditambahkan ke keranjang!");
  });
});

// Tombol "Beli"
const buyButtons = document.querySelectorAll("button:nth-of-type(1)");
buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Terima kasih telah membeli produk kami!");
  });
});

// Form Kontak
const formKontak = document.getElementById("formKontak");
formKontak.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Pesan Anda telah dikirim. Terima kasih!");
  formKontak.reset();
});

// Form Pembayaran
const formPembayaran = document.getElementById("formPembayaran");
formPembayaran.addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    "Pembayaran berhasil dikirim. Terima kasih telah berbelanja di NexStore!"
  );
  formPembayaran.reset();
});
