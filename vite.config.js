// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

import path from 'path';

export default defineConfig({
   content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('/src/assets/Background.png')", // 👈 using alias from vite
      },
    },
  },
  plugins: [
    react(),    
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 This defines @ as src
    },
  },
});


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'custom-bg': "url('@/assets/bg-image.jpg')", // 👈 using alias from vite
//       },
//     },
//   },
//   plugins: [],
// };
