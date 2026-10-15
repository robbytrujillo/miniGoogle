document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const luckyBtn = document.getElementById("luckyBtn");
  const results = document.getElementById("results");
  const signInBtn = document.getElementById("signInBtn");

  // Membuka Google Search berdasarkan kata kunci.
  function searchGoogle(feelingLucky = false) {
    const query = searchInput.value.trim();

    if (!query) {
      results.textContent = "Silakan masukkan kata kunci pencarian.";
      searchInput.focus();
      return;
    }

    const params = new URLSearchParams();
    params.set("q", query);

    if (feelingLucky) {
      params.set("btnI", "1");
    }

    const searchUrl = `https://www.google.com/search?${params.toString()}`;

    results.replaceChildren();

    const message = document.createElement("p");
    message.textContent = feelingLucky
      ? `Membuka hasil pilihan Google untuk: "${query}"`
      : `Membuka hasil pencarian Google untuk: "${query}"`;

    results.appendChild(message);

    // Buka hasil pencarian di tab baru.
    window.open(searchUrl, "_blank", "noopener,noreferrer");
  }

  // Google Search: klik tombol atau tekan Enter.
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    searchGoogle(false);
  });

  // I'm Feeling Lucky.
  luckyBtn.addEventListener("click", () => {
    searchGoogle(true);
  });

  // Tombol Sign In.
  signInBtn.addEventListener("click", () => {
    window.open(
      "https://accounts.google.com/",
      "_blank",
      "noopener,noreferrer",
    );
  });
});
