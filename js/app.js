
document.addEventListener('DOMContentLoaded', () => {

   
    const tutorials = [{
        title: "Guia Completo de Flexbox",
        category: "CSS",
        category_id: "css",
        description: "Aprenda a criar layouts flexíveis e responsivos com o guia definitivo de CSS Flexbox.",
        url: "tutorials/tutorial-flexbox.html",
        image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1806&auto=format&fit=crop",
        date: "2025-06-16"
    }, {
        title: "Introdução ao JavaScript Moderno (ES6+)",
        category: "JavaScript",
        category_id: "js",
        description: "Descubra as funcionalidades essenciais do ES6+, como arrow functions, let/const e desestruturação.",
        url: "#",
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=1770&auto=format&fit=crop",
        date: "2025-06-15"
    }, {
        title: "HTML Semântico: A Base de Tudo",
        category: "HTML",
        category_id: "html",
        description: "Entenda a importância de usar as tags HTML corretas para acessibilidade e SEO.",
        url: "#",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1770&auto=format&fit=crop",
        date: "2025-06-14"
    }, {
        title: "Variáveis CSS: O Poder dos Custom Properties",
        category: "CSS",
        category_id: "css",
        description: "Otimize seu CSS e crie temas dinâmicos com a utilização de variáveis nativas.",
        url: "#",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1770&auto=format&fit=crop",
        date: "2025-06-12"
    }];

    const cardsContainer = document.getElementById('cards');
    const searchInput = document.getElementById('search');
    const filterContainer = document.getElementById('filter-container');
    
    let activeCategory = 'todos';

   
    function renderCards(list) {
        cardsContainer.innerHTML = '';
        if (list.length === 0) {
            cardsContainer.innerHTML = '<p class="not-found">Nenhum tutorial encontrado com os filtros aplicados.</p>';
            return;
        }

        list.forEach(tutorial => {
            const card = document.createElement('a');
            card.href = tutorial.url;
            card.classList.add('card');
            card.innerHTML = `
                <img src="${tutorial.image}" alt="Imagem de capa do tutorial ${tutorial.title}" class="card-image">
                <div class="card-content">
                    <h3>${tutorial.title}</h3>
                    <p>${tutorial.description}</p>
                    <span class="category">${tutorial.category}</span>
                </div>
            `;
            cardsContainer.appendChild(card);
        });
    }

    
    function createFilterButtons() {
        const categories = ['Todos', ...new Set(tutorials.map(t => t.category))];
        categories.forEach(category => {
            const button = document.createElement('button');
            button.classList.add('filter-btn');
            button.innerText = category;
            
            if (category === 'Todos') {
                button.classList.add('active');
            }

            button.addEventListener('click', () => {
                activeCategory = category.toLowerCase();
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                applyFilters();
            });
            filterContainer.appendChild(button);
        });
    }
    

    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        let filteredTutorials = tutorials;

        if (activeCategory !== 'todos') {
            filteredTutorials = filteredTutorials.filter(tutorial => 
                tutorial.category.toLowerCase() === activeCategory
            );
        }

        if (searchTerm) {
             filteredTutorials = filteredTutorials.filter(tutorial =>
                tutorial.title.toLowerCase().includes(searchTerm) ||
                tutorial.description.toLowerCase().includes(searchTerm)
            );
        }

        renderCards(filteredTutorials);
    }
    

    if (cardsContainer && filterContainer && searchInput) {
        createFilterButtons();
        applyFilters();
        searchInput.addEventListener('input', applyFilters);
    }
    
    
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});
