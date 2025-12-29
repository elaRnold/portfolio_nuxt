export default defineAppConfig({
  global: {
    picture: {
      dark: '/hero/foto_pro.png',
      light: '/hero/foto_pro.png',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/',
    email: 'ui-pro@nuxt.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'entypo-social:google-with-circle',
      'to': 'mailto:arnaldobenavides.ab@gmail.com',
      'target': '_blank',
      'aria-label': 'Arnaldo en gmail'
    }, {
      'icon': 'entypo-social:linkedin-with-circle',
      'to': 'https://www.linkedin.com/in/arnaldobr/',
      'target': '_blank',
      'aria-label': 'Arnaldo en linkedin'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/elaRnold/elaRnold',
      'target': '_blank',
      'aria-label': 'Arnaldo en GitHub'
    }]
  }
})
