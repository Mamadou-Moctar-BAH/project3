function upDate(previewPic) {
  const previewDiv = document.getElementById("image");
  previewDiv.style.backgroundImage = `url('${previewPic.src}')`;
  previewDiv.textContent = previewPic.alt || "Image preview";
}

function unDo() {
  const previewDiv = document.getElementById("image");
  previewDiv.style.backgroundImage = "";
  previewDiv.textContent = "Hover over an image below to display here";
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".grid-gallery img").forEach((img) => {
    img.addEventListener("mouseover", () => upDate(img));
    img.addEventListener("mouseout", unDo);
  });
});
