// Saves options to chrome.storage
const saveOptions = () => {
  const usePrefix = document.getElementById("prefix").checked;

  // Save it using the Chrome extension storage API and reload the page
  chrome.storage.sync.set({ usePrefix: usePrefix }, () => {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      function (arrayOfTabs) {
        if (arrayOfTabs[0].url.startsWith("https://cms.guc.edu.eg")) {
          chrome.tabs.reload(arrayOfTabs[0].id);
        }
      }
    );
  });
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome.storage.sync.get({ usePrefix: false }, (items) => {
    document.getElementById("prefix").checked = items.usePrefix;
  });
};

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("prefix").addEventListener("change", saveOptions);
