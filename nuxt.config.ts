//  import { NuxtConfig, defineNuxtConfig } from '@nuxtjs/next'; 

// export default defineNuxtConfig({
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
  // modules: ["@nuxtjs/tailwindcss"],

  // runtimeConfig: {
  // mailerUser: "",
  //  mailerPass: "",
  //  mailerLog: "",
  // },
  
// });

export default {
  // Load Tailwind CSS using the tailwindcss module
  modules: ["@nuxtjs/tailwindcss", 'nuxt-gtag'],

  gtag: {
   id: 'G-EKGCY9LVYF'
  },
  
  runtimeConfig: {
    mailerUser: "",
    mailerPass: "",
    mailerLog: "",
  },

  // Define the head property to include the favicon
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  }
};
