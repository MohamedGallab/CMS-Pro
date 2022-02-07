// Initialize button with user's preferred color
let changeName = document.getElementById("changeName");

chrome.storage.sync.get("color", ({ color }) => {
    changeName.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeName.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor,
    });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
    let downloadButtons = document.querySelectorAll('[id=download]');
    let buttonNames = document.querySelectorAll('[class=card-body] div strong');
    for (let index = 0; index < downloadButtons.length; index++) {
        downloadButtons[index].setAttribute("download", buttonNames[index].innerHTML.substring(4).trim());
    }
}