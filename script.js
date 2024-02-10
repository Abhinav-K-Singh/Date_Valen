function nextPage() {
    window.location.href = "yes.html";
  }
  function yesButton() {
    document.getElementById("moocha").src="mocha.gif";
  }
  function yesRequest(){
    document.getElementById("moocha").src="mocha2.gif"
  }

let title = document.title;
window.addEventListener("blur", ()=>{
  document.title = "Plss come back 💔"
})
window.addEventListener("focus", ()=>{
  document.title = title
})

const noButton = document.getElementById("noButton");

noButton.addEventListener("mouseover", () => {
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * 80 + "vw";
    noButton.style.top = Math.random() * 80 + "vh";
});
