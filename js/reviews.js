function addReview() {
  const txt = document.getElementById("rev");
  const rate = document.getElementById("rate");
  const box = document.getElementById("reviewsBox");

  if (txt.value.trim() === "") return;

  box.innerHTML += `
    <div class="rev-card">
      <div class="rev-stars">${"⭐".repeat(rate.value)}</div>
      <p class="rev-text">${txt.value}</p>
    </div>
  `;

  txt.value = "";
}