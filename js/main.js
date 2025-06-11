function showConfirmation(event) {
  event.preventDefault(); // Stop form from reloading the page
  document.getElementById("confirmation").style.display = "block";
}
window.addEventListener('DOMContentLoaded', () => {
  const filename = window.location.pathname.split("/").pop();

  if (filename === "" || filename === "index.html") {
    const toast = document.getElementById("toast");
    toast.classList.add("show");

    // Auto-hide after 4 seconds
    setTimeout(() => {
      toast.classList.remove("show");
    }, 4000);
  }

  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(event) {
      const name = document.getElementById('name');
      if (name && !name.value.trim()) {
        alert("Please enter your name before submitting.");
        event.preventDefault();
      }
    });
  }
});
