function openWhatsApp() {
  window.open(
    "https://wa.me/971507720990?text=" + 
    encodeURIComponent("السلام عليكم، أريد الاستفسار عن المخاوير المتاحة."),
    "_blank"
  );
}

function callNow() {
  window.location.href = "tel:+971507720990";
}

function openTikTok() {
  window.open("https://www.tiktok.com/@dar_almkhawer_ae", "_blank");
}

/* زر الأنيميشن */
function animateBtn(btn) {
  btn.classList.add("animate");

  setTimeout(() => {
    btn.classList.remove("animate");
    btn.classList.add("animate-return");

    setTimeout(() => {
      btn.classList.remove("animate-return");
    }, 200);

  }, 200);
}