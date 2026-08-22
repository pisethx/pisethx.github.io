export default defineAppConfig({
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'slate'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'Monespiseth Ly'
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: 'Monespiseth Ly',
      light: '/icon.png',
      dark: '/icon.png'
    },
    search: true,
    colorMode: true,
    links: [{
      icon: 'i-simple-icons-github',
      to: 'https://github.com/pisethx',
      target: '_blank',
      'aria-label': 'GitHub'
    }, {
      icon: 'i-simple-icons-x',
      to: 'https://x.com/pisethx',
      target: '_blank',
      'aria-label': 'X'
    }]
  },
  footer: {
    credits: `© ${new Date().getFullYear()} Monespiseth Ly`,
    colorMode: false,
    links: [{
      icon: 'i-simple-icons-github',
      to: 'https://github.com/pisethx',
      target: '_blank',
      'aria-label': 'GitHub'
    }, {
      icon: 'i-simple-icons-x',
      to: 'https://x.com/pisethx',
      target: '_blank',
      'aria-label': 'X'
    }]
  },
  toc: {
    title: 'On this page'
  }
})
