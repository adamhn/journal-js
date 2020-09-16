(function() {
    //
    // Variables
    //
    const entryForm = document.querySelector("#entry-form");
    const entriesList = document.querySelector(".entries-list");
    const entryTitle = document.querySelector(".entry-title");
    const entryTextbox = document.querySelector(".entry-textbox");

    const lastChangedSpan = document.querySelector(".date-updated");

    var entries = [];

    //
    // Methods
    //
    function onEntrySubmit(event) {
        event.preventDefault();

        addNewEntry(entryTitle.value, entryTextbox.value);
        updateEntries();
        clearInputFields();

        console.log(entries);
    }

    // Add entry
    function addNewEntry(title, description) {
        let entry = {
            entryTitle: title,
            entryDescription: description,
            entryDate: getCurrentDateTime()
        }

        entries.push(entry);   
    }

    function updateEntries() {
        // Clear out entires from list in html dom 
        entriesList.innerHTML = "";

        entries.forEach(entry => {
            const displayEntryBtn = document.createElement("button");
            displayEntryBtn.className = "display-entry-button";
            displayEntryBtn.innerText = entry.entryDate;
            entriesList.insertAdjacentElement('afterbegin', displayEntryBtn); // Insert at the start of entires

            const singleEntryTitleEl = document.createElement("h3");
            singleEntryTitleEl.className = "single-entry title"
            singleEntryTitleEl.innerText = entry.entryTitle;
            singleEntryTitleEl.style.display = "none";
            entriesList.insertAdjacentElement('afterbegin', singleEntryTitleEl);

            const singleEntryTextEl = document.createElement("div");
            singleEntryTextEl.className = "single-entry clear";
            singleEntryTextEl.innerText = entry.entryDescription
            singleEntryTextEl.style.display = "none";
            entriesList.insertAdjacentElement('afterbegin', singleEntryTextEl);

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
        })

        updateLastChangedDate();
    }

    // Updates last changed date span 
    function updateLastChangedDate() {
        lastChangedSpan.textContent = "Last updated: " + getCurrentDateTime();
    }

    function clearInputFields() {
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


