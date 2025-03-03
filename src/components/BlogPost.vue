<template>
    <div v-if="postLoaded">
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
            <div class="flex justify-between items-center mt-8 flex-wrap gap-4">
                <router-link v-if="previousPost" :to="`/blog/${previousPost.id}`" class="text-blue-600 hover:underline w-full md:w-auto overflow-hidden text-ellipsis whitespace-nowrap">
                    &larr; Mais recente - {{ previousPost.title }}
                </router-link>
                <router-link v-if="nextPost" :to="`/blog/${nextPost.id}`" class="text-blue-600 hover:underline w-full md:w-auto overflow-hidden text-ellipsis whitespace-nowrap">
                    {{ nextPost.title }} - Mais antigo &rarr;
                </router-link>
            </div>
        </div>
        <div v-else>
            <p>Post não encontrado. <router-link to="/blog" class="text-blue-600 hover:underline">
                    &larr; Voltar para o Blog
                </router-link></p>
        </div>
    </div>
    <div v-else>
        <p>Carregando Post...</p>
    </div>
</template>

<script>
import PostService from '../services/PostService';
import { marked } from 'marked';

export default {
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
            async handler(newPostId) {
                this.postLoaded = false;
                await this.fetchPostsAndContent();
                this.postLoaded = true;
            },
            immediate: true, // Execute a função handler imediatamente quando o componente for montado.
        },
    },
    methods: {
        async fetchPostsAndContent() {
            try {
                const allPosts = await PostService.loadPosts();
                if (!allPosts || allPosts.length === 0) {
                    console.error("No posts found or error loading them.");
                    this.post = null;
                    this.postContent = null;
                    this.allPosts = [];
                    this.nextPost = null;
                    this.previousPost = null;
                    return; // Early exit if no posts
                }
                this.allPosts = allPosts;

                const postId = this.$route.params.postId;
                const post = await PostService.getPost(postId);

                if (post) {
                    this.postContent = marked.parse(post.body);
                    this.post = post;

                    const currentIndex = this.allPosts.findIndex((p) => p.id === postId);

                    if (currentIndex !== -1) {
                        // **Lógica Corrigida (Final):**
                        this.nextPost = this.allPosts[currentIndex + 1] || null; // Mais antigo (+1)
                        this.previousPost = this.allPosts[currentIndex - 1] || null; // Mais recente (-1)
                    } else {
                        console.warn(`Post with ID ${postId} not found in allPosts.`);
                        this.nextPost = null;
                        this.previousPost = null;
                    }
                } else {
                    this.post = null;
                    this.postContent = null;
                    this.nextPost = null;
                    this.previousPost = null;
                }
            } catch (error) {
                console.error("Erro ao carregar post:", error);
                this.post = null;
                this.postContent = null;
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
