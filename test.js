// TEST2 JAVASCRIPT
// Slideshow
        let slideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        function showSlide(idx) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === idx);
            });
        }
        function nextSlide() {
            slideIndex = (slideIndex + 1) % slides.length;
            showSlide(slideIndex);
        }
        setInterval(nextSlide, 3500);

        // Back to top
        const backToTop = document.getElementById('backToTop');
        window.addEventListener('scroll', () => {
            backToTop.style.display = window.scrollY > 300 ? 'flex' : 'none';
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({top: 0, behavior: 'smooth'});
        });

        // Chefs section - fetch images from Unsplash
        const chefs = [
            {
                name: "Elena Moreau",
                role: "Executive Chef",
                bio: "A maestro of French cuisine, Elena brings artistry and passion to every plate.",
                img: "imgs/french chef.jpg"
            },
            {
                name: "Marco Bellini",
                role: "Pasta Specialist",
                bio: "Born in Tuscany, Marco crafts authentic Italian flavors with a modern twist.",
                img: "imgs/italian chef.jpg"
            },
            {
                name: "Aiko Tanaka",
                role: "Sushi Master",
                bio: "Aiko's precision and creativity elevate sushi to an unforgettable experience.",
                img: "imgs/japan chef.jpg"
            },
            {
                name: "Priya Sharma",
                role: "Spice Curator",
                bio: "Priya infuses every dish with the vibrant spirit of Indian spices and tradition.",
                img: "imgs/indian chef.jpg"
            }
        ];
        const chefsGrid = document.getElementById('chefsGrid');
        chefs.forEach(chef => {
            const card = document.createElement('div');
            card.className = 'chef-card';
            card.innerHTML = `
                <img src="${chef.img}" alt="${chef.name}" class="chef-img">
                <div class="chef-name">${chef.name}</div>
                <div class="chef-role">${chef.role}</div>
                <div class="chef-bio">${chef.bio}</div>
            `;
            chefsGrid.appendChild(card);
        });