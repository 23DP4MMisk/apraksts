document.querySelectorAll('.highlight-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.dataset.target;
      const target = document.getElementById(targetId);
  
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
  
        target.classList.add('highlight');
  
        
        setTimeout(() => {
          target.classList.remove('highlight');
        }, 1000);
      }
    });
});