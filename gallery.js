function upDate(preview) {
  console.log("Alt: " + preview.alt);
  console.log("Source: " + preview.src);
  document.getElementById("image").style.backgroundImage = "url('" + preview.src + "')";
  document.getElementById("image").innerText = preview.alt;
}

function unDo() {
  document.getElementById("image").style.backgroundImage = "url('')";
  document.getElementById("image").innerText = 'Hover over an image below to display here';
}

function addTabFocus(preview) {
  console.log("Focused: " + preview.alt);
  preview.setAttribute("tabfocus", "true");
}

function removeTabFocus(preview) {
  console.log("Blurred: " + preview.alt);
  preview.removeAttribute("tabfocus");
}

function initializeGallery() {
  const images = document.querySelectorAll('.preview');
  images.forEach(img => {
      img.setAttribute('tabindex', '0');
      img.addEventListener('focus', function() { addTabFocus(this); });
      img.addEventListener('blur', function() { removeTabFocus(this); });
  });
  console.log("Gallery initialized");
}

window.onload = initializeGallery;

