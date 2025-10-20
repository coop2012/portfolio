// Select all sections you want to animate
const sections = document.querySelectorAll('section');

  // Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // add the class when in view
            observer.unobserve(entry.target); // optional: stop observing after it's visible
        }
    });
}, {
    threshold: 0.1 // 10% of the section must be visible to trigger
});

  // Observe each section
sections.forEach(section => {
    observer.observe(section);
});
