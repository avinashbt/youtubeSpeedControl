chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.speed) {
      var video = document.querySelector('video');
      if (video) {
        video.playbackRate = parseFloat(request.speed);
      }
    }
  });
  