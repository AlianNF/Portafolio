document.addEventListener('DOMContentLoaded', function() {
  // Skill bar animation (previous code remains the same)
  const skillLevels = document.querySelectorAll('.skill-level');
  
  const observerOptions = {
      threshold: 0.1
  };

  const skillObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.width = entry.target.getAttribute('data-skill');
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  skillLevels.forEach(level => {
      skillObserver.observe(level);
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a.nav-link');
  
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          
          targetSection.scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Project buttons links
  const projectButtons = document.querySelectorAll('.project-card .btn-primary');
  
  const projectLinks = {
      'Laravel Rest API': 'https://github.com/AlianNF/laravel-mysql', // Replace with actual project links
      'Pagina React': 'https://aliannf.github.io/New-react/'
  };

  projectButtons.forEach(button => {
      const projectTitle = button.closest('.card-body').querySelector('.card-title').textContent;
      
      button.addEventListener('click', function(e) {
          e.preventDefault();
          if (projectLinks[projectTitle]) {
              window.open(projectLinks[projectTitle], '_blank');
          }
      });
  });

  // Subtle hover effects for project cards
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
      card.addEventListener('mousemove', function(e) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
      });
  });
});