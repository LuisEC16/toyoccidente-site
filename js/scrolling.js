document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    const triggerBottom = window.innerHeight / 5 * 4;
    const triggerTop = window.innerHeight / 5;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        if (sectionTop < triggerBottom && sectionBottom > triggerTop) {
            section.classList.add("reveal");
        }
    });
});
