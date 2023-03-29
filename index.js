// Added click event to all the button
for (var i = 0; i < 5; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    document.getElementById("rating").innerHTML = Number(this.innerHTML);
  });
}

// Queryed elemnts by class
const submit = document.querySelector(".btn-submit");
const submitAgain = document.querySelector(".btnTryAgain");
// Get elements by id
const submitContainer = document.getElementById("containers");
const thank_you_Container = document.getElementById("thank-you-box");

// Added click event on Submit Button
submit.addEventListener("click", function () {
  submitContainer.classList.add("hidden");
  thank_you_Container.classList.remove("hidden");
});

// Added click event on Submit Again Button
submitAgain.addEventListener("click", function () {
  thank_you_Container.classList.add("hidden");
  submitContainer.classList.remove("hidden");
});
