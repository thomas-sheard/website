document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toTopButton");

  if (!button) return; 

  function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }

  window.addEventListener('scroll', scrollFunction);
  button.addEventListener('click', toTop);
});
