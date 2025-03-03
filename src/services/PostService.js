import fm from 'front-matter';

class PostService {
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });
    }
     getExcerpt(text) {
            const maxLength = 150;
            if(text.length <= maxLength){
                return text;
            }
            return text.substring(0, maxLength) + "...";
        }

    async loadPosts() {
        try {
            const modules = import.meta.glob('../blogs-posts/*.md', {
                query: '?raw',
                import: 'default',
            });
            console.log('Modules found:', modules);
            const postPromises = Object.entries(modules).map(async ([path, resolver]) => {
                const markdown = await resolver();
                const content = fm(markdown);
                const id = path.split('/').pop().replace('.md', '');
                const description = content.attributes.description || ''; // Se não existir, usa uma string vazia
                return {
                    id,
                    excerpt: this.getExcerpt(description),
                    description,
                    ...content.attributes,
                };
            });
            const posts = await Promise.all(postPromises);
            posts.sort((a, b) => new Date(b.date) - new Date(a.date));
            console.log('Posts loaded:', posts);
            return posts;
        } catch (error) {
            console.error('Error loading posts:', error);
            return [];
        }
    }

    async getPost(postId) {
        try {
            const postData = await import(`../blogs-posts/${postId}.md?raw`);
            const markdown = postData.default;
            const content = fm(markdown);
            return {
                ...content.attributes,
                body: content.body,
            };
        } catch (error) {
            console.error('Error loading post:', error);
            return null;
        }
    }
}

export default new PostService();
