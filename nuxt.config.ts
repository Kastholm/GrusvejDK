 /* import { NuxtConfig, defineNuxtConfig } from '@nuxtjs/next'; */

export default defineNuxtConfig({
  // Add the extendRoutes option for the loading screen
  /* router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'loading',
        path: '/',
        component: resolve(__dirname, 'pages/loading.vue'),
      });
    },
  },*/

  // Load Tailwind CSS using the tailwindcss module
  modules: ['@nuxtjs/tailwindcss'],
});