(function() {
    //
    // Variables
    //
    const entryForm = document.querySelector("#entry-form");
    const entriesList = document.querySelector(".entries-list");
    const entryTitle = document.querySelector(".entry-title");
    const entryTextbox = document.querySelector(".entry-textbox");

    const lastChangedSpan = document.querySelector(".date-updated");

    //
    // Methods
    //
    function onEntrySubmit(event) {
        event.preventDefault();

        // Create a single entry element from text in input textbox
        const displayEntryBtn = document.createElement("button");
        displayEntryBtn.className = "display-entry-button";
        displayEntryBtn.innerText = getCurrentDateTime();
        entriesList.appendChild(displayEntryBtn);

        const singleEntryTitleEl = document.createElement("h3");
        singleEntryTitleEl.className = "single-entry title"
        singleEntryTitleEl.innerText = entryTitle.value;
        singleEntryTitleEl.style.display = "none";
        entriesList.appendChild(singleEntryTitleEl);

        const singleEntryTextEl = document.createElement("div");
        singleEntryTextEl.className = "single-entry clear";
        singleEntryTextEl.innerText = entryTextbox.value
        singleEntryTextEl.style.display = "none";
        entriesList.appendChild(singleEntryTextEl);

        count++;

        displayEntryBtn.addEventListener("click", function() {

            // Hide all entries upon display entry button click
            const allEntries = document.querySelectorAll(".single-entry");
            allEntries.forEach(element => {
                element.style.display = "none";
            });

            // Only show currently pressed entry
            singleEntryTitleEl.style.display = "block";
            singleEntryTextEl.style.display = "block";
        });

        updateLastChanged();
        clearFields();
    }



    // Updates last changed date span 
    function updateLastChanged() {
        lastChangedSpan.textContent = "Last updated: " + getCurrentDateTime();
    }

    function clearFields() {
        entryTitle.value = "";
        entryTextbox.value = "";
    }

    // Gets current date time
    function getCurrentDateTime() {
        let nowDate = new Date();
        nowDate.toLocaleDateString('en-US', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
            hour: '2-digit',
        });

        return nowDate.toLocaleString();
    }

    //
    // Inits & Event Listeners
    //
    entryForm.addEventListener("submit", onEntrySubmit);
})();


