function goToPage(pageNumber) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    // Show the selected page
    document.getElementById('page' + pageNumber).classList.add('active');
  }
  
  function showSadPuppy() {
    // Display sad puppy message
    document.getElementById('sadPuppy').classList.remove('hidden');
  }
  
  function shareMoment() {
    alert("Share this sweet moment with your friends!");
  }