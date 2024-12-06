<template>
  <div class="container">
    <img src="/bungaantonio-brand.jpeg" alt="Bung Antonio" class="profile-image">
    <div class="profile-text">
      <h1>Bunga António</h1>
      <p>"Start-ups crescem em ambientes de forte colaboração e disrupção"</p>
    </div>

    <div class="timeline">
      <div class="timeline-event" v-for="(event, index) in timelineEvents" :key="index">
        <h3>{{ event.title }}</h3>
        <p>{{ event.description }}</p>
      </div>
    </div>

    <!-- Novo Botão com Empatia -->
    <a href="https://www.linkedin.com/in/bungaantonio" class="cta-button" target="_blank">
      Vamos Conversar <span class="icon">💬</span>
    </a>

    <!-- Redes sociais -->
    <div class="social-links">
      <a href="https://www.linkedin.com/in/bungaantonio" class="social-link" target="_blank">
        <i class="fab fa-linkedin"></i>LinkedIn
      </a>
      <a href="https://github.com/bungantonio" class="social-link" target="_blank">
        <i class="fab fa-github"></i>GitHub
      </a>
      <a href="https://twitter.com/bungaantonio" class="social-link" target="_blank">
        <i class="fab fa-twitter"></i>Twitter
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timelineEvents: [
        {
          title: 'Introdução ao Desenvolvimento',
          description: 'Desde pequeno, sempre fui fascinado por tecnologia. Comecei a aprender programação em minha adolescência e logo percebi que era aquilo que queria fazer.'
        },
        {
          title: 'Primeiros Passos no Código',
          description: 'No início, fui autodidata, estudando programação básica. Meu primeiro projeto foi criar um simples site com HTML e CSS, o que me deu a confiança para continuar aprendendo.'
        },
        {
          title: 'Início da Faculdade e Aprendizado Formal',
          description: 'Quando entrei na faculdade, tive a oportunidade de estudar mais profundamente linguagens como Python e JavaScript. Foi quando comecei a trabalhar em projetos reais e a me envolver com desenvolvimento de software profissional.'
        },
        {
          title: 'Desenvolvimento Profissional',
          description: 'Com o tempo, comecei a trabalhar em projetos de maior escala, incluindo aplicativos web e sistemas de gerenciamento de dados, aplicando conceitos modernos de desenvolvimento como frameworks e metodologias ágeis.'
        },
        {
          title: 'Reflexões Finais',
          description: 'Hoje, sou um desenvolvedor apaixonado por tecnologia, sempre buscando aprender e aplicar novos conhecimentos. Estou empolgado com as oportunidades futuras no campo do desenvolvimento de software.'
        }
      ]
    };
  },
  mounted() {
    const timelineEvents = this.$el.querySelectorAll(".timeline-event");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.5 });

    timelineEvents.forEach(event => {
      observer.observe(event);
    });
  }
};
</script>

<style scoped>
body {
  font-family: 'Aptos Display', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  color: #333;
  text-align: center;
  line-height: 1.6;
  position: relative;
}

/* Fundo gráfico subtil (devo escolher um fundo**) */
body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/cover.jpg') no-repeat center center/cover;
  opacity: 0.1;
  z-index: -1;
  /* Fica atrás do conteúdo */
}

.container {
  width: 90%;
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
}

.profile-image {
  border-radius: 50%;
  width: 180px;
  height: 180px;
  object-fit: cover;
  margin-bottom: 30px;
  border: 5px solid #3498db;
}

.profile-text {
  text-align: center;
  max-width: 600px;
}

h1 {
  font-size: 3rem;
  color: #2c3e50;
  font-weight: bold;
  margin-bottom: 10px;
  letter-spacing: 1px;
}

p {
  font-size: 1.2rem;
  color: #34495e;
  line-height: 1.8;
  margin: 10px 0;
}

.timeline {
  margin-top: 50px;
  text-align: left;
}

.timeline-event {
  margin: 20px 0;
  position: relative;
  padding-left: 40px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.timeline-event.visible {
  opacity: 1;
  transform: translateY(0);
}

.timeline-event::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 20px;
  height: 20px;
  background-color: #3498db;
  border-radius: 50%;
  box-shadow: 0 0 0 3px white;
}

.timeline-event h3 {
  margin: 0;
  font-size: 1.5rem;
  color: #2980b9;
}

.timeline-event p {
  font-size: 1.1rem;
}

.cta-button {
  display: inline-block;
  background-color: #2980b9;
  color: white;
  padding: 15px 30px;
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s ease;
  margin-top: 50px;
}

.cta-button:hover {
  background-color: #1abc9c;
}

.cta-button .icon {
  margin-left: 10px;
}

.social-links {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  font-size: 1.5rem;
  color: #3498db;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.social-link:hover {
  transform: scale(1.1);
}

.social-link i {
  margin-right: 10px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  h1 {
    font-size: 2.5rem;
  }

  .cta-button {
    padding: 12px 25px;
  }
}
</style>