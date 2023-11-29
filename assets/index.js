titleChanger = (text, delay) => {
  if (!text) return;

  delay = delay || 2000;

  let counter = 0;

  setInterval(() => {
    if (counter < text.length) document.title = text[counter++];
    else document.title = text[(counter = 0)];
  }, delay);
};

titleChanger(["startpage", "made by misopog", "misopog.xyz"], 2000);


window.onload = function() {
    setInterval(function(){
        var date = new Date();
        var displayTime = date.toLocaleTimeString();

        document.getElementById('clock').innerHTML = displayTime;
    }, 1000); // 1000 milliseconds = 1 second
}
