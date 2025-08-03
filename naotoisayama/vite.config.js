import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        aboutme: 'aboutme.html',
        mywork: 'mywork.html',
        // Add other pages as needed
      }
    }
  }
});