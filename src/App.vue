// src/App.vue
<template>
    <MainLayout>
        <div class="max-w-4xl mx-auto">
            <router-view></router-view>
        </div>
    </MainLayout>
</template>

<script>
import MainLayout from './components/MainLayout.vue';
export default {
    components: {
        MainLayout
    }
}
</script>
