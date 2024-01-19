document.addEventListener('DOMContentLoaded', function() {
    var speedSelect = document.getElementById('speed');
  
    speedSelect.addEventListener('change', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { speed: speedSelect.value });
      });
    });
  });
  