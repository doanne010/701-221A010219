/* ============================================
   701-221A010219 - Dương Ngọc Đoàn
   File JS dùng chung cho toàn bộ website
   (đánh dấu menu đang active theo trang hiện tại)
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
});
