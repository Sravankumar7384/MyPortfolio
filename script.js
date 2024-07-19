/************************** Scroll reveal  ********************/

ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .project-container,.contact form', {origin:'button'});
ScrollReveal().reveal('.home-contact h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-contact p,.about-content',{origin:'right'});
