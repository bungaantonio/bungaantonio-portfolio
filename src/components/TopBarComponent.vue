<template>
    <header id="banner" class="bg-white shadow-md sticky top-0 z-10"
        style="background-image: url('/banner.png'); background-repeat: no-repeat;">
        <div class="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <div class="name-logo">
                <router-link to="/" class="flex items-center">
                    <img src="/bungaantonio.jpg" alt="Bunga António"
                        class="w-12 h-12 rounded-full mx-auto border-4 border-blue-500 shadow-md" />
                </router-link>
            </div>
            <div class="hidden md:block space-x-4">
                <router-link to="/" class="text-gray-800 hover:text-blue-500">Home</router-link>
                <router-link to="/blog" class="text-gray-800 hover:text-blue-500">Blog</router-link>
            </div>
            <div class="md:hidden">
                <button @click="toggleMenu" class="text-gray-800 hover:text-blue-500 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div v-if="menuOpen" class="md:hidden bg-white shadow-md">
            <router-link to="/" class="block px-4 py-2 text-gray-800 hover:text-blue-500">Home</router-link>
            <router-link to="/blog" class="block px-4 py-2 text-gray-800 hover:text-blue-500">Blog</router-link>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            menuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
    },
};
</script>

<style scoped>
/* Adicione estilos adicionais se necessário */
</style>