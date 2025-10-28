// Modal functionality
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelModalBtn = document.getElementById('cancelModalBtn');
const modalOverlay = document.querySelector('.modal-overlay');

// Open modal
openModalBtn.addEventListener('click', () => {
  modal.classList.add('active');
});

// Close modal
closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

cancelModalBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Close modal when clicking overlay
modalOverlay.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Toggle switch functionality
const toggle1 = document.getElementById('toggle1');
const toggle2 = document.getElementById('toggle2');
const toggleStatus1 = document.getElementById('toggleStatus1');
const toggleStatus2 = document.getElementById('toggleStatus2');

toggle1.addEventListener('change', () => {
  toggleStatus1.textContent = toggle1.checked ? 'On' : 'Off';
});

toggle2.addEventListener('change', () => {
  toggleStatus2.textContent = toggle2.checked ? 'On' : 'Off';
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add interaction feedback to all buttons
const allButtons = document.querySelectorAll('.btn:not(:disabled)');

allButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    // Create ripple effect
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    
    this.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add ripple animation styles dynamically
const style = document.createElement('style');
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Initialize toggle statuses
toggleStatus1.textContent = toggle1.checked ? 'On' : 'Off';
toggleStatus2.textContent = toggle2.checked ? 'On' : 'Off';

console.log('UI Styling Demo loaded successfully!');