function upDate(previewPic) {
  const previewDiv = document.getElementById("image");
  previewDiv.style.backgroundImage = `url('${previewPic.src}')`;
  previewDiv.textContent = previewPic.alt || "Image preview";
  console.log(`Focus/Hover sur: ${previewPic.alt}`);
}

function unDo() {
  const previewDiv = document.getElementById("image");
  previewDiv.style.backgroundImage = "";
  previewDiv.textContent = "Hover over an image below to display here";
  console.log("Reset de l'aperçu");
}

function addTabIndex() {
  const images = document.querySelectorAll(".grid-gallery img");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0"); // clavier
  }
  console.log("tabindex ajouté à chaque image");
}

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".grid-gallery img");

  // Ajout tabindex
  addTabIndex();

  // Boucle sur chaque image
  images.forEach((img) => {
    // Souris
    img.addEventListener("mouseover", () => upDate(img));
    img.addEventListener("mouseout", unDo);

    // Clavier
    img.addEventListener("focus", () => upDate(img));
    img.addEventListener("blur", unDo);
  });
});
