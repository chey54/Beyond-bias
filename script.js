function toggleBio(id) {
    const bio = document.getElementById(id);
    const isVisible = bio.style.display === "block";
    // Close all bios
    document.querySelectorAll('.bio').forEach(b => b.style.display = "none");
    // Open clicked one if it wasn't already open
    if (!isVisible) {
        bio.style.display = "block";
        bio.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}
