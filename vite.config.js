import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Replace 'Personal_Website' with your GitHub repo name exactly
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
          fontFamily: {
            mono: ['JetBrains Mono', 'monospace'],
          },
        },
      },
    }),
  ],
  base: '/personal_website/', // <-- important for GitHub Pages
})
