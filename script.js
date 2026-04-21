// ================= COUNTDOWN =================
const eventDate = new Date("Dec 14, 2025 18:30:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "🎉 Acara Dimulai!";
  }
}, 1000);

// ================= MODAL RSVP =================
const modal = document.getElementById("modal");
const btn = document.getElementById("btnRSVP");
const close = document.querySelector(".close");

btn.onclick = () => modal.style.display = "block";
close.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// ================= KIRIM RSVP =================
document.getElementById("kirim").onclick = () => {
  const nama = document.getElementById("nama").value;
  const status = document.getElementById("status").value;

  if (nama === "") {
    alert("Nama harus diisi!");
    return;
  }

  alert(`Terima kasih ${nama}, konfirmasi Anda: ${status}`);
  modal.style.display = "none";
};

// ================= GOOGLE MAP =================
document.getElementById("btnLokasi").onclick = () => {
  window.open("https://www.google.com/maps/search/?api=1&query=Cafe+Ceria+Jakarta");
};

// ================= ANIMASI SCROLL =================
const elements = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

// INIT ANIMATION STYLE
elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.6s ease";
});