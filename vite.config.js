import { defineConfig } from 'vite';

export default defineConfig({
    define: {
        'LLMresponse': 'LLMresponse', // Replace 'yourDefaultValue' with the actual default value
    },
    rollupOptions: {
        input: 'index.html', // Adjust the path as needed
    },
    build: {
        outDir: 'dist',
    },
});
