<template>
    <div v-if="postLoaded">
      <!-- Post encontrado -->
      <div v-if="postContent" class="bg-white p-8 rounded-lg shadow-md">
        <div class="flex items-center justify-between mb-6">
          <router-link to="/blog" class="text-blue-600 hover:underline">
            &larr; Voltar para o Blog
          </router-link>
          <span class="text-gray-500 text-sm">Publicado em: {{ formatDate(post.date) }}</span>
        </div>
  
        <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
        <p class="text-gray-600 mb-4">{{ post.description }}</p>
  
        <div class="mb-6">
          <span v-for="tag in post.tags" :key="tag"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {{ tag }}
          </span>
        </div>
  
        <div v-html="postContent" class="prose max-w-none mb-8"></div>
  
        <!-- Navegação Próximo/Anterior -->
        <NavigationLinks :previousPost="previousPost" :nextPost="nextPost" />
      </div>
  
      <!-- Post não encontrado -->
      <div v-else>
        <p>Post não encontrado. 
          <router-link to="/blog" class="text-blue-600 hover:underline">Voltar para o Blog</router-link>
        </p>
      </div>
    </div>
  
    <!-- Carregando -->
    <div v-else>
      <p>Carregando Post...</p>
    </div>
  </template>
  
  <script>
  import PostService from '../services/PostService';
  import { marked } from 'marked';
  import NavigationLinks from './NavigationLinks.vue'; // Componente extraído para navegação
  
  export default {
    components: {
      NavigationLinks,
    },
    data() {
      return {
        post: null,
        allPosts: [],
        nextPost: null,
        previousPost: null,
        postContent: null,
        postLoaded: false,
      };
    },
    async mounted() {
      await this.fetchPostsAndContent();
      this.postLoaded = true;
    },
    watch: {
      '$route.params.postId': {
        async handler() {
          this.postLoaded = false;
          await this.fetchPostsAndContent();
          this.postLoaded = true;
        },
        immediate: true,
      },
    },
    methods: {
      async fetchPostsAndContent() {
        try {
          const allPosts = await PostService.loadPosts();
          if (!allPosts || allPosts.length === 0) {
            console.error("No posts found or error loading them.");
            this.clearPostData();
            return;
          }
          this.allPosts = allPosts;
  
          const postId = this.$route.params.postId;
          const post = await PostService.getPost(postId);
  
          if (post) {
            this.postContent = marked.parse(post.body);
            this.post = post;
            this.setNavigationPosts(postId);
          } else {
            this.clearPostData();
          }
        } catch (error) {
          console.error("Erro ao carregar post:", error);
          this.clearPostData();
        }
      },
      clearPostData() {
        this.post = null;
        this.postContent = null;
        this.nextPost = null;
        this.previousPost = null;
      },
      setNavigationPosts(postId) {
        const currentIndex = this.allPosts.findIndex(p => p.id === postId);
  
        if (currentIndex !== -1) {
          this.nextPost = this.allPosts[currentIndex + 1] || null;
          this.previousPost = this.allPosts[currentIndex - 1] || null;
        } else {
          console.warn(`Post with ID ${postId} not found in allPosts.`);
          this.nextPost = null;
          this.previousPost = null;
        }
      },
      formatDate(dateString) {
        return PostService.formatDate(dateString);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Carregando, mensagens de erro e navegação extraída */
  </style>
  