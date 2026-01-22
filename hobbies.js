function addHobby() {
  const input = document.getElementById("hobbyInput");
  const hobbyName = input.value.trim();

  if (hobbyName === "") {
    alert("Please enter a hobby 💗");
    return;
  }

  const hobbyList = document.getElementById("hobbyList");

  // Create hobby card
  const card = document.createElement("div");
  card.className = "hobby-card";

  card.innerHTML = `
    <div class="hobby-title">
      <input type="checkbox" />
      <strong>${hobbyName}</strong>
    </div>

    <div class="hobby-actions">
      <span onclick="editHobby(this)">✏️</span>
      <span onclick="deleteHobby(this)">🗑️</span>
    </div>

    <p>📝 How did it go today?</p>
    <textarea rows="3" placeholder="Write your reflection here ✨"></textarea>
  `;

  hobbyList.appendChild(card);
  input.value = "";
}

// DELETE hobby
function deleteHobby(icon) {
  const card = icon.closest(".hobby-card");
  card.remove();
}

// EDIT hobby name
function editHobby(icon) {
  const card = icon.closest(".hobby-card");
  const title = card.querySelector("strong");
  const newName = prompt("Edit your hobby ✨", title.textContent);

  if (newName !== null && newName.trim() !== "") {
    title.textContent = newName ;
  }
}
