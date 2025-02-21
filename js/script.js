document.addEventListener("DOMContentLoaded", () => {
  // Ambil elemen tombol dark mode, menu toggle (hamburger), dan daftar navigasi
  const darkModeToggle = document.getElementById("darkModeToggle");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // === DARK MODE TOGGLE (Hanya Berdasarkan LocalStorage) ===
  // Fungsi untuk mengaktifkan atau menonaktifkan dark mode
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode"); 
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled"); // Simpan status dark mode ke localStorage
  };

  // Jika tombol dark mode ada di halaman
  if (darkModeToggle) {
    const isDarkMode = localStorage.getItem("dark-mode") === "enabled"; // Cek status dark mode dari localStorage
    document.body.classList.toggle("dark-mode", isDarkMode); // Terapkan dark mode sesuai dengan localStorage
    darkModeToggle.addEventListener("click", toggleDarkMode); // Tambahkan event listener untuk toggle dark mode saat tombol diklik
  }

  // === HAMBURGER MENU TOGGLE ===
  if (menuToggle && navLinks) {
    // Event untuk membuka/menutup menu saat tombol hamburger diklik
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation(); // Mencegah event klik menyebar ke elemen lain
      navLinks.classList.toggle("active"); // Tambah/hapus class "active" pada menu navigasi
    });

    // Event untuk menutup menu jika pengguna mengklik di luar area menu
    document.addEventListener("click", (e) => {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove("active"); // Hapus class "active" jika klik di luar menu
      }
    });

    // Event untuk menutup menu jika pengguna menekan tombol "Escape" pada keyboard
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") navLinks.classList.remove("active");
    });

    // Event untuk menutup menu setelah salah satu item navigasi diklik
    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") navLinks.classList.remove("active"); // Hanya berlaku jika elemen yang diklik adalah link
    });
  }
   // ===== Back to Top Button =====
  // Ambil tombol back-to-top dari DOM
  const backToTopButton = document.getElementById("backToTop");

  // Tampilkan tombol jika halaman di-scroll lebih dari 300px
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  // Scroll secara smooth ke atas saat tombol di-klik
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
});
