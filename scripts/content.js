chrome.storage.sync.get({ usePrefix: false }, (items) => {
  let usePrefix = items.usePrefix;

  let downloadButtons = document.querySelectorAll("[id=download]");
  let buttonNames = document.querySelectorAll("[class=card-body] div strong");
  let courseName = document.querySelector(
    "[id=ContentPlaceHolderright_ContentPlaceHoldercontent_LabelCourseName]"
  );

  for (let index = 0; index < downloadButtons.length; index++) {
    if (usePrefix) {
      downloadButtons[index].setAttribute(
        "download",
        courseName.innerHTML.match(/[A-Z0-9]+/) +
          " - " +
          buttonNames[index].innerHTML.substring(4).trim()
      );
    } else {
      downloadButtons[index].setAttribute(
        "download",
        buttonNames[index].innerHTML.substring(4).trim()
      );
    }
  }
});
