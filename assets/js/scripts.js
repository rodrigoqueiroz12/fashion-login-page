function Empty(input) {
  let label = input.nextElementSibling;

  input.value !== ""
    ? label.classList.add("active")
    : label.classList.remove("active");
}

const form = document.querySelector("form.login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault;
});
