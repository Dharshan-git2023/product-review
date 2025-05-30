const stars = document.querySelectorAll(".star");
const ratingInput = document.getElementById("rating");
const form = document.getElementById("reviewForm");
const output = document.getElementById("output");

// Star rating logic
stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    ratingInput.value = index + 1;
    highlightStars(index);
  });
});

function highlightStars(index) {
  stars.forEach((star, i) => {
    star.classList.toggle("selected", i <= index);
  });
}

// Form submit logic
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const product = document.getElementById("product").value.trim();
  const purchaseDate = document.getElementById("purchaseDate").value;
  const rating = ratingInput.value;
  const review = document.getElementById("review").value.trim();
  const recommend = document.querySelector('input[name="recommend"]:checked')?.value;

  if (!name || !email || !product || !purchaseDate || !review || !rating || !recommend) {
    alert("Please fill out all fields and rate the product.");
    return;
  }

  output.style.display = "block";
  output.innerHTML = `
    Thank you, <strong>${name}</strong>!<br>
    Product: <strong>${product}</strong> (Purchased on ${purchaseDate})<br>
    Rating: <strong>${rating} star${rating > 1 ? "s" : ""}</strong><br>
    Recommendation: <strong>${recommend}</strong><br>
    Your Review: <em>"${review}"</em>
  `;

  form.reset();
  highlightStars(-1);
  ratingInput.value = 0;
});
const backgrounds = [
  'linear-gradient(to bottom right, #c2e9fb, #a1c4fd)',
  'linear-gradient(to bottom right, #fbc2eb, #a6c1ee)',
  'linear-gradient(to bottom right, #d4fc79, #96e6a1)',
  'linear-gradient(to bottom right, #ffecd2, #fcb69f)',
  'linear-gradient(to bottom right, #a1c4fd, #c2e9fb)'
];

let currentBg = 0;
const bgToggle = document.getElementById('bgToggle');
if (bgToggle) {
  bgToggle.addEventListener('click', () => {
    currentBg = (currentBg + 1) % backgrounds.length;
    document.body.style.background = backgrounds[currentBg];
  });
}
const formBackgrounds = [
  '#ffffff',
  '#f0f8ff',
  '#fffaf0',
  '#e8f5e9',
  '#f3e5f5'
];

let currentFormBg = 0;
const formToggle = document.getElementById('formToggle');
const reviewContainer = document.querySelector('.review-container');

if (formToggle && reviewContainer) {
  formToggle.addEventListener('click', () => {
    currentFormBg = (currentFormBg + 1) % formBackgrounds.length;
    reviewContainer.style.background = formBackgrounds[currentFormBg];
  });
}

