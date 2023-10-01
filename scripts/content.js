let downloadButtons = document.querySelectorAll("[id=download]");
let buttonNames = document.querySelectorAll("[class=card-body] div strong");
for (let index = 0; index < downloadButtons.length; index++) {
  downloadButtons[index].setAttribute(
    "download",
    buttonNames[index].innerHTML.substring(4).trim()
  );
}
