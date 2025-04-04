function toggleBio(bioId) {
    let bio = document.getElementById(bioId);
    
    // Check if the bio is currently visible
    if (bio.style.display === "none" || bio.style.display === "") {
        bio.style.display = "block";  // Show the bio
    } else {
        bio.style.display = "none";   // Hide the bio
    }
}
