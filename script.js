// Alternância de tema
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
themeToggle.addEventListener("click", () => {
  if (body.classList.contains("bg-white")) {
    // modo dark
    body.classList.remove("bg-white", "text-gray-900");
    body.classList.add("bg-gray-950", "text-white");
    themeToggle.textContent = "🌞";

    skills.forEach((card) => {
      card.classList.remove("bg-gray-100", "text-gray-900");
      card.classList.add("bg-gray-800", "text-white");
    });
  } else {
    // modo light
    body.classList.remove("bg-gray-950", "text-white");
    body.classList.add("bg-white", "text-gray-900");
    themeToggle.textContent = "🌙";

    skills.forEach((card) => {
      card.classList.remove("bg-gray-800", "text-white");
      card.classList.add("bg-gray-100", "text-gray-900");
    });
  }
});

// Puxar foto do GitHub
fetch("https://api.github.com/users/guicoutof")
  .then((res) => res.json())
  .then((data) => {
    const photo = document.getElementById("profile-photo");
    photo.src = data.avatar_url;
  });

// Puxar repositórios do GitHub
const projectsList = document.getElementById("projects-list");
fetch("https://api.github.com/users/guicoutof/repos?sort=updated")
  .then((res) => res.json())
  .then((data) => {
    data.slice(0, 6).forEach((repo) => {
      const card = document.createElement("a");
      card.href = repo.html_url;
      card.target = "_blank";
      card.className =
        "p-5 bg-gray-100 rounded-2xl shadow hover:bg-gray-200 transition flex flex-col justify-between";
      card.innerHTML = `
        <h3 class="text-xl font-semibold mb-2 text-indigo-600">${repo.name}</h3>
        <p class="text-gray-700 text-sm mb-3">${
          repo.description || "Sem descrição."
        }</p>
        <p class="text-gray-500 text-sm">Linguagem: ${
          repo.language || "N/A"
        }</p>
      `;
      projectsList.appendChild(card);
    });
  });
