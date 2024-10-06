function showDetails(project) {
    alert('Detail untuk ' + project);
}

// Prevent form submission for demonstration
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pesan Anda telah dikirim!');
});
