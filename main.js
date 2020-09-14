const entryForm = document.getElementById("entry-form");
const entryTextbox = document.getElementsByClassName("entry-textbox")[0];
const entriesSection = document.getElementById("entries-section");

function onEntrySubmit(event) {
    event.preventDefault();

    // Create a single entry element from text in input textbox
    const singleEntryEl = document.createElement("div");
    singleEntryEl.className = "single-entry";
    singleEntryEl.innerText = entryTextbox.value
    entriesSection.appendChild(singleEntryEl);
}

entryForm.addEventListener("submit", onEntrySubmit);

