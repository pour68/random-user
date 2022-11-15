const userContainer = document.querySelector(".user__container");
const randomUserBtn = document.querySelector("#random-user");

const users = [
  {
    id: 1,
    image: "male-01.png",
    fullName: "Pouria Nayeb",
    position: "CEO and consultant",
    education: "Computer science",
  },
  {
    id: 2,
    image: "male-02.png",
    fullName: "Hamed Abdeli",
    position: "Manager",
    education: "Organic chemistery",
  },
  {
    id: 3,
    image: "female-01.png",
    fullName: "Sedighe Amiri",
    position: "Chief",
    education: "Food and health",
  },
  {
    id: 4,
    image: "female-02.png",
    fullName: "Rebeka Mohammadi",
    position: "Athletic",
    education: "Run",
  },
  {
    id: 5,
    image: "female-03.png",
    fullName: "Hellen kohi",
    position: "Bank",
    education: "Statistics",
  },
];

const randomUserIndex = () => Math.floor(Math.random() * users.length);

const selectRandomUserAndDisplay = () => {
  let user = users[randomUserIndex()];

  userContainer.innerHTML = `
        <header class="user__header">
            <img src="imgs/${user.image}" alt="${user.fullName}" />
            <h1>${user.fullName}</h1>
        </header>
  
        <div class="user__body">
            <h3>${user.position}</h3>
            <p>${user.education}</p>
        </div>
        `;
};

randomUserBtn.addEventListener("click", () => {
  selectRandomUserAndDisplay();
});

window.addEventListener("DOMContentLoaded", () => {
  selectRandomUserAndDisplay();
});
