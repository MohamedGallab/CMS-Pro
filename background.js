// checks if tabs got updated and excutes once it is
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: addDownloadAttribute
        });
    }
})

// The body of this function will be executed as a content script inside the CMS pages
function addDownloadAttribute() {
    let downloadButtons = document.querySelectorAll('[id=download]');
    let buttonNames = document.querySelectorAll('[class=card-body] div strong');
    let courseName = document.querySelectorAll('[id=ContentPlaceHolderright_ContentPlaceHoldercontent_LabelCourseName]');
    for (let index = 0; index < downloadButtons.length; index++) {
        downloadButtons[index].setAttribute("download", courseName[index].innerHTML.match(/[A-Z0-9]+/) + " - "+buttonNames[index].innerHTML.substring(4).trim());
    }
}
