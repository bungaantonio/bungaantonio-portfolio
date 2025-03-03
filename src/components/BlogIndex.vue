<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold mb-6">Blog</h1>

    <div v-if="postsLoaded">
      <div v-if="displayedPosts.length > 0" class="space-y-4 md:space-y-6">
        <div
          v-for="post in displayedPosts"
          :key="post.id"
          class="bg-white p-4 md:p-6 rounded-lg shadow hover:shadow-md transition duration-300"
        >
          <div
            class="flex flex-col md:flex-row items-start md:items-center justify-between mb-2"
          >
            <router-link
              :to="`/blog/${post.id}`"
              class="text-blue-600 hover:underline text-lg md:text-xl font-medium mb-1 md:mb-0"
            >
              {{ post.title }}
            </router-link>
            <span class="text-gray-500 text-sm"
              >Publicado em: {{ formatDate(post.date) }}</span
            >
          </div>
          <p class="text-gray-700">
            {{ post.excerpt }}
            <router-link
              :to="`/blog/${post.id}`"
              class="text-blue-600 hover:underline font-semibold"
            >
              Ler mais
            </router-link>
          </p>
        </div>
      </div>
      <div v-else>
        <p>Ainda não há posts para mostrar.</p>
      </div>

      <!-- Paginação -->
      <div v-if="totalPages > 1" class="mt-8 flex justify-center space-x-2">
        <button
          v-if="currentPage > 1"
          @click="changePage(currentPage - 1)"
          class="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-300 flex items-center justify-center"
          aria-label="Página anterior"
        >
          Anterior
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="changePage(page)"
          :class="{
            'bg-blue-500 text-white hover:bg-blue-600': page === currentPage,
            'pointer-events-none': page === currentPage,
          }"
          class="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-300 flex items-center justify-center"
          :aria-current="page === currentPage ? 'page' : null"
          :aria-label="`Ir para a página ${page}`"
        >
          {{ page }}
        </button>
        <button
          v-if="currentPage < totalPages"
          @click="changePage(currentPage + 1)"
          class="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-300 flex items-center justify-center"
          aria-label="Próxima página"
        >
          Próximo
        </button>
      </div>
    </div>
    <div v-else class="text-center p-4 flex justify-center items-center">
        <p v-if="!hasError">A carregar os Posts...</p>
        <div v-if="!hasError" class="loader"></div>
        <p v-else>Ocorreu um erro ao carregar os posts. Por favor, tente novamente mais tarde.</p>
    </div>
  </div>
</template>

<script>
import PostService from '../services/PostService';
export default {
  data() {
    return {
      posts: [],
      postsLoaded: false,
      currentPage: 1,
      postsPerPage: 5,
       hasError: false, // Add the error
    };
  },
  computed: {
    displayedPosts() {
      const start = (this.currentPage - 1) * this.postsPerPage;
      const end = start + this.postsPerPage;
      return this.posts.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.posts.length / this.postsPerPage);
    },
  },
  async mounted() {
    await this.loadPosts();
  },
  methods: {
    formatDate(dateString) {
      return PostService.formatDate(dateString);
    },
    async loadPosts() {
      try {
        this.posts = await PostService.loadPosts();
        this.postsLoaded = true;
        this.hasError = false;
      } catch (error) {
        console.error('Erro ao carregar posts:', error);
        this.hasError = true;
      }
    },
    changePage(page) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll para o topo ao mudar de página
    },
  },
};
</script>
<style scoped>
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
  margin-left: 10px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
