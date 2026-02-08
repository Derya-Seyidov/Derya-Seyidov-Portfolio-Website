// Opens the modal and shows the clicked image
function openModal(imgElement) {
  const modal = document.getElementById("lightbox");
  const modalImg = document.getElementById("lightbox-img");

  modal.style.display = "block";
  modalImg.src = imgElement.src;
}

// Closes the modal
function closeModal() {
  document.getElementById("lightbox").style.display = "none";
}

// Optional: Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
