const dateEl = document.getElementById("date");

const today = new Date();
const options = { weekday: "long", day: "numeric", month: "long" };

dateEl.innerText = today.toLocaleDateString("en-US", options);
