let progressBar = document.querySelector("#progress");
 
window.addEventListener("scroll", function () {
  let totalHeight = document.body.clientHeight - window.innerHeight;
  let width = Math.floor((window.pageYOffset / totalHeight) * 100);
  progressBar.style.width = `${width}%`;
});
