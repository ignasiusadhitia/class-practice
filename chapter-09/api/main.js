// buat variabel penampung
let users = [];
const api = "https://randomuser.me/api";
const results = 100;
let page = 1;
let searchKeyword = "";

fetchData();

function fetchData() {
  fetch(`${api}?page=${page}&results=${results}`)
    .then((res) => res.json())
    .then((data) => {
      users = data.results;

      const filteredUsers = users.filter(
        (user) =>
          user.name.first.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          user.name.last.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      displayUsers(searchKeyword ? filteredUsers : users);
    });
}

function displayUsers(users) {
  const userContainer = document.getElementById("user-container");
  userContainer.innerHTML = "";

  users.map((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("card");

    userCard.innerHTML = `
    <div class="image-wrapper">
    <img
      src="${user.picture.large}"
      alt="${user.name.first}"
      class="user-image"
    />
  </div>
  <div class="text-wrapper">
    <h2>${user.name.first} ${user.name.last}</h2>
    <p>${user.email}</p>
    <p>${user.location.city}, ${user.location.state}</p>
  </div>
    `;
    userContainer.appendChild(userCard);
  });
}

const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function updatePrevButtonState() {
  if (page === 1) {
    prevButton.classList.add("disabled");
    prevButton.setAttribute("disabled", true);
  } else {
    prevButton.classList.remove("disabled");
    prevButton.removeAttribute("disabled");
  }
}

updatePrevButtonState();

function navigate(nav) {
  if (nav === "next") {
    page += 1;
  }

  if (nav === "prev") {
    if (page > 1) {
      page -= 1;
    }
  }

  updatePrevButtonState();

  fetchData();
}
const searchInput = document.getElementById("search");

function search() {
  searchKeyword = searchInput.value;

  fetchData();
}
