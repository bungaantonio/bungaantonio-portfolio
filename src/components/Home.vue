// src/components/Home.vue
<template>
    <main class="w-full">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="max-w-4xl mx-auto">
                <section class="intro flex flex-col md:flex-row items-center mt-12">
                    <section class="md:w-3/5 md:pr-8">
                        <h1 class="text-3xl font-bold mb-4">Bem-vindo!</h1>
                        <p class="mb-4">
                            Sou um entusiasta da tecnologia e do impacto social, com experiência em engenharia
                            informática, gestão de
                            produtos e desenvolvimento de software.
                        </p>
                    </section>

                    <section class="photo md:w-2/5">
                        <p class="image"><img alt="photo of Bunga António" src="/bungaantonio-brand.jpeg"
                                class="rounded-lg shadow-md"></p>
                        <p class="credit text-sm text-gray-600">photo: Faculdade de Engenharia UAN</p>
                        <p class="mf-name text-xl font-bold mt-2">Bunga António</p>
                    </section>
                </section>
                <div class="mt-12 text-center">
                    <p class="text-gray-700 text-lg">
                        Veja meus
                        <router-link to="/blog" class="text-blue-600 hover:underline">últimos artigos</router-link>
                        ou
                        <a href="https://www.linkedin.com/in/bungaantonio" target="_blank"
                            class="text-blue-600 hover:underline">entre em contato</a>.
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
};
</script>
