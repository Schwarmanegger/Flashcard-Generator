// ELEMENT REFERENCES
const notesBox = document.getElementById("notesBox");
const flashToggle = document.getElementById("flashToggle");
const flashPanel = document.getElementById("flashPanel");
const addBtn = document.getElementById("addBtn");
const addMenu = document.getElementById("addMenu");


// NOTES AUTOSAVE
notesBox.innerHTML = localStorage.getItem("memora_notes") || "";

notesBox.addEventListener("input", () => {
  localStorage.setItem("memora_notes", notesBox.innerHTML);

  notesBox.style.height = "auto";
  notesBox.style.height = notesBox.scrollHeight + "px";
});

// FLASHCARD PANEL TOGGLE
flashToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  flashPanel.classList.toggle("open");
});

// ADD MENU TOGGLE
addBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  addMenu.classList.toggle("open");
});

// CLICK OUTSIDE → CLOSE
document.addEventListener("click", (e) => {
  const insideAdd = addBtn.contains(e.target) || addMenu.contains(e.target);
  const insideFlash = flashToggle.contains(e.target) || flashPanel.contains(e.target);

  if (!insideAdd) addMenu.classList.remove("open");
  if (!insideFlash) flashPanel.classList.remove("open");
});

// ESC KEY → CLOSE MENUS
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    addMenu.classList.remove("open");
    flashPanel.classList.remove("open");
  }
});

const greeting = document.getElementById("greetingMessage");

// Show greeting after slight delay (smooth fade-in)
window.addEventListener("load", () => {
  setTimeout(() => greeting.classList.add("show"), 300);
});

const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", () => {
  console.log("Generate Flashcards clicked!");
  // your generation logic will go here
});

// Create deck button handler
const createDeckBtn = document.getElementById("createDeckBtn");
createDeckBtn.addEventListener("click", () => {
  console.log("Create New Deck clicked!");
  // TODO: open deck creation modal or navigate to deck builder
});

// Accessible keyboard activation (Enter/Space) is already handled by button element.
// Add handler for Add Class button (currently placeholder)
const addClassBtn = document.getElementById("addClassBtn");
addClassBtn.addEventListener("click", () => {
  console.log("Add Class clicked!");
  // TODO: prompt for class name, then append to #classList
});

// My Classes button → navigate to new page
const myClassesBtn = document.getElementById("myClassesBtn");
myClassesBtn.addEventListener("click", () => {
  window.location.href = "myclasses.html";
});


