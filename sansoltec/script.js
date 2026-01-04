// 1. Inicializa ícones Lucide
lucide.createIcons();

// 2. Lógica de ScrollSpy (Detectar seção ativa ao rolar)
const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px', // Detecta a seção quando ela ocupa a parte central/superior da tela
    threshold: 0
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            // Dispara um evento personalizado que o Alpine.js no HTML está ouvindo
            window.dispatchEvent(new CustomEvent('scroll-spy', { detail: id }));
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Registra todas as seções que possuem ID para serem observadas
document.querySelectorAll('section[id]').forEach(section => {
    observer.observe(section);
});

// 3. Script de envio do formulário
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
});