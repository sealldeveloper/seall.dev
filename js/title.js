
currentvalue=''
if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", function() {
    loaded();
  });
} else if (document.attachEvent) {
  document.attachEvent("onreadystatechange", function() {
    loaded();
  });
}
document.addEventListener('visibilitychange', function(){
  if (document.visibilityState==='hidden') {
    currentvalue=document.title
    clearInterval(titletimer)
    page=window.location.href.split('seall.dev/')[1]
    if (page === '') {
      document.title='Home - Paused'
    } else {
      page[0].toUpperCase()
      document.title=page+' - Paused'
    }
    
  } else {
    if (currentvalue !== '') {
      clearInterval(titletimer)
      currentvalue=titleText.find((o,i) => {
        if (o===currentvalue){
          x=i+1
          clearInterval(titletimer)
          loaded()
        }
      })
    }
    currentvalue=''
    }
    
  
})

function loaded() {
  titletimer=setInterval(loop, 400);
}
var x = 0;
var titleText = ["Seal ✵", "Seal ✵","Seal", "Sea", "Se", "S", "S", "S", "Se", "Sea", "Seal", "Seal ✵"];

function loop() {
  document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}