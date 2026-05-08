export default {
  compatibilityDate: "2026-01-14",
  modules: ["@nuxtjs/tailwindcss", "nuxt-gtag"],
  gtag: {
    id: "G-EKGCY9LVYF",
  },
  nitro: {
    preset: "netlify",
  },
  runtimeConfig: {
    mailerUser: "",
    mailerPass: "",
    mailerLog: "",
  },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "//cdn-images.mailchimp.com/embedcode/classic-061523.css",
        },
      ],
      script: [
        {
          id: "mcjs",
          innerHTML: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/20978f5d4cff56cb21297d119/c1164c6c1c0a0b3af07dd0d23.js");`,
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        mcjs: ["innerHTML"],
      },
    },
  },
};
