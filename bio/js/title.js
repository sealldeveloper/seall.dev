dog()

if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", function() {
    loaded();
  });
} else if (document.attachEvent) {
  document.attachEvent("onreadystatechange", function() {
    loaded();
  });
}

function loaded() {
  setInterval(loop, 400);
}
var x = 0;
var titleText = ["Seal ✵", "Seal ✵","Seal", "Sea", "Se", "S", "S", "S", "Se", "Sea", "Seal", "Seal ✵"];

function loop() {
  document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}

function dog() {
  window.onload = function() {
    document.addEventListener("contextmenu", function(e) {
      e.preventDefault();
    }, false);
    document.addEventListener("keydown", function(e) {
      //document.onkeydown = function(e) {
      // "F12" key
      if (event.keyCode == 123) {
        disabledEvent(e);
      }
      // "U" key
      if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e);
      }
      // "I" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
      }
      // "J" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
      }
      // "S" key + macOS
      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
      }

    }, false);
    function disabledEvent(e) {
      if (e.stopPropagation) {
        e.stopPropagation();
      } else if (window.event) {
        window.event.cancelBubble = true;
      }
      e.preventDefault();
      return false;
    }
  }

}
