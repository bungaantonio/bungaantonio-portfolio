<template>
  <div class="container mx-auto p-6 max-w-3xl text-center">
    <img src="/bungaantonio-brand.jpeg" alt="Bunga António" class="w-40 h-40 rounded-full mx-auto border-4 border-blue-500 shadow-lg">
    
    <div class="mt-4">
      <h1 class="text-4xl font-bold text-gray-900">Bunga António</h1>
      <p class="text-lg text-gray-600 italic mt-2">"Start-ups crescem em ambientes de forte colaboração e disrupção"</p>
    </div>
    
    <div class="timeline mt-10 space-y-8">
      <div v-for="(event, index) in sortedTimelineEvents" :key="index" class="relative p-6 bg-white shadow-md rounded-lg transform transition duration-500 hover:scale-105">
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 bg-blue-500 text-white text-sm font-bold px-4 py-1 rounded-full">
          {{ event.year }}
        </div>
        <h3 class="text-2xl font-semibold text-blue-600 mt-4">{{ event.title }}</h3>
        <p class="text-gray-700 mt-2">{{ event.description }}</p>
      </div>
    </div>
    
    <a href="https://www.linkedin.com/in/bungaantonio" class="mt-8 inline-block bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-full transition duration-300 hover:bg-blue-500 shadow-lg">
      Vamos Conversar 💬
    </a>
    
    <div class="mt-6 flex justify-center space-x-4">
      <a href="https://www.linkedin.com/in/bungaantonio" class="text-blue-500 hover:text-blue-700">
        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.32-.03-3-1.75-3s-2.02 1.38-2.02 2.91v5.59h-3v-10h2.88v1.38h.04c.4-.76 1.37-1.56 2.81-1.56 3.01 0 3.54 1.98 3.54 4.56v5.62z"/>
        </svg>
      </a>
      <a href="https://github.com/bungaantonio" class="text-gray-900 hover:text-gray-700">
        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.805 1.304 3.49.997.108-.776.418-1.304.762-1.604-2.665-.3-5.467-1.334-5.467-5.93 0-1.312.468-2.382 1.236-3.22-.123-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.005-.405 1.02.006 2.047.139 3.005.405 2.29-1.552 3.296-1.23 3.296-1.23.656 1.653.243 2.874.12 3.176.768.838 1.236 1.908 1.236 3.22 0 4.61-2.807 5.625-5.479 5.921.43.372.815 1.102.815 2.222v3.293c0 .32.216.693.825.576 4.765-1.586 8.2-6.083 8.2-11.385 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
      <a href="https://twitter.com/bungaantonio" class="text-blue-400 hover:text-blue-600">
        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.954 4.569c-.885.389-1.833.654-2.825.775 1.014-.611 1.794-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.956-2.176-1.555-3.594-1.555-2.719 0-4.924 2.207-4.924 4.923 0 .385.045.759.127 1.122-4.092-.206-7.719-2.166-10.15-5.144-.423.722-.665 1.561-.665 2.457 0 1.695.864 3.194 2.178 4.073-.804-.026-1.56-.246-2.22-.614v.061c0 2.366 1.683 4.342 3.918 4.79-.41.111-.844.171-1.292.171-.315 0-.624-.031-.927-.089.625 1.951 2.445 3.376 4.604 3.415-1.688 1.322-3.81 2.107-6.102 2.107-.396 0-.79-.023-1.175-.067 2.179 1.397 4.765 2.211 7.557 2.211 9.055 0 14.01-7.496 14.01-13.986 0-.209 0-.42-.014-.63.962-.695 1.797-1.562 2.457-2.548l-.047-.02z"/>
        </svg>
      </a>
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue';

const timelineEvents = ref([
  { year: 2025, title: 'Desenvolvimento Profissional', description: 'Trabalhei em projetos de maior escala e apliquei conceitos modernos como frameworks e metodologias ágeis.' },
  { year: 2018, title: 'Início da Faculdade e Aprendizado Formal', description: 'Aprofundei conhecimentos em Python e JavaScript e comecei a desenvolver projetos reais.' },
  { year: 2015, title: 'Primeiros Passos no Código', description: 'Autodidata no início, criei meu primeiro site e segui aprendendo.' },
  { year: 2010, title: 'No princípio...', description: 'Fascinado por tecnologia desde pequeno, comecei minha jornada na programação.' },
]);

const sortedTimelineEvents = computed(() => {
  return timelineEvents.value.sort((a, b) => b.year - a.year);
});
</script>
