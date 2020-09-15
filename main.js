(function() {
    //
    // Variables
    //
    const entryForm = document.getElementById("entry-form");
    const entryTitle = document.getElementsByClassName("entry-title")[0];
    const entryTextbox = document.getElementsByClassName("entry-textbox")[0];
    const entriesSection = document.getElementById("entries-section");
    const lastChangedSpan = document.getElementsByClassName("date-updated")[0];

    //
    // Methods
    //
    function onEntrySubmit(event) {
        event.preventDefault();

        // Create a single entry element from text in input textbox
        const singleEntryEl = document.createElement("div");
        singleEntryEl.className = "single-entry clear";
        singleEntryEl.innerText = entryTextbox.value
        entriesSection.appendChild(singleEntryEl);
        
        clearEntryFields();
    }

    // Updates last changed date span 
    function updateLastChangedDate() {
        let nowDate = new Date();
        nowDate.toLocaleDateString('en-US', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
            hour: '2-digit',
        });

        lastChangedSpan.textContent += nowDate.toLocaleString();
    }

    // Clear entry input fields
    function clearEntryFields() {
        entryTextbox.value = ""
        entryTitle.value = ""
    }

    //
    // Inits & Event Listeners
    //
    entryForm.addEventListener("submit", onEntrySubmit);
})();


