document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("writing-mosaic");

  // === RENDER VIGNETTES ===
  articles.forEach((a, i) => {
    const div = document.createElement("div");
    div.className = "writing-card";
    div.dataset.article = i;
    div.style.setProperty("--r", `${(Math.random() - 0.5) * 8}deg`);
    div.style.setProperty("--x", `${(Math.random() - 0.5) * 20}px`);
    div.style.setProperty("--y", `${(Math.random() - 0.5) * 20}px`);
    div.innerHTML = `
      <div class="card-inner">
        <img src="${a.img}" alt="${a.title}">
        <div class="card-label"><h5>${a.title}</h5></div>
      </div>
    `;
    container.appendChild(div);
  });

  // === MODAL LOGIC ===
  const modal = document.getElementById("article-modal");
  const closeBtn = modal.querySelector(".close-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalText = document.getElementById("modal-text");

  container.addEventListener("click", (e) => {
    const card = e.target.closest(".writing-card");
    if (!card) return;
    const a = articles[+card.dataset.article];
    modalTitle.textContent = a.title;
    modalText.innerHTML = a.text;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  const closeModal = () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  };
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
});
