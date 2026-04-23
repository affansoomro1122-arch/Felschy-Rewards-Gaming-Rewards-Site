// Select elements
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');

// Toggle Sidebar
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('closed');
  
  // Change icon
  const icon = toggleBtn.querySelector('i');
  if (sidebar.classList.contains('closed')) {
    icon.classList.replace('fa-arrow-left', 'fa-arrow-right');
  } else {
    icon.classList.replace('fa-arrow-right', 'fa-arrow-left');
  }
});