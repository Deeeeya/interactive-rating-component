const start = document.getElementById("ratingStart");
const end = document.getElementById("ratingEnd");
const ratings = document.querySelectorAll(".ratings");
console.log(ratings);
var userValue = null;

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    ratings.forEach((button) => {
      button.classList.remove("active");
    });
    rating.classList.add("active");
  });
});

const handleValue = (number) => {
  const userValue = number;
  userValue(userValue);
};

function userValue() {
  var element = document.getElementById("ratings");
  element.classList.toggle("ratingActive");
}

submitButton.addEventListener("click", function () {
  if (userValue >= 1 && userValue <= 5) {
    start.style.display = "none";
    end.style.display = "inline";
    document.getElementById("userRating").innerHTML = `${userValue}`;
  } else {
    console.log("Select an option!");
  }
});
