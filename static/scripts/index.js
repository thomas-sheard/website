const headHtmlRequest = await fetch('/head.html');
const headHTML = await headHtmlRequest.text();
document.querySelector('head').innerHTML = headHTML;

const headerHTMLRequest = await fetch('/header.html');
const headerHTML = await headerHTMLRequest.text();
document.querySelector('header').innerHTML = headerHTML;

const footerHTMLRequest = await fetch("/footer.html");
const footerHTML = await footerHTMLRequest.text();
document.querySelector("footer").innerHTML = footerHTML;

const button = document.getElementById("toTopButton");

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    if (button) {
      button.style.display = "block";
    }
  } else {
    if (button) {
      button.style.display = "none";
    }
  }
}

window.addEventListener('scroll', scrollFunction);

if (button) {
  button.addEventListener('click', toTop);
} else {
  console.error("toTop / button broken somewhere");
}
